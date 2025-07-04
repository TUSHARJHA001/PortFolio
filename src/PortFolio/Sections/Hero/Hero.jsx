import { useState, Suspense, lazy } from "react";
import { HeroText } from "../../Constants/main";
import { Leva } from "leva";
import CanvasLoader from "../../Constituents/CanvasLoader";
const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen w-full flex flex-col relative items-center justify-center overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/80 via-[#1E1E1E]/50 to-[#6C63FF]/10 z-0" />

      <div className="w-full flex flex-col md:flex-row items-center justify-center h-full gap-4 p-4 z-10">
        <HeroText />
        <div className="md:w-2/3 w-full h-[90vh] relative transition-all duration-300 hover:scale-[1.02]">
          <div
            className="w-full h-full rounded-3xl border border-[#2D2D2D] hover:border-[#7E76F5] shadow-lg hover:shadow-[0_0_20px_-5px_rgba(108,99,255,0.3)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && <Leva className="!bg-[#1E1E1E] !text-[#E0E0E0]" />}
            <Suspense fallback={<CanvasLoader />}>
              <Spline scene="https://prod.spline.design/0wrw1tTrq0K-x4AB/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/4 w-3 h-3 rounded-full bg-[#6C63FF] blur-[10px] opacity-70 animate-pulse" />
    </section>
  );
};

export default Hero;
// https://prod.spline.design/B-n9Mmr0WcB7T0DD/scene.splinecode
//
