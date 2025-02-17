import Link from "next/link";
import { useRef, useState } from "react";
import { BiCircle, BiPlay } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
//import Image from "next/image";

interface ProjectTypes {
    title: string;
    description: string;
    images: string[];
    techStack: string[];
    livePreview: string;
    viewCode: string;
    scrollerColor?: string;
}

const Card = ({
    project: {
        title,
        description,
        images,
        techStack,
        livePreview,
        viewCode,
        scrollerColor,
    },
}: {
    project: ProjectTypes;
}) => {
    const imagesRef = useRef<HTMLImageElement[] | null[]>([]);
    const imagesContainerRef = useRef<HTMLDivElement>(null);
    const [imageOnView, setImageOnView] = useState(0);

    return (
        <div
            className="w-full max-h-[500px] max-w-[400px] min-h-[500px] z-20 rounded-lg
      flex flex-col bg-transparent shadow-lg"
        >
            {/* Image */}
            <div className=" relative max-h-[200px] w-full ">
                {/* Images container*/}
                <div
                    style={{
                        scrollbarWidth: "none",
                    }}
                    className="relative h-full w-full flex
          scroll-smooth snap-x snap-mandatory overflow-x-auto"
                    ref={imagesContainerRef}
                    onScroll={() => {
                        const containerRect =
                            imagesContainerRef.current?.getBoundingClientRect();

                        imagesRef.current.forEach((image, index) => {
                            const imageClient = image?.getBoundingClientRect();
                            if (
                                imageClient?.left === containerRect?.left &&
                                imageClient?.right === containerRect?.right
                            ) {
                                setImageOnView(index);
                            }
                        });
                    }}
                >
                    {/* h-full min-w-full */}
                    {images.map((path, index) => (
                        <img
                            ref={(el) => {
                                imagesRef.current[index] = el;
                            }}
                            id={`${path}`}
                            key={path}
                            src={path ? path : "/spi 2.jpg"}
                            className="rounded-t-lg snap-start object-cover
              min-w-full"
                            // height={100}
                            // width={100}
                            // unoptimized
                            //  quality={100}
                            alt={`${title} Image ${index}`}
                        />
                    ))}
                </div>
            </div>

            {/* Info */}
            <div
                className="p-4 pb-3 flex-grow from-slate-50/15
        bg-gradient-to-b to-slate-50/5 w-full rounded-b-lg
        flex flex-col gap-2 relative"
            >
                {/* Scroll */}
                <div
                    className="absolute flex top-2 left-[50%]
         -translate-x-[50%] gap-1 z-10"
                >
                    {images.map((path, index) => (
                        <Link href={`#${path}`} key={path}>
                            {imageOnView === index ? (
                                <FaCircle
                                    fill={
                                        scrollerColor
                                            ? scrollerColor
                                            : "rgb(248 250 252/0.7)"
                                    }
                                    className="w-3 h-3"
                                />
                            ) : (
                                <BiCircle
                                    fill={
                                        scrollerColor
                                            ? scrollerColor
                                            : "rgb(248 250 252/0.7)"
                                    }
                                    className="w-3 h-3"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Title */}
                <h4
                    className={`font-medium text-2xl ${
                        title === "BlockCraft" && "mt-4"
                    }`}
                >
                    {title}
                </h4>
                {/* Description */}
                <p className="text-[14px] text-muted-foreground">
                    {description}
                </p>
                {/* Tech stack */}
                <div className="flex mt-auto pb-3">
                    {techStack.map((stack, index) => (
                        <div className="h-9 w-9 box-border -mr-2" key={stack}>
                            <img
                                src={`/tech-stack/${stack}`}
                                className="h-full w-full rounded-full p-1 object-contain
                border border-blue-50/20 bg-white"
                            />
                        </div>
                    ))}
                </div>
                {/* Live preview & Github link */}
                <div className="flex justify-between text-[15px]">
                    <a href={livePreview} target="_blank">
                        <BiPlay className="inline -translate-y-[1px] text-[25px]" />
                        Live Preview
                    </a>
                    <a href={viewCode}>
                        <GrGithub className="inline -translate-y-[1px]" /> View
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
