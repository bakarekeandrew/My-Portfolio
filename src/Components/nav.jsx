

const nav = () => {
  return (
    <> 
        <div className="flex justify-between px-32">

            <div className="flex gap-1">
                <div className="bg-amber-400 text-white px-[12px] item-center py-[2px] rounded-full">
                    <h1 className="text-2xl font-semibold">A</h1>
                </div>               
                <h1 className="text-2xl font-semibold">
                    Andrew
                </h1>
            </div>
            <div className="flex gap-8 text-lg">
                <a href="#main">Home</a>
                <a href="#aboutMe">About</a>
                <a href="#services">Services</a>
                <a href="#">Projects</a>
            </div>
            <div className="bg-amber-400 text-white px-4 py-2 rounded-full">
                <a href="#contact">Contact</a>
            </div>
        </div>
    </>
  
  )
}

export default nav