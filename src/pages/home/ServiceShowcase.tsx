import { Link } from "react-router-dom";

const services = [
  {
    name: "حجز رحلة عبّارة",
    icon: "/assets/images/ferryicon2.png",
    href: "",
  },
  {
    name: "الجدول الزمني",
    icon: "/assets/images/time-table.png",
    href: "",
  },
  {
    name: "الإعلانات",
    icon: "/assets/images/advertisment.png",
    href: "",
  },
  {
    name: "تأجير الحافلات",
    icon: "/assets/images/bus-hire.png",
    href: "",
  },
];

const ServiceShowcase = () => {
  return (
    <section className="container -translate-y-20 grid grid-cols-2 gap-2 place-items-center">
      {services.map((service) => (
        <Link
          to={service.href}
          key={service.name}
          className="bg-main-foregroundDark w-full py-4 rounded-lg flex flex-col items-center hover:bg-main-foregroundDark/80 duration-300 cursor-pointer"
        >
          <img
            width={34}
            height={34}
            loading="lazy"
            src={service.icon}
            alt={service.name}
          />
          <p className="text-white">{service.name}</p>
        </Link>
      ))}
    </section>
  );
};
export default ServiceShowcase;
