import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 bg-slate-700 py-7 mt-28">
      <div className="lg:col-span-1 text-center lg:flex lg:items-center lg:justify-center">
        <span className="text-white text-3xl lg:text-4xl uppercase">Siyumeng Wang</span>
      </div>
      <div className="lg:col-span-1 flex items-center justify-center">
        <SocialLinks />
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
