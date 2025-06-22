

const Hero = () => {
  return (
    <>
        <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-5xl font-bold mb-4">Hello, I'm Andrew</h1>
                <p className="text-3xl font-bold mb-4 pr-32 text-amber-400">Software Developer</p>
                <div className="flex gap-4 pr-32">
                    <a href="/Andrew_Bakareke_CV.pdf" className="bg-amber-400 text-white px-6 py-3 rounded-full hover:bg-amber-500 transition duration-300">
                    Download CV
                    </a>
                    <a href="#aboutMe" className="text-white px-6 py-3 rounded-full border border-black-500 hover:bg-amber-500 transition duration-300"
                    >
                    About Me
                    </a>

                </div>
            </div>
            <div className="mt-20 ">
                <img src="https://avatars.githubusercontent.com/u/110696153?s=400&u=4a5ca8befac68c820d7146b755140a110caf5d52&v=4" alt="Profile" className="rounded-full w-96 h-96" />
            </div>
        </div>
    </>
  )
}

export default Hero