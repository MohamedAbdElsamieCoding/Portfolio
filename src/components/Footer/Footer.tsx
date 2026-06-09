const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-neutral py-8 md:py-20 px-6 md:px-20 bg-[#040E1F] w-full gap-4">
        <p className="tracking-[-0.7px] font-black text-sm">ARCHITECT.DEV</p>
        <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-10 text-text font-medium text-xs justify-center md:justify-start">
          <li
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://github.com/MohamedAbdElsamieCoding/portfolio",
                "_blank",
              );
            }}
          >
            Source Code
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mohamed-abd-elsamie/",
                "_blank",
              );
            }}
          >
            LinkedIn
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://github.com/MohamedAbdElsamieCoding",
                "_blank",
              );
            }}
          >
            GitHub
          </li>
        </ul>
        <p className="text-text tracking-[1.2px] font-medium text-xs text-center md:text-right">
          © 2026 ARCHITECT.DEV — ENGINEERED WITH PRECISION
        </p>
      </div>
    </footer>
  );
};

export default Footer;
