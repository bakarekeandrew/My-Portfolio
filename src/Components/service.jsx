
const service = () => {
  return (
    <>
        <div id="services" className="py-16 mt-8">
            <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-amber-400 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                    <p>Building responsive and modern websites tailored to your needs.</p>
                </div>
                <div className="bg-amber-400 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                    <p>Creating user-friendly mobile applications for iOS and Android.</p>
                </div>
                <div className="bg-amber-400 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                    <p>Designing intuitive interfaces that enhance user experience.</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default service