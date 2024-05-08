import { footerProducts } from "@/app/data/navItems";
import { linksDat } from "@/app/interfaces/webData.interface";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const FooterComp = styled.div`
`;

const footer = ({ links }: { links: linksDat[] }) => {
  return (
    <FooterComp className="bg-black -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
              {" "}
              The Envelope
            </h3>
            <p className="text-white text-xl font-extrabold mb-9">
                Socials & Contacts
              </p>
            <div className="flex gap-4">
              {links.map((item, i) => (
                <div key={i} className="footer-icons">
                  <a href={item.link} target="_blank">
                    <div
                      className="social-icon"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  </a>
                </div>
              ))}
            </div>
            
          </div>

          {/* CLOUMN-2/3 */}

          {footerProducts.map((product) => (
            <div
              key={product.id}
              className="grid justify-center group relative col-span-4 md:justify-end"
            >
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={link.href}
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2024 - All Rights Reserved by The Envelope
              </h3>
            </div>
            {/* <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </FooterComp>
  );
};

export default footer;
