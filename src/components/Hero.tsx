import { MdWorkHistory } from "react-icons/md";
import { DotBackground } from "./ui/DotBackground";
import { Spotlight } from "./ui/Spotlight";
import { TailwindButton } from "./ui/TailwindButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    //pt-36
    <section id="home" className="">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* Purple */}
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="yellow"
        />
        {/* Blue */}
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="orange" />
      </div>
      <DotBackground />
      {/* my-20  pt-36*/}
      <div
        className="flex justify-center items-center
       relative min-h-screen z-18 my-auto"
      >
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex 
        flex-col items-center"
        >
          {/* <h2
            className="uppercase tracking-widest text-xs text-center
           text-blue-100 max-w-80"
          >
            Building Websites That Work for You
          </h2> */}
          <TextGenerateEffect
            words="Hello, I'm Adam Ajibade, a Web Developer "
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p
            className="text-center md:-tracking-wider mb-4 text-sm
           md:text-lg lg:text-2xl"
          >
            Fullstack Developer | Crafting Modern Solutions with Nextjs and MERN
          </p>
          <a href="#projects">
            <TailwindButton
              title="View my work"
              otherClasses="justify-center py-1"
              icon={<MdWorkHistory />}
              postion="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
