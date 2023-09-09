"use client";
import coverBottom from "@/public/images/cover-contact-bottom.png";
import coverTop from "@/public/images/cover-contact-top.jpg";
import CoverPhoto from "../components/CoverPhoto";
import { ContactForm } from "../components/Form";
import useHamburgerStore from "../store";

export default function Home() {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <>
      <div className="">
        <div
          className="h-[80vh] md:h-[100vh] relative"
          style={{
            width: "100vw",
            clipPath: "polygon(0 0, 100% 0, 100% 90.5%, 0 100%)",
          }}
        >
          <CoverPhoto coverPhoto={coverTop} objectPosition="left" />

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div
              className={`text-white text-4xl font-bold uppercase ease-in-out duration-500 ${
                isOpen ? "blur-sm md:blur-0" : ""
              }`}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <p
          className={`text-4xl px-5 mx-2 lg:mx-auto lg:max-w-6xl ${
            isOpen ? "blur-sm md:blur-0" : ""
          }`}
        >
          Contact Form
        </p>
        <ContactForm />
      </div>
      <div>
        <div
          className="h-[40vh] md:h-[60vh] relative"
          style={{
            width: "100vw",
            clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <CoverPhoto coverPhoto={coverBottom} objectPosition="right" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"></div>
        </div>
      </div>
    </>
  );
}
