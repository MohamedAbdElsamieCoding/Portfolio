const About = () => {
  return (
    <section
      id="about"
      className="bg-[#081425] flex flex-col justify-center py-40 px-20 gap-20 min-h-screen"
    >
      <div className="flex justify-between gap-20">
        <div className="flex flex-col gap-4 w-1/2">
          <p className="font-medium text-text tracking-[1.4px] text-sm">
            THE ENGINEER
          </p>
          <h1 className="text-second-text text-4xl font-semibold font-headline tracking-[-0.8px]">
            Philosophy of Clean Architecture
          </h1>
          <p className="text-text text-lg font-headline font-light">
            I am a frontend specialist dedicated to bridging the gap between
            sophisticated design and robust engineering. With a deep focus on
            the React ecosystem, I build applications that are not only visually
            stunning but also maintainable and performance-driven.
          </p>
          <p className="text-text text-lg font-headline font-light">
            My approach is rooted in precision, utilizing TypeScript to ensure
            type-safety and React's best practices to create modular, reusable
            components that stand the test of time.
          </p>
        </div>
        <div className="flex flex-col gap-12 pl-8">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-text tracking-[1.4px] text-sm">
              EDUCATION
            </p>
            <h1 className="tracking-[-0.24px] font-headline font-medium text-2xl">
              Tanta University
            </h1>
            <p className="font-headline text-base font-light text-text">
              Class of 2019 — Bachelor's Degree
            </p>
            <div className="border border-secondary rounded-lg px-4 py-1 w-fit">
              <p className="tracking-[0.6px] font-medium text-xs text-secondary">
                Honors: Good Grade
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-text tracking-[1.4px] text-sm">
              EXPERTISE
            </p>
            <h1 className="tracking-[-0.24px] font-headline font-medium text-2xl">
              Full Stack Evolution
            </h1>
            <p className="font-headline text-base font-light text-text">
              Specializing in the Frontend layer of high-availability digital
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
