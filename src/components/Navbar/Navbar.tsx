import { navLinks } from "./navbar.service";

const Navbar = () => {
  return (
    <div className="py-4 px-6 md:px-20 bg-[#0C1725] shadow-lg shadow-primary/4">
      <div className="flex justify-between items-center md:py-6">
        <h1 className="text-primary font-bold tracking-[-1.2px] leading-[33.6px] cursor-default font-headline">
          ARCHITECT.DEV
        </h1>
        <ul className="hidden md:flex gap-10">
          {navLinks.map((item) => (
            <li
              id={item.id}
              className="cursor-pointer text-[#D3C5AC] text-sm tracking-[1.4px]"
            >
              {item.title}
            </li>
          ))}
        </ul>
        <button className="bg-primary px-6 py-2.5 rounded-full text-neutral font-bold text-sm tracking-[1.4px]">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
