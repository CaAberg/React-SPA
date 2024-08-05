const Experience = ({ image }) => {
  return (
    <div class="container mt-20 ">
      <h2 class="text-4xl text-center font-bold mb-10">
        My Experience
      </h2>
      <img
        src={image}
        alt="About Me"
        class="flex justify-center w-full h-auto max-w-[1400px] rounded-[20px] my-10 xl:max-h-[300px]"
      />
      <div class="flex">
        <div class="flex flex-col gap-10">
          <div class="border-2 p-3 w-full h-max rounded-md">
            <h2 class="font-bold">Self led learning</h2>
            <h3 class="font-bold mb-2 text-[0.9rem]">The start</h3>
            <p class="text-[0.7rem md;text-[0.8rem]">
              Embarking on my tech adventure in 2020, I had an interest in
              learning coding mostly for fun as a hobby. Although at this point
              it was just a little curiousity, It sowed a seed within that would
              continue to grow.
            </p>
            <p class="mt-5 float-right text-[0.8rem text-muted-foreground]">
              {" "}
              Spring 2020 - Winter 2020
            </p>
          </div>
          <div class="border-2 p-3 w-full h-max rounded-md">
            <h2 class="font-bold">Self-led learning</h2>
            <h3 class="font-bold mb-2 text-[0.9rem]">The continuation</h3>
            <p class="text-[0.7rem md;text-[0.8rem]">
              In the summer of 2021, I grew a bigger interest for all things
              computing, coding included. As someone who has always had an
              interest in learning on a deeper level, I found myself more
              curious about HTML and Javascript. this led me to take a course in
              Java, which would become the catalyst for future choices.{" "}
            </p>
            <p class="mt-5 float-right text-[0.8rem text-muted-foreground]">
              {" "}
              Summer 2021 - Winter 2021
            </p>
          </div>
          <div class="border-2 p-3 w-full h-max rounded-md">
            <h2 class="font-bold">Educated Learning</h2>
            <h3 class="font-bold mb-2 text-[0.9rem]">The first real step</h3>
            <p class="text-[0.7rem md;text-[0.8rem]">
              In the summer of 2023, I decided to quit my work as a Sous-Chef,
              realising my passion for coding had grown beyond a hobby. I
              decided to apply for a Front-end Development course, and got
              accepted to the course in Autumn of the same year.
            </p>
            <p class="mt-5 float-right text-[0.8rem text-muted-foreground]">
              {" "}
              2023-current
            </p>
          </div>
        </div>
      </div>
      <a class="flex items-center justify-center mt-10">
        <button class="flex items-center justify-center rounded-2xl text-sm h-9 px-4 py-2 font-bold bg-gradient-to-r from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 text-white">
          Contact me
        </button>
      </a>
    </div>
  );
};

export default Experience;
