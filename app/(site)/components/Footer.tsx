import Instagram from "@/public/svgs/instagram.svg";
import Xiaohongshu from "@/public/svgs/xiaohongshu.svg";
import Image from "next/image";
import YouTube from "@/public/svgs/youtube.svg";
import Link from "next/link";
import useHamburgerStore from "../store";
export default function Footer() {
  let isMediumScreenUp =
    typeof window !== "undefined" && window.innerWidth >= 1024;
  if (typeof window !== "undefined") {
    const handleResize = () => {
      isMediumScreenUp = window.innerWidth >= 1024;
    };
    window.onresize = handleResize;
  }
  const isOpen = useHamburgerStore((state) => state.isOpen);
  return (
    <div className=" grid lg:grid-cols-3 gap-4 bg-black py-7 bottom-0 left-0">
      <div className="lg:col-span-1 text-center lg:flex lg:items-center lg:justify-center">
        <span className="z-50 text-white text-3xl lg:text-3xl xl:text-4xl uppercase">
          Siyumeng Wang
        </span>
      </div>
      <div className="lg:col-span-1 flex items-center justify-center">
        <div className="flex gap-3 justify-end">
          <Link
            href="https://www.youtube.com/@SiyumengWang"
            target="_blank"
            tabIndex={isOpen && !isMediumScreenUp ? -1 : 0}
          >
            <Image src={YouTube} height={30} width={30} alt="YouTube Link" />
          </Link>
          <Link
            href="https://www.instagram.com/siyumengwangpianist/?hl=en"
            target="_blank"
            tabIndex={isOpen && !isMediumScreenUp ? -1 : 0}
          >
            <Image
              src={Instagram}
              height={30}
              width={30}
              alt="Instagram Link"
            />
          </Link>
          <Link
            href="https://www.xiaohongshu.com/user/profile/598490586a6a691f0b0525bd"
            target="_blank"
            tabIndex={isOpen && !isMediumScreenUp ? -1 : 0}
          >
            <Image
              src={Xiaohongshu}
              height={30}
              width={30}
              alt="Xiaohongshu Link"
            />
          </Link>
        </div>
      </div>
      <div className="lg:col-span-1 text-center">
        <div className="text-white">
          &copy; {new Date().getFullYear()} Siyumeng Wang.
        </div>
        <div className="text-white">ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
}
