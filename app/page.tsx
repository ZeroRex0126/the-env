"use client";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/index";
import Digital from "./components/Digital/index";
import FAQ from "./components/FAQ/index";
import Featured from "./components/Featured/index";
import Footer from "./components/Footer/index";
import Contactusform from "./components/ContactModal/Contactus";
import Navbar from "./components/Navbar/index";
import Ourteam from "./components/Ourteam/index";
import MessageDialog from "./messageDialog/messageDialog";
import { getWebDatas } from "./services/web-utils";
import Services from "./components/ServicesComp";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  let [webData, setWebData] = useState({
    featureWorks: [],
    faq: [],
    services: [],
  });

  async function getWebData() {
    setWebData(await getWebDatas());
  }

  useEffect(() => {
    getWebData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <main>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />
      {/* <MessageDialog/> */}
      <Contactusform
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openModal={openModal}
      />
      <Banner openModal={openModal} />
      <button
        className="text-sm md:text-xl font-semibold hover:shadow-xl bg-skybtn text-white py-3 px-6 md:py-5 md:px-14 rounded-full absolute"
        onClick={() => {
          console.log(webData);
        }}
      >
        LOG
      </button>
      {/* <Dedicated /> */}
      <Ourteam />
      <Digital openModal={openModal} />
      <Services serviceDat={webData.services} />
      {/* <Beliefs /> */}
      {/* <Wework /> */}
      <Featured featureWorks={webData.featureWorks} />
      {/* <Manage /> */}
      <FAQ faq={webData.faq} />
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}
      <Footer />
    </main>
  );
}
