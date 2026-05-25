import { CiMail } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#040E1F] flex flex-col justify-center items-center py-40 px-20 gap-4 min-h-screen"
    >
      <p className="text-text font-medium tracking-[1.4px] text-sm">
        CONNECTIVITY
      </p>
      <h1 className="font-bold text-7xl tracking-[-2.88px] text-second-text">
        Start a Conversation
      </h1>
      <div className="grid grid-cols-3 gap-8 pt-8 pb-16">
        <div className="p-10 flex flex-col gap-2 border border-neutral rounded-xl items-center bg-[#081425]">
          <CiMail className="text-2xl text-text" />
          <p className="text-second-text tracking-[1.4px] font-medium text-sm">
            EMAIL
          </p>
          <p className="font-normal font-headline text-base text-text">
            mohamedamrss123@gmail.com
          </p>
        </div>
        <div className="p-10 flex flex-col gap-2 border border-neutral rounded-xl items-center bg-[#081425]">
          <IoMdPersonAdd className="text-2xl text-text" />
          <p className="text-second-text tracking-[1.4px] font-medium text-sm">
            LINKEDIN
          </p>
          <p className="font-normal font-headline text-base text-text">
            in/mohamed-abd-elsamie
          </p>
        </div>
        <div className="p-10 flex flex-col gap-2 border border-neutral rounded-xl items-center bg-[#081425]">
          <SiGithub className="text-2xl text-text" />
          <p className="text-second-text tracking-[1.4px] font-medium text-sm">
            GITHUB
          </p>
          <p className="font-normal font-headline text-base text-text">
            @MohamedAbdElsamieCoding
          </p>
        </div>
      </div>
      <div className="bg-[#081425]/80 backdrop-blur-sm pt-12 pb-16 px-8 md:px-12 flex flex-col gap-10 border border-white/10 rounded-3xl w-2/3">
        <div className="flex flex-col gap-2">
          <p className="text-primary text-sm tracking-[3px] uppercase text-center">
            Contact
          </p>

          <h1 className="font-headline text-3xl md:text-4xl font-semibold text-white text-center">
            Quick Message
          </h1>
        </div>

        <form className="flex flex-col gap-6 w-full items-center">
          <input
            type="text"
            placeholder="Your Name"
            className=" w-full px-5 py-5 rounded-2xl border border-white/10 bg-white/3 text-white placeholder:text-white/30 placeholder:text-lg placeholder:font-headline focus:outline-none focus:border-primary focus:bg-white/5 transition-all duration-300"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-5 rounded-2xl border border-white/10 bg-white/3 text-white placeholder:text-white/30 placeholder:text-lg placeholder:font-headline focus:outline-none focus:border-primary focus:bg-white/5 transition-all duration-300"
          />

          <textarea
            placeholder="Tell me about your project"
            rows={7}
            className="w-full px-5 py-5 rounded-2xl border border-white/10 bg-white/3 text-white placeholder:text-white/30 placeholder:text-lg placeholder:font-headline resize-none focus:outline-none focus:border-primary focus:bg-white/5 transition-all duration-300"
          />

          <button className="mt-2 w-fit px-8 py-4 rounded-xl bg-primary text-black font-semibold hover:scale-[1.02] transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
