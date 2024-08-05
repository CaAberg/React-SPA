const AboutMe = ({ image }) => {
  return (
    <div class="container mt-20 overflow-hidden">
      <h2 class="flex text-4xl justify-center font-bold mb-10">About Me</h2>
      <img
        src={image}
        alt="About Me"
        class="flex justify-center w-full h-auto max-w-[1400px] rounded-[20px] my-10 xl:max-h-[300px]"
      />
      <div class="flex flex-col justify-evenly xl:flex-row gap-5 w-full mt-10 xl:w-fit">
        <div class="flex flex-col gap-6 border-[1px] rounded-xl mx-8 p-8">
          <div class="flex gap-2 text-bold underline px-2 md:py-2">Connect</div>
          <p class="text-bold md:text-[1rem] leading-8 text-center font-medium">
            Please connect with me on any of my social medias!
          </p>
          <div>
            <a
              class="flex hover:shadow rounded-[20px] justify-center py-4"
              href="https://www.instagram.com/clarl_bot/?hl=en"
              target="_blank"
            >
              Instagram
            </a>
            <a
              class="flex hover:shadow rounded-[20px] justify-center py-4"
              href="https://github.com/CaAberg"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-6 border-[1px] rounded-xl mx-8 p-8 xl:w-[60%]">
          <div class="flex gap-2 text-bold underline px-2">Bio</div>
          <p class=" md:text-[1rem] leading-8 text-center text-bold">
            I started learning about web development in 2023, learning HTML,
            CSS, JavaScript, and then advancing to React.js. <br />I am
            currently learning about Next.js; And offer a problem-solving
            approach and a creative mind, ready to deliver efficient and
            innovative solutions. <br />
            Rapid learning and always being motivated to learn more about
            development are my biggest strenghts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
