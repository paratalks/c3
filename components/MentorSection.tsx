import React, { useEffect, useState } from "react";
import Image from "next/image";
import { blurs, icons, images, mentorImages, mentors } from "@/constants";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { motion, useAnimate } from "framer-motion";

const MentorSection = () => {
  const [scope, animate] = useAnimate();
  const [animatingMentorIndex, setAnimatingMentorIndex] = useState(-1);
  const [screen, setScreen] = useState({ width: 0, height: 0 });

  // Check if a mentor is being animated
  const isAnimating = animatingMentorIndex !== -1;
  useEffect(() => {
    setScreen({ width: window.outerWidth, height: window.outerHeight });
  }, [screen.width, screen.height]);
  return (
    <section className="w-full flex flex-col items-center relative">
      <div className=" w-screen  ">
        <Image
          unoptimized
          src={blurs.mentorSectionBlur}
          className="absolute w-screen blur-md opacity-50 h-screen scale-125 -z-40"
          alt="Background Blur"
          fill
          objectFit="cover"
        />
      </div>
      <div className="absolute w-screen h-full">
        <Image
          unoptimized
          src={icons.wave}
          className="absolute hidden md:inline w-screen bottom-0 -z-40"
          alt="Background Wave"
          width={1920}
          height={1080}
        />
      </div>
      <div className=" w-screen  h-full pt-40 z-40 flex flex-col items-center">
        <motion.img
          src={images.logo}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ rotateZ: "30deg" }}
          className="absolute max-sm:w-10 hidden lg:block lg:top-32 left-40 opacity-50 z-10"
          alt="Logo"
          width={150}
          height={150}
        />
        <motion.img
          src={images.logo}
          animate={{ y: [0, 10, 0], rotateZ: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute max-sm:hidden hidden lg:block top-48 right-40 -rotate-6 opacity-50 z-10"
          alt="Logo"
          width={80}
          height={150}
        />
        <div className="w-full mb-5 origin-top max-sm:w-full flex flex-col items-center justify-center">
          <h1 className="w-full text-3xl sm:text-3xl lg:text-5xl font-bold text-center">
            Your Journey <ScribledHighlightedText textInput={"Mentors"} />
          </h1>
          <p className="mt-2 text-gray-400 text-center text-xs sm:text-sm lg:text-lg p-2 w-2/3 sm:w-1/2 lg:w-full">
            {`Learn from the ones who've already helped thousands of students achieve their dreams`}
          </p>
        </div>
        <motion.div
          whileInView={isAnimating ? { scaleX: [0.01, 1], y: [200, 0] } : {}}
          transition={{
            scaleX: { duration: 0.6, delay: 0.5, ease: "easeIn" },
            y: { duration: 0.5 },
          }}
          className={`h-fit ${screen.width < 640 ? "hidden" : "inline"} md:flex absolute top-[40%]  gradientBorder w-[80%] rounded-3xl ${isAnimating ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full h-full bg-[#220D00] rounded-3xl flex flex-col p-5">
            <motion.div
              whileInView={isAnimating ? { opacity: [0, 1] } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="flex lg:flex-row flex-col items-center opacity-0"
            >
              <h1 className="lg:text-5xl sm:text-3xl text-xl font-bold lg:pr-2 lg:border-r max-md:border-b text-nowrap">
                {isAnimating && mentors[animatingMentorIndex]?.title}
              </h1>
              <p className="p-5  text-xs sm:text-sm leading-relaxed lg:leading-loose">
                {isAnimating && mentors[animatingMentorIndex]?.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className=" w-full bottom-0 ">
          <div className="w-full  overflow-hidden bottom-0 z-20">
            {screen.width < 640 ? (
              <div className="h-fit flex flex-col gap-10 items-center last:mb-52 justify-center">
                {mentors.map((item, index) => (
                  <div
                    key={index}
                    className={
                      "w-fit h-fit relative flex flex-col justify-center"
                    }
                  >
                    <div
                      className={
                        " bottom-0 right-0 left-0 flex flex-col gap-8 bg-primary z-20 rounded-2xl p-4"
                      }
                    >
                      <div
                        className={
                          "w-full flex flex-col relative overflow-y-clip overflow-x-visible"
                        }
                      >
                        <div
                          className={
                            "absolute bottom-0 w-full h-full z-10 rounded-3xl bg-gradient-to-t from-primary via-5% via-transparent to-transparent overflow-clip"
                          }
                        />
                        <motion.img
                          onClick={() => setAnimatingMentorIndex(index)}
                          onHoverStart={() => setAnimatingMentorIndex(index)}
                          onHoverEnd={() => setAnimatingMentorIndex(-1)}
                          className={` mentorImages translate-y-24 origin-bottom z-[5] transition-all duration-300 ${index == 0 ? "z-10" : "z-0"}`}
                          src={item.image}
                          alt={`Mentor ${index + 1}`}
                        />
                      </div>
                      <motion.div
                        whileInView={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <h1 className={"text-5xl font-bold text-center"}>
                          {item.title}
                        </h1>
                      </motion.div>
                      <h2
                        className={
                          "text-lg font-bold text-gray-200 mb-2 text-center"
                        }
                      >
                        {" "}
                        {item.desc}{" "}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-[90dvh] flex items-center justify-center">
                {mentors.map((item, index) => (
                  <motion.img
                    key={index}
                    onClick={() => setAnimatingMentorIndex(index)}
                    onHoverStart={() => setAnimatingMentorIndex(index)}
                    onHoverEnd={() => setAnimatingMentorIndex(-1)}
                    whileInView={{
                      x: [screen.width / item.movement],
                    }}
                    transition={{
                      duration: item.animationDuration,
                      ease: "easeOut",
                    }}
                    className={`absolute mentorImages origin-bottom z-[5] bottom-0 w-32 sm:w-44 lg:w-64 hover:w-40 hover:sm:w-56 hover:lg:w-80 transition-all duration-300 ${index == 0 ? "z-10" : "z-0"}`}
                    src={item.image}
                    alt={`Mentor ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
