import React from "react";
import TypingAnimation from "./Typinganimation";

const Header = () => {
  return (
    <section class="flex justify-center mx-auto px-12 py-6 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-16 lg:gap-0">
        <div class="col-span-8 place-self-center text-center justify-center transform-none opacity-1">
          <h1 class="font-bold mb-4 text-2xl md:text-4xl lg:text-6xl lg:leading-normal">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Hello, I'm
            </span>
            <br />
            <TypingAnimation />
            </h1>
            <p class="text-gray-800 text-sm sm:text-lg lg:text-base text-center">
              I am a dedicated front-end developer student with a passion for
              learning and continuous improvement.
              <br />
              With a keen eye for detail and a strong desire to master the
              latest technologies, I am committed to building engaging and
              user-friendly web experiences.
            </p>
          
        </div>
      </div>
    </section>
  );
};

export default Header;
