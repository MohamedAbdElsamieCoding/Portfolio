const Footer = () => {
  return (
    <footer className="flex justify-between items-center border-t border-neutral py-20 px-20 bg-[#040E1F]">
      <p className="tracking-[-0.7px] font-black text-sm">ARCHITECT.DEV</p>
      <ul className="flex gap-10 text-text font-medium text-xs">
        <li>Source Code</li>
        <li>Privacy</li>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
      <p className="text-text tracking-[1.2px] font-medium text-xs">© 2024 ARCHITECT.DEV — ENGINEERED WITH PRECISION</p>
    </footer>
  );
};

export default Footer;
