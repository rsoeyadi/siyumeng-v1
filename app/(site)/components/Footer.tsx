import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <div className="grid grid-rows-3 gap-4 bg-slate-700 py-7 mt-28">
      <div className="text-center flex items-center justify-center">
        <span className="text-white text-3xl uppercase ">
          Siyumeng Wang
        </span>
      </div>
      <div className="flex items-center justify-center">
        <SocialLinks />
      </div>

      <div className="text-white">
        <div className="text-white text-center">
          &copy; {new Date().getFullYear()} Siyumeng Wang.
        </div>
        <div className="text-white text-center">ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
}
