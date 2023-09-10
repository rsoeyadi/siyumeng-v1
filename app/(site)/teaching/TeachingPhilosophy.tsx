"use client";
import { PortableText } from "@portabletext/react";
import AnimatedDiv from "../components/AnimatedDiv";
import useHamburgerStore from "../store";

interface teachingPhilosophyProps {
  data: any;
}

export default function TeachingPhilosophy({
  data: teachingPhilosophy,
}: teachingPhilosophyProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <div
      className={`px-3 max-w-5xl mx-auto my-10 text-center justify-center ${
        isOpen ? "blur-sm lg:blur-0" : ""
      }`}
    >
      <AnimatedDiv>
        <h2 className="text-left lg:text-center text-2xl font-bold mb-3">
          Teaching Philosophy
        </h2>
      </AnimatedDiv>
      <AnimatedDiv>
        <div className="text-left lg:text-center text-base font-light leading-relaxed text-inherit antialiased">
          <PortableText
            value={teachingPhilosophy?.description as unknown as any}
          />
        </div>
      </AnimatedDiv>
    </div>
  );
}
