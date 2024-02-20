"use client";
import { useState } from "react";
import Aboutus from "./components/Aboutus/index";
import Banner from "./components/Banner/index";
import Digital from "./components/Digital/index";
import FAQ from "./components/FAQ/index";
import Featured from "./components/Featured/index";
import Footer from "./components/Footer/index";
import Contactusform from "./components/ContactModal/Contactus";
import Navbar from "./components/Navbar/index";
import Ourteam from "./components/Ourteam/index";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <main>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />
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
