import Instagram from "@/public/svgs/instagram.svg";
import Xiaohongshu from "@/public/svgs/xiaohongshu.svg";
import YouTube from "@/public/svgs/youtube.svg";
import Image from "next/image";
import Link from "next/link";
import useHamburgerStore from "../store";

export default function SocialLinks() {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <div className="flex gap-3 justify-end">
      <Link
        href="https://www.youtube.com/@SiyumengWang"
        target="_blank"
        tabIndex={isOpen ? 0 : -1}
      >
        <Image src={YouTube} height={30} width={30} alt="YouTube Link" />
      </Link>
      <Link
        href="https://www.instagram.com/siyumengwangpianist/?hl=en"
        target="_blank"
        tabIndex={isOpen ? 0 : -1}
      >
        <Image src={Instagram} height={30} width={30} alt="Instagram Link" />
      </Link>
      <Link
        href="https://www.xiaohongshu.com/user/profile/598490586a6a691f0b0525bd"
        target="_blank"
        tabIndex={isOpen ? 0 : -1}
      >
        <Image
          src={Xiaohongshu}
          height={30}
          width={30}
          alt="Xiaohongshu Link"
        />
      </Link>
    </div>
  );
}
