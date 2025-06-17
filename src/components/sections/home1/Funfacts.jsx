import CounterUp from "../../CounterUp";

export default function Funfacts() {
  return (
    <>
      {/* Counter One Start */}

      <div className="container">
        <div className="counter-one__inner bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="row">
            <div className="relative text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4">
                Your Space Deserves <span className="text-[#D4AF37]">InvHub.</span>
              </h1>
              <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto my-4"></div>
              <p className="text-lg md:text-xl mb-8">
                Let’s Make It Safer, Sleeker, and Smarter — Together.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                  SCHEDULE A SITE VISIT
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black  font-semibold px-6 py-3 rounded-full hover:bg-[#b08989] transition">
                  REQUEST A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter One End */}
    </>
  );
}
