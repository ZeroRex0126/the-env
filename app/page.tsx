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
  let [webData, setWebData] = useState({});

  async function getWebData() {
    let webdata = await getWebDatas();
    setWebData(webdata);
  }

  useEffect(() => {
    getWebData()
  }, []);

  const openModal = () => {
    console.log(webData);
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
      <Featured />
      {/* <Manage /> */}
      <FAQ />
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}
      <Footer />
    </main>
  );
}
