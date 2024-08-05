import React from "react";

const Navbar = ({ setCurrentPage }) => (
        <nav class=" bg-white flex sticky top-3 z-99 h-[60px] right-0 mx-auto items-center justify-between rounded-2xl border-b-2 px-8 shadow-sm saturate-100 lg:w-[70%]">
        <a class="2rem" href="/">
            <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/CarlIcon.png" height="2rem" width="2rem"/>
            </svg>
        </a>
        <div class="lg:flex items-center gap-2">
            <div class="flex gap-10">
                <div>
                    <a class="text-[0.8rem] md::text-[1rem] font-medium text text-foreground/60">
                        <button onClick={() => setCurrentPage("Introduction")}>Home</button>
                        </a>
                </div>
                <div>
                    <a class="text-[0.8rem] md::text-[1rem] font-medium text text-foreground/60">
                        <button onClick={() => setCurrentPage("AboutMe")}>About</button>
                        </a>
                </div>
                <div>
                    <a class="text-[0.8rem] md::text-[1rem] font-medium text text-foreground/60">
                        <button onClick={() => setCurrentPage("Experience")}>Experience</button>
                        </a>
                </div>
                <div>
                    <a class="text-[0.8rem] md::text-[1rem] font-medium text text-foreground/60">
                        <button onClick={() => setCurrentPage("Contact")}>Contact</button>
                        </a>
                </div>
            </div>
        </div>
    </nav>

  );

export default Navbar;