import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="OWL surveille l'état du conducteur en utilisant une montre connectée et un téléphone. Si ces appareils détectent un état de somnolence ou estiment que l'utilisateur risque de s'assoupir, ils lui signalent et lui recommandent de faire une pause pour éviter tout danger d'accident."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
