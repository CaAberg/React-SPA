const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-8 w-full ">
      <div class="relative mx-auto mb-6 flex flex-col rounded-2x1 p-8 shadow hover:shadow-lg saturate-100 backdrop-blur-[20px]">
        <div class="flex justify-between lg:gap-52 lg:justify-normal mt-5">
          <div class="space-y-4 flex flex-col">
            <a class="flex hover:shadow rounded-[20px] justify-center" href="/">
              Home
            </a>
            <a
              class="flex hover:shadow rounded-[20px] justify-center"
              href="/about"
            >
              About
            </a>
          </div>
          <div class="space-y-4 flex flex-col">
            <a
              class="flex hover:shadow rounded-[20px] justify-center"
              href="/projects"
            >
              Contact
            </a>
            <a
              class="flex hover:shadow rounded-[20px] justify-center"
              href="/experience"
            >
              Experience
            </a>
          </div>
          <div class="space-y-4 flex flex-col">
            <a
              class="flex hover:shadow rounded-[20px] justify-center"
              href="https://www.instagram.com/clarl_bot/?hl=en"
              target="_blank"
            >
              Instagram
            </a>
            <a
              class="flex hover:shadow rounded-[20px] justify-center"
              href="https://github.com/CaAberg"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <p class="flex items-center justify-center text-[0.8rem] mt-10">
          © Copyright 2024 – Carl. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
