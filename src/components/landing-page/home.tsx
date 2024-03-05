import React from "react";
import { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Footer } from "./footer";
import { LandingPageData } from "../utils/type";

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData>(
    {} as LandingPageData
  );
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div id='Home'>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Footer />
    </div>
  );
};
