const services = [
  {
    name: "حافلة المدينة",
    icon: "/assets/images/bus-hire.png",
  },
  {
    name: "الحافلة بين المدن",
    icon: "/assets/images/bus-hire.png",
  },
  {
    name: "العقود",
    icon: "/assets/images/time-table.png",
  },
  {
    name: "الإعلانات",
    icon: "/assets/images/advertisment.png",
  },
  {
    name: "العبّارة",
    icon: "/assets/images/ferryicon2.png",
  },
  {
    name: "تأجير الحافلات",
    icon: "/assets/images/bus-hire.png",
  },
];

const Services = () => {
  return (
    <section className="my-24">
      <div className="container">
        <h2 className="pb-8 text-xl lg:text-3xl font-bold max-lg:text-center">
          الخدمات
        </h2>

        <div className="lg:px-20 flex items-center max-lg:flex-col gap-4 justify-center">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex-1 flex flex-col gap-y-2 relative"
            >
              <img
                width={50}
                height={50}
                loading="lazy"
                src={service.icon}
                alt={service.name}
                className="mx-auto rounded-md invert"
              />
              <p className="font-bold mt-4 lg:text-xl text-center">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
