import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about" className="pb-32">
            {/* border border-blue-50/20 grid md:grid-cols-2 */}
            <motion.div
                initial={{
                    y: 80,
                }}
                whileInView={{
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{ once: true }}
                className="from-slate-50/15 z-[20]
        bg-gradient-to-b to-slate-50/5
        px-8 py-10 backdrop-blur-md rounded
        sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50vw] mx-auto gap-5 relative
        border border-blue-50/20"
            >
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                    }}
                    viewport={{ once: true }}
                    className="absolute -z-10 h-[70%] w-full max-w-xl rounded-full
          bg-orange-400/20 blur-3xl filter left-1/2 -translate-x-[50%]"
                />
                {/* About me */}
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-balance text-2xl">
                        About me
                    </h3>
                    <p
                        className="mt-4 max-w-xl text-[15px] text-center
          text-muted-foreground leading-[25px]"
                    >
                        I’m a dedicated full-stack developer who loves making a
                        difference through my work. With experience in both
                        frontend and backend development, I enjoy turning ideas
                        into real results with code.
                        <br />
                        I’m eager to learn something new every day and always
                        ready to use that knowledge to build practical solutions
                        that make a real impact.
                    </p>
                </div>

                {/* Image
        <div
          className="max-h-[250px] col-span-1 
          md:-order-1 md:-translate-x-[15%] relative"
        >
          <Image
            src="/mount.jfif"
            alt=""
            className="w-full h-full rounded object-cover shadow-md"
            height={100}
            width={100}
            quality={100}
          />
        </div> */}
            </motion.div>
        </section>
    );
};

export default AboutMe;
