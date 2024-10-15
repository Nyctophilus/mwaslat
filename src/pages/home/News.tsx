const newsItems = [
  {
    title: "مواصلات تُطلق أول حافلة كهربائية في سلطنة عمان",
    text: "مواصلات تُطلق أول حافلة كهربائية في سلطنة عمان",
    image:
      "https://mwasalat.om/Uploads/HomePageNews/3701868c-aaee-46ae-a299-17dcda400e95e23aedc5-c4b1-490f-8247-b062c939e3ee.jpg",
  },
  {
    title:
      "مواصلات تستضيف مؤتمر الاتحاد العالمي للنقل والمواصلات العامة في الشرق الأوسط وشمال أفريقيا 2024 في صلالة",
    text: "مواصلات تستضيف مؤتمر الاتحاد العالمي للنقل والمواصلات العامة في الشرق الأوسط وشمال أفريقيا 2024 في صلالة",
    image:
      "https://mwasalat.om/Uploads/HomePageNews/aa51e98f-5a96-4ead-811a-5f17520537ec64a65a7f-ebfe-4a25-b479-513691503b5c.jpg",
  },
  {
    title: 'توقيع برنامج تعاون بين "مواصلات" وشركة أوديس للطيران',
    text: 'توقيع برنامج تعاون بين "مواصلات" وشركة أوديس للطيران',
    image:
      "https://mwasalat.om/Uploads/HomePageNews/72a659b5-154e-4169-bd24-8019c71f830a7170effa-2c06-41f7-8548-84afa123fcaf.jpg",
  },
];

const News = () => {
  return (
    <section className="bg-main-foregroundDark py-10 my-24">
      <div className="container">
        <h2 className="text-main pb-5 text-xl lg:text-3xl font-bold text-center">
          الأخبار
        </h2>

        <div className="flex gap-x-4 gap-y-10 justify-center max-lg:flex-col max-lg:items-center">
          {newsItems.map((n) => (
            <div
              key={n.title}
              className="max-w-[250px] flex flex-col gap-y-2 relative"
            >
              <img
                width={250}
                height={250}
                loading="lazy"
                src={n.image}
                alt={n.title}
                className="mx-auto rounded-md"
              />
              <p className="font-bold mt-4 lg:text-xl">{n.title}</p>
              <p className="text-sm lg:text-base">{n.text}</p>

              <button className="bg-main hover:bg-main-dark duration-300 text-white rounded-md px-10 py-2 self-end mt-auto">
                المزيد
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default News;
