import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Vous avez des questions ou des commentaires? N'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
