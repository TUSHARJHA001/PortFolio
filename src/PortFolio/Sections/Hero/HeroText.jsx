import { HeroButton } from "../../Constants/main";

const HeroText = () => {
  const animateWave = {
    display: "inline-block",
    animation: "wave 1.5s infinite",
    transformOrigin: "70% 70%",
  };

  const waveKeyframes = `
    @keyframes wave {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(20deg); }
      50% { transform: rotate(0deg); }
      75% { transform: rotate(-20deg); }
      100% { transform: rotate(0deg); }
    }
  `;

  return (
    <>
      <style>{waveKeyframes}</style>
      <div className="md:w-1/3 w-full flex flex-col items-center justify-center text-center p-4 z-10">
        <div className="w-full flex flex-col gap-6">
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#A0A0A0] font-serif">
            <span
              className="font-extrabold text-4xl block text-[#E0E0E0]"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              Hi! I am
            </span>
            <span
              className="font-extrabold text-6xl md:text-7xl text-[#7A72FF]"
              style={{
                textShadow: "0 4px 8px rgba(108, 99, 255, 0.2)",
              }}
            >
              Tushar
            </span>
            <span style={animateWave}>👋</span>
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            <span className="bg-gradient-to-r from-[#E0E0E0] via-[#A0A0A0] to-[#6C63FF] bg-clip-text text-transparent">
              A Developer in Making
            </span>
          </p>
        </div>
        <div className="mt-8">
          <HeroButton />
        </div>
      </div>
    </>
  );
};

export default HeroText;
