import Nav from "./nav";``
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import Contact from "./contact";
const main = () => {
  return (
    <>
        <div id="main" className= "bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="pt-8">
            <Nav />
            </div>
            <Hero />
            <About />
            <Service />
            <Contact />
            <div className="text-center py-8">
                <h1 className="text-2xl font-semibold">© 2025 Andrew. All rights reserved.</h1>
            </div>
        </div>
    </>
   
    
  )
}

export default main