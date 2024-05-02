"use client";
import { faq } from "@/app/interfaces/webData.interface";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = ({ faq }: { faq: faq[] }) => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl m180px py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        {faq.map((items, i) => (
          <div key={i} className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>{items.heading}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    {items.detail}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
