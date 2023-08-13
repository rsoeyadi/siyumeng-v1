export default function Footer() {
  return (
    <div className="w-full max-h-48 bg-slate-700 grid grid-rows-4">
      <p className="text-white">Siyumeng Wang</p>
      <div className="grid grid-cols-3"></div>
      <div>© {new Date().getFullYear()} Siyumeng Wang.</div>
      <div> ALL RIGHTS RESERVED</div>
    </div>
  );
}
