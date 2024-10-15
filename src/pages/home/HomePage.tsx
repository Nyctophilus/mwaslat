import { lazy } from "react";
const OurStatistics = lazy(() => import("./OurStatistics"));
const News = lazy(() => import("./News"));
const Offers = lazy(() => import("./Offers"));
const Services = lazy(() => import("./Services"));
const HeroSection = lazy(() => import("./HeroSection"));
const ServiceShowcase = lazy(() => import("./ServiceShowcase"));
const PopularDestinations = lazy(() => import("./PopularDestinations"));
const OurPartners = lazy(() => import("./OurPartners"));

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceShowcase />
      <PopularDestinations />
      <Offers />
      <Services />
      <News />
      <OurStatistics />
      <OurPartners />
    </>
  );
};
export default HomePage;
6;
