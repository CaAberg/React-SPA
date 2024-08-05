const Contact = ({ image }) => {
  return (
    <div class="container mt-20">
      <h2 class="flex text-4xl justify-center font-bold mb-10">Contact</h2>
      <img
        src={image}
        alt="About Me"
        class="flex justify-center w-full h-auto max-w-[1400px] rounded-[20px] my-10 xl:max-h-[300px]"
      />
      <div class="container flex md:flex-row flex-col mt-20 justify-between w-full gap-10">
      <div class="flex flex-col lg:w-1/2 space-y-5">
        <p>Contact</p>
        <p class="font-light">
          Currently on the lookout for new challenges, I'm eager to engage in
          challenges where I can contribute and grow. Feel free to contact me
          for further inquiries.
        </p>
        <form class="space-y-8" action="">
            <div class="grid gap-5 lg:grid-cols-2">
                <div class="space-y-2">
                    <label class="text-sm font-medium leading-none " htmlFor="firstName">First name</label>
                    <input class="flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm" type="text" />
                    <p class="text-[0.8rem] ">Please enter your first name as you'd like me to address you in our correspondence.</p>
                </div>
                
                <div class="space-y-2 ">
                    <label class="text-sm font-medium leading-none " htmlFor="lastName">Last name</label>
                    <input class="flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm" type="text" />
                    <p class="text-[0.8rem] ">Please enter your last name as you'd like me to address you in our correspondence.</p>
                </div>
                
            </div>
            <div class="space-y-2 col-span-2">
            <label class="text-sm font-medium leading-none " htmlFor="lastName">Email</label>
                    <input class="flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm" type="text" />
                    <p class="text-[0.8rem] ">Please provide your email address to ensure I can respond to your inquiry.</p>
            </div>
            <div class="space-y-2 col-span-2">
            <label class="text-sm font-medium leading-none " htmlFor="lastName">Message</label>
                    <textarea class="flex h-10 w-full min-h-[100px] rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm" type="text" />
                    <p class="text-[0.8rem] ">Your opinion is important to me. Please share any thoughts, inquiries, or potential opportunities you have in mind. Looking forward to connecting with you!</p>
            </div>
            <div>
            <button class=" flex items-center justify-center rounded-2xl text-sm h-9 px-4 py-2 font-bold bg-gradient-to-r from-red-500 to-red-800 hover:from-red-600 hover:to-red-900 text-white">
                Submit
            </button>
            </div>
        </form>
      </div>
      <div class="flex w-1/2 relative lg:block">
        <img class="w-full h-full object-cover absolute rounded-md" src="./src/assets/images/getintouch.jpg" alt="get in touch!" />
      </div>
      </div>
    </div>
  );
};

export default Contact;
