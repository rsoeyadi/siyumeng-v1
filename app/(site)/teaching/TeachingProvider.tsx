"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "../components/AnimatedDiv";
import useHamburgerStore from "../store";

interface teachingProviderProps {
  data: any;
}

export default function TeachingProvider({
  data: jobs,
}: teachingProviderProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <div className={`md:grid grid-cols-2 gap-2`}>
      {jobs?.map((job: any) => (
        <AnimatedDiv key={job.company + job.image}>
          <div
            className="mt-20 max-w-3xl w-full relative flex mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            tabIndex={isOpen ? -1 : 0}
          >
            <div className="relative mx-4 -mt-6 mb-5 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white ">
              <Image
                src={job.image}
                width="0"
                height="0"
                priority={true}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Siyumeng Wang Teaching Experience, company logo"
              />
            </div>
            <div className="p-6 pt-0">
              <h5 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {job.company}
              </h5>
              <div className="block text-base font-light leading-relaxed text-inherit antialiased">
                <PortableText value={job.description} />
              </div>
            </div>
            <div className="p-6 pt-0">
              {job.link && (
                <Link
                  href={job.link}
                  target="_blank"
                  tabIndex={isOpen ? -1 : 0}
                >
                  <div
                    className="cursor-pointer max-w-fit bg-black hover:bg-gray-500 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    data-ripple-light="true"
                  >
                    Visit {job.company}&rsquo;
                    {job.company.slice(-1) === "s" ? "" : "s"} Website
                  </div>
                </Link>
              )}
            </div>
          </div>
        </AnimatedDiv>
      ))}
    </div>
  );
}
