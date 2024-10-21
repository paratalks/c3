import React from "react";
import { blurs, images } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
const StatisticSection = () => {
  return (
    <section
      className={"w-full h-full relative flex flex-col items-center mt-32"}
    >
      <div className={"absolute w-screen h-full"}>
        <Image
          unoptimized
          src={blurs.statisticsBlur}
          className={"absolute w-screen -z-40"}
          alt={"bg-blur"}
          fill
          objectFit={"cover"}
        />
      </div>
      <div
        className={
          "section-content w-full h-full p-20 z-40 flex flex-col items-center gap-10"
        }
      >
        <h1
          className={
            "section-title text-2xl sm:text-3xl lg:text-5xl font-bold text-center"
          }
        >
          Join <span className={"text-primary"}>Competishun</span> <br />{" "}
          Community, Your way to IIT
        </h1>
        <div
          className={
            "h-full  w-screen flex flex-col  items-center justify-center"
          }
        >
          <Carousel
            plugins={[
              AutoPlay({
                delay: 3000,
              }),
            ]}
            opts={{
              loop: true,
            }}
            className={"w-full  gap-0 flex justify-center"}
          >
            <CarouselContent className={"w-full"}>
              {...Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className={"flex flex-row gap-x-0 p-0 w-fit justify-center "}
                >
                  <div
                    className={
                      "gradientBorder relative rounded-3xl w-fit flex flex-col items-center"
                    }
                    style={{ padding: 2 }}
                  >
                    <div
                      className={
                        "absolute z-10 w-full h-full flex flex-col items-center rounded-3xl bg-gradient-to-t from-black to-transparent"
                      }
                    />

                    <Image
                      unoptimized
                      src={images.statsBoy}
                      alt={"Competishun Stats"}
                      width={500}
                      height={500}
                      objectFit={"cover"}
                      className={"rounded-3xl"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <motion.div
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={
              "absolute popAnimation bg-primary rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 top-40 lg:right-10 right-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-primary"
            }
          >
            <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
              <span
                className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
              >
                12k+
              </span>{" "}
              <br /> Aspiring IITians
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={
              "absolute popAnimation bg-green-700 rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 bottom-40 lg:right-20 right-0 scale-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-green-500"
            }
          >
            <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
              <span
                className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
              >
                200+
              </span>{" "}
              <br /> Recorded Lectures
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={
              "absolute popAnimation bg-blue-900 rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 bottom-52 lg:left-20 left-0 scale-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-blue-500"
            }
          >
            <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
              <span
                className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
              >
                20k+
              </span>{" "}
              <br /> Students in IIT
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={
              "absolute popAnimation bg-purple-800 rounded-3xl border border-white flex flex-col items-center p-2 sm:p-3 lg:p-5 top-52 lg:left-10 left-0 scale-0 shadow-[0px_6px_35px_-7px_rgba(0,0,0,1)] drop-shadow-lg shadow-purple-500"
            }
          >
            <h2 className={"text-center text-xs sm:text-lg lg:text-xl"}>
              <span
                className={"sm:text-2xl lg:text-3xl text-xs font-extrabold"}
              >
                20k+
              </span>{" "}
              <br /> Students in IIT
            </h2>
          </motion.div>
        </div>
      </div>
      <div className={"flex flex-row w-screen justify-center gap-10 m-5"}>
        <button className={"text-primary text-lg sm:text-2xl lg:text-3xl"}>
          2024
        </button>
        <button className={" text-lg sm:text-2xl lg:text-3xl"}>2023</button>
        <button className={" text-lg sm:text-2xl lg:text-3xl"}>2022</button>
        <button className={" text-lg sm:text-2xl lg:text-3xl"}>2021</button>
      </div>
    </section>
  );
};
export default StatisticSection;
