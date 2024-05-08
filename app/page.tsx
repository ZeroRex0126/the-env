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
import MessageDialog from "./components/messageDialog/messageDialog";
import { getWebDatas } from "./services/web-utils";
import Services from "./components/ServicesComp";
import Loader from "./components/Loader";
import { messageProp } from "./interfaces/modalProp.interface";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  let [showMessage, setShowMessage] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [messageProp, setMessageProp] = useState({
    btnMessage: "",
    message: "",
    icon: "",
  });
  let [webData, setWebData] = useState({
    featureWorks: [],
    faq: [],
    services: [],
    links: [],
  });

  async function getWebData() {
    setWebData(await getWebDatas());
  }

  useEffect(() => {
    getWebData();
    setIsLoading(false);
  }, []);

  const openModal = (state = true) => {
    setIsOpen(state);
  };

  const toggleMessageModal = (messageProp?: messageProp) => {
    messageProp
      ? setMessageProp(messageProp)
      : setMessageProp({
          btnMessage: "Great, Chat soon!",
          message: "Message has been sent, we will contact you shortly.",
          icon: `<svg
          class="mx-auto mb-4 text-gray-400 w-16 h-16 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
        >
          <path
            class="fill-green text-green"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"
          />
        </svg>`,
        });
    setShowMessage(!showMessage);
  };

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />

          <MessageDialog
            showMessage={showMessage}
            toggleModal={toggleMessageModal}
            messageProp={messageProp}
          />
          <Contactusform
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            openModal={openModal}
            toggleModal={toggleMessageModal}
          />
          <Banner openModal={openModal} />
          {/* <Dedicated /> */}
          <Services serviceDat={webData.services} />
          <Digital openModal={openModal} />
          {/* <Beliefs /> */}
          {/* <Wework /> */}
          {/* <Manage /> */}
          <Ourteam />
          <Featured featureWorks={webData.featureWorks} />
          <FAQ faq={webData.faq} />
          {/* <Testimonials /> */}
          {/* <Articles /> */}
          {/* <Joinus /> */}
          {/* <Insta /> */}
          <Footer links={webData.links} />
        </>
      )}
    </main>
  );
}
