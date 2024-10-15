const stats = {
  buses: [
    {
      name: "الركاب",
      stats: "4 ميلون",
      icon: "/assets/images/passengers.png",
    },
    {
      name: "خطوط الحافلات",
      stats: "29",
      icon: "/assets/images/loc-2.png",
    },
    {
      name: "راكب يومياّ",
      stats: "11.7",
      icon: "/assets/images/chair-wheel.png",
    },
    {
      name: "اسطول الحافلات",
      stats: "485",
      icon: "/assets/images/bus.png",
    },
  ],
  ferries: [
    {
      name: "الركاب",
      stats: "236 ألف",
      icon: "/assets/images/passengers.png",
    },
    { name: "خطوط العبّارات", stats: "6", icon: "/assets/images/loc-2.png" },
    {
      name: "راكب يومياّ",
      stats: "650",
      icon: "/assets/images/chair-wheel.png",
    },
    { name: "اسطول العبّارات", stats: "6", icon: "/assets/images/ferry.png" },
  ],
};

const OurStatistics = () => {
  return (
    <section className="container">
      <h2 className="pb-5 text-xl lg:text-3xl font-bold text-center">
        <span className="text-main">أرقام</span> و إحصائيات
      </h2>

      <h3 className="text-main pb-5 lg:text-xl font-bold text-center">
        الحافلات
      </h3>

      <div className="flex gap-4 max-lg:flex-col">
        {stats.buses.map((stat) => (
          <div
            key={stat.name}
            className="py-8 border border-main-foregroundDark w-full rounded-lg flex flex-col items-center hover:bg-main-foregroundDark/5 duration-300 cursor-pointer"
          >
            <img
              width={50}
              height={50}
              loading="lazy"
              src={stat.icon}
              alt={stat.name}
            />
            <p className="font-bold text-xl mt-5">{stat.stats}</p>
            <p>{stat.name}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-main pb-5 lg:text-xl font-bold text-center">
        العبّارات
      </h3>
      <div className="flex gap-4 max-lg:flex-col">
        {stats.ferries.map((stat) => (
          <div
            key={stat.name}
            className="py-8 border border-main-foregroundDark w-full rounded-lg flex flex-col items-center hover:bg-main-foregroundDark/5 duration-300 cursor-pointer"
          >
            <img
              width={50}
              height={50}
              loading="lazy"
              src={stat.icon}
              alt={stat.name}
            />
            <p className="font-bold text-xl mt-5">{stat.stats}</p>
            <p>{stat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurStatistics;
