const Introduction = ({ image }) => {
    return (
        <div class="container my-20 overflow-hidden">
            <h2 class="text-4xl text-center font-bold mb-10">Click on a button to navigate through the website!</h2>
            <img src={image} alt="About Me" class="flex justify-center w-full h-auto max-w-[1400px] rounded-[20px] mt-4 xl:max-h-[300px]" />
            <div class="flex justify-center"></div>
        </div>
    )
}

export default Introduction;