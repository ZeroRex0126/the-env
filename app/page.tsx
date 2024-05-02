"use client";
import { useEffect, useState } from "react";
import Aboutus from "./components/Aboutus/index";
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

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  let [webData, setWebData] = useState({ featureWorks: [],faq:[] });

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
      <Aboutus />
      {/* <Dedicated /> */}
      <Digital openModal={openModal} />
      {/* <Beliefs /> */}
      {/* <Wework /> */}
      <Ourteam />
      <Featured featureWorks={webData.featureWorks} />
      {/* <Manage /> */}
      <FAQ faq={webData.faq}/>
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}
      <Footer />
    </main>
  );
}
