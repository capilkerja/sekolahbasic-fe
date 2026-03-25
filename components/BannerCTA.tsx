import Image from "next/image";

export default function BannerCTA() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"> 
          <div className="bg-[#2c1b4e] rounded-2xl overflow-hidden flex flex-col md:flex-row relative"> 
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            
            <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center z-10"> 
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">Learn. Grow. <span className="text-[#FFC627]">Reflect Christ.</span></h2> 
              <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg">
                A Christ-centered learning community that nurtures faith, character, and academic excellence equipping students to know God, develop wisdom, and lead with integrity.
              </p> 
              <div className="flex gap-4"> 
                <button className="bg-[#FFC627] text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#ffcf4d] transition-colors"> Apply Today </button> 
                <button className="text-white border border-white/20 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors"> Contact Us </button> 
              </div> 
            </div> 
            {/* Banner Image Area */} 
            <div className="lg:w-2/5 relative min-h-[250px]"> 
              <div className="absolute inset-0 bg-linear-to-r from-[#2c1b4e] to-transparent z-10"></div>
              <Image src="/images/banner-cta.webp" fill className="absolute inset-0 w-full h-full object-cover" alt="Students" />
            </div> 
          </div> 
        </div> 
    )
}