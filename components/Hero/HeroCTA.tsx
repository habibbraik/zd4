import HeroCircles from "./HeroCircles";

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-20 grid grid-cols-1 lg:grid-cols-2 xl:max-w-[1440px] xl:mx-auto">
      <div className="grid px-2 lg:pl-10 xl:pl-0 grid-cols-1 gap-4 lg:gap-2 items-center justify-center">
        <div className="h-10 w-80 mx-auto lg:mx-0 lg:h-12 xl:h-14 xl:w-96 rounded-full bg-purple-800">
          <div className="text-sm lg:text-base xl:text-lg flex items-center justify-center w-full h-full text-white/80 bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-2 py-0 lg:px-4 lg:py-1 xl:px-6 xl:py-2 rounded-full">
          Tinkerer | Explorer | Creative
          </div>
        </div>
        <div className="text-[10vw] lg:text-[4vw] xl:text-[4.5vw] font-bold leading-[11vw] text-center lg:text-left lg:leading-[5vw] xl:leading-tight text-white bg-gradient-to-r from-white to-[#F26FD8] bg-clip-text text-transparent">
        Ma room Is like a spaceship
        </div>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a
            // href="https://cal.com/0xaquawolf/discovery"
            className="bg-white rounded-full px-4 py-2 xl:px-6 xl:py-3 text-black hover:text-white hover:bg-transparent transition-all xl:text-lg shadow-cta hover:shadow-alt-cta"
          >
            Book a Call
          </a>
          <a
            // href="https://discord.gg/wzPBjEcn87"
            className="hover:shadow-cta shadow-alt-cta rounded-full px-6 py-2 xl:px-8 xl:py-3 text-white hover:bg-white hover:text-black transition-all xl:text-lg"
          >
            Join the discord
          </a>
        </div>
      </div>
      <HeroCircles />
    </div>
  );
}
