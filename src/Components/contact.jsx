
const contact = () => {
  return (
    <>
        <div id="contact" className="py-8 mt-16">
            <h1 className="text-3xl font-bold text-center mb-4">Contact Me</h1>
            <form className="max-w-md mx-auto">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="bg-amber-300 hover:bg-amber-400 text-white font-semibold py-2 px-4 rounded">Send Message</button>
            </form>

            
            <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold mb-4">Let't Talk With Me</h2>
                <div className="flex justify-center gap-4">
                                      
                    <div className="bg-gray-600 px-4 py-2 rounded-full">
                        <a href="https://github.com/bakarekeandrew" className="text-white hover:text-amber-700" target="_blank" rel="noopener noreferrer">
                           <i className="fab fa-github text-white"></i>
                        </a>
                    </div>
                     <div className="bg-gray-600 px-4 py-2 rounded-full">
                        <a href="" className="text-white hover:text-amber-700" target="_blank" rel="noopener noreferrer">
                           <i className="fab fa-twitter text-white"></i>
                        </a>
                    </div>
                     <div className="bg-gray-600 px-4 py-2 rounded-full">
                        <a href="https://www.linkedin.com/in/bakareke-andrew-307991249/" className="text-white hover:text-amber-700" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in text-white"></i>
                        </a>
                    </div>
                     <div className="bg-gray-600 px-4 py-2 rounded-full">
                         <a href="" className="text-white hover:text-amber-700" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f text-white"></i>
                       </a>
                    </div>

                </div>
            </div>    
        </div>
    </>
  )
}

export default contact