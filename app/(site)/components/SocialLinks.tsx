import Instagram from "@/public/svgs/instagram.svg";
import Xiaohongshu from "@/public/svgs/xiaohongshu.svg";
import Image from "next/image";
import YouTube from "@/public/svgs/youtube.svg";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex gap-3 justify-end">
      <Link href="https://www.youtube.com/@SiyumengWang" target="_blank">
        <Image src={YouTube} height={30} width={30} alt="YouTube Link" />
      </Link>
      <Link
        href="https://www.instagram.com/siyumengwangpianist/?hl=en"
        target="_blank"
      >
        <Image src={Instagram} height={30} width={30} alt="Instagram Link" />
      </Link>
      <Link
        href="https://www.xiaohongshu.com/user/profile/598490586a6a691f0b0525bd"
        target="_blank"
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
