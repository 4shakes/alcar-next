import React from "react";

import Banner from "@/components/ui/banner/banner";
import Contadores from "@/components/modules/nosotros/counters";
import { CardHorizontal } from "@/components/modules/nosotros/card-horizontal";
import { AcercaDe } from "@/components/modules/nosotros/acerca-de";

const About = () => {
  return (
    <>
      <Banner
        title="Nosotros"
        image="nosotros.jpg"
      />
      <AcercaDe />
      <Contadores />
      <CardHorizontal />
    </>
  );
};

export default About;
