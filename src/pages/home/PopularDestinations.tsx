import { GridLayout } from "@/components/GridLayout/GridLayout";

const PopularDestinations = () => {
  return (
    <section className="container my-10">
      <h2 className="pb-5 text-2xl lg:text-4xl font-bold text-center">
        الوجهات الشائعة من <span className="text-main">مسقط</span>
      </h2>
      <GridLayout />
    </section>
  );
};
export default PopularDestinations;
