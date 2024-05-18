import React from "react";
import Constant from "../_utils/Constant";
import Header from "./Header";

const Hero = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold text-black sm:text-5xl">
              <span className=" text-primary">Upload, Save</span> and easily
              Shere your files in one place
            </h1>

            <p className="mt-4 text-gray-500 sm:text-xl/relaxed">
              {Constant.desc}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/sign-in"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
