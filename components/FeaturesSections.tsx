import React from "react";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";

import { feature_Row1, feature_Row2, icons, illustrations } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesSections = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <section className={"featuresSection mt-12 relative"}>
      <div className={"w-full flex mt-56 justify-center"}>
        <div
          className={
            "feature-section-content z-10 pb-36 relative flex flex-col gap-y-24 items-center justify-center w-full"
          }
        >
          <motion.img
            src={icons.flower}
            alt={"flowers"}
            className={"absolute top-20 left-0 opacity-50"}
          />
          <motion.img
            src={icons.flower}
            alt={"flowers"}
            width={40}
            className={"absolute bottom-0 right-10 opacity-50"}
          />
          <h1 className={" text-center lg:text-5xl  sm:text-4xl text-4xl px-4"}>
            Get All the <ScribledHighlightedText textInput={"benefit"} /> of our
            iconic <br className="hidden sm:block" /> revision course, Enroll
            Now!
          </h1>
          <div
            className={
              "flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-y-0 lg:gap-x-14 w-full "
            }
          >
            <div
              className={"flex flex-col md:flex-row flex-wrap gap-y-10 w-full"}
            >
              {feature_Row1.map((item, index) => (
                <div
                  key={index}
                  className={
                    "bg-primary/[0.3]  hover:bg-primary flex md:hover:scale-110 hover:scale-[1] transition-all duration-300 flex-col sm:flex-row max-sm:flex-col  gap-x-5 rounded-3xl p-2 scale-90 md:w-1/2 border border-white items-start justify-start"
                  }
                >
                  <div
                    className={
                      "h-full overflow-clip w-full sm:w-1/3 flex justify-center rounded-3xl p-2 bg-[#FFDCC7]"
                    }
                  >
                    <Image
                      unoptimized
                      src={illustrations.illustration1}
                      alt={"Animation"}
                      width={150}
                      height={100}
                      objectFit={"contain"}
                      className={"p-5"}
                    />
                  </div>
                  <div className={"flex flex-col py-5 w-full  h-full"}>
                    <h3
                      className={
                        "text-xl lg:text-3xl font-extrabold mb-2 sm:mb-3"
                      }
                    >
                      {item.title}
                    </h3>
                    <p
                      className={
                        "overflow-clip w-full text-sm lg:text-base text-gray-300"
                      }
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSections;
