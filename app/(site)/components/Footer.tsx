import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <div className="w-full max-h-52 bg-slate-700 grid grid-rows-4 py-3">
      <p className="text-white uppercase text-center text-3xl">Siyumeng Wang</p>
      <SocialLinks />
      <div className="text-white text-center uppercase ">
        © {new Date().getFullYear()} Siyumeng Wang.
      </div>
      <div className="text-white text-center uppercase ">
        ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
