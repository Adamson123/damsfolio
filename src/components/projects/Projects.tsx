import { motion } from "framer-motion";
import Card from "./Card";
import { projects } from "@/data";
const Projects = () => {
  return (
    <motion.section
      id="projects"
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
      className="flex flex-col items-center gap-4 pb-32"
    >
      <div className="text-center">
        <h3 className="font-bold text-balance text-2xl">Projects</h3>
        <p className="text-[14px] text-muted-foreground">
          Where Ideas Come to Life
        </p>
      </div>
      {/* Projects */}
      <div
        className="flex flex-col flex-wrap items-center gap-x-2 gap-y-8 relative
        w-full max-w-[820px] justify-center md:flex-row"
      >
        {projects.map((project, i) => {
          return <Card key={i} project={project} />;
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
