"use client";
import cover from "@/public/images/cover-teaching.jpg";
import { getJobs, getTeachingPhilosophy } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import CoverPhoto from "../components/CoverPhoto";
import Loading from "../loading";
import useHamburgerStore from "../store";

export default function Home() {
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const { data: jobs, error, isLoading } = useSWR("jobs", getJobs);
  const {
    data: teachingPhilosophy,
    error: teachingPhilosophyError,
    isLoading: teachingPhilosophyIsLoading,
  } = useSWR("teachingPhilosophy", getTeachingPhilosophy);

  if (error || teachingPhilosophyError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || teachingPhilosophyIsLoading) return <Loading />;

  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[100vh] background-image flex items-center justify-center text-white text-4xl font-bold uppercase relative"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
        }}
      >
        <CoverPhoto coverPhoto={cover} objectPosition="18%" />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <div
            className={`text-white text-4xl font-bold uppercase ease-in-out duration-500 ${
              isOpen ? "blur-sm md:blur-0" : ""
            }`}
          >
            Teaching
          </div>
        </div>
      </div>
      {/* Teaching Philosophy Section */}
      <div
        className={`px-3 max-w-5xl mx-auto my-10 text-center justify-center ${
          isOpen ? "blur-sm md:blur-0" : ""
        }`}
      >
        <h2 className="text-left lg:text-center text-2xl font-bold mb-3">
          Teaching Philosophy
        </h2>
        <div className="text-left lg:text-center text-base font-light leading-relaxed text-inherit antialiased">
          <PortableText
            value={teachingPhilosophy?.description as unknown as any}
          />
        </div>
      </div>
      <div className={`md:grid grid-cols-2 gap-2`}>
        {jobs?.map((job) => (
          <div
            key={job.company + job.image}
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
              <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                <PortableText value={job.description} />
              </p>
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
        ))}
      </div>
      <div
        className="-z-10 h-[40vh] md:h-[50vh] absolute bottom-0 left-0 bg-black"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 0, 100% 97%, 100% 100%, 0 100%)",
          transform: "skewY(0.0001deg)",
        }}
      ></div>
    </div>
  );
}
