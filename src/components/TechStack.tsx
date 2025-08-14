import { techStack } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = () => {
    return (
        <motion.section
            id="tools"
            initial={{
                y: 80,
            }}
            whileInView={{
                y: 0,
            }}
            transition={{
                duration: 1,
                ease: "linear",
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 pb-32"
        >
            <div className="text-center">
                <h3 className="font-bold text-balance text-2xl">Tech stack</h3>
                <p className="text-[14px] text-muted-foreground">
                    Tools Powering My Projects
                </p>
            </div>

            <div
                className="md:max-w-[80vw] lg:max-w-[65vw] w-full
        flex flex-wrap justify-center gap-3 relative"
            >
                {techStack.map((stack, i) => {
                    return (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: i * 0.2,
                                duration: 0.3,
                            }}
                            viewport={{ once: true }}
                            key={i}
                            className="flex flex-col items-center gap-1"
                        >
                            {/* Stack */}
                            <div
                                className="h-20 w-20 from-slate-50/15 z-[20]
              bg-gradient-to-b to-slate-50/5 backdrop-blur-md rounded
              flex justify-center items-center relative stackBox"
                            >
                                {/* Light */}
                                <div
                                    style={{
                                        backgroundColor: stack.color,
                                    }}
                                    className="absolute -z-10 h-[30px] w-[30px] max-w-xl rounded-full
                 blur-[18px] hover:blur-[20px]  filter left-1/2 -translate-x-[50%]"
                                ></div>
                                <Image
                                    src={`/tech-stack/${stack.image}`}
                                    className="h-[70%] w-[70%] object-contain"
                                    height={100}
                                    width={100}
                                    alt={`${stack.name} Image`}
                                />
                            </div>

                            <span className="text-[12px] text-muted-foreground">
                                {stack.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};
export default TechStack;
