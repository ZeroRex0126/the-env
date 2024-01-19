"use client";
import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Contactusform from './components/Navbar/Contactus';


export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (

    <main>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
      <Contactusform isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
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
  )
}
