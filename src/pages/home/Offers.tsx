const Offers = () => {
  return (
    <section className="bg-main-foregroundDark py-10 my-24">
      <div className="container">
        <h2 className="pb-5 text-xl lg:text-3xl font-bold text-center">
          العروض
        </h2>

        <div className="p-2 bg-white max-w-md mx-auto">
          <div className="relative bg-main-foregroundDark/65">
            <img
              src="https://mwasalat.om/ar/images/offer-img.png"
              alt="offer banner"
              loading="lazy"
              className="absolute rotate-90"
            />
            <img
              src="https://mwasalat.om/Uploads/Promotions/2022-1-2-2-38-51mw2.jpg"
              alt="Bus image"
              loading="lazy"
              height={450}
              width={450}
            />

            <div className="text-main-foreground p-2">
              <h4 className="font-semibold text-lg">مسار A1</h4>
              <p>خدمات المطار</p>
              <p>خصم 50%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offers;
