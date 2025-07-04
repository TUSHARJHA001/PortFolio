import { useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";

const TechTile = ({ item }) => {
  const tileRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    tileRef.current.style.opacity = 1;
  }, []);

  const Icon = item.icon;

  return (
    <Tilt
      tiltEnable={window.innerWidth > 640}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.08}
      glareColor="#6C63FF"
      glarePosition="all"
      glareBorderRadius="10px"
      scale={1.03}
      transitionSpeed={1200}
      className="h-full w-full"
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <div
          ref={tileRef}
          className="h-full w-full rounded-lg sm:rounded-xl border border-[#2D2D2D] p-2 sm:p-3 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:border-[#7E76F5] hover:shadow-[0_0_12px_-3px_rgba(108,99,255,0.3)] bg-[#121212]"
          onMouseEnter={() => {
            iconRef.current.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={() => {
            iconRef.current.style.transform = "translateY(0)";
          }}
        >
          <div ref={iconRef}>
            <Icon
              className="text-2xl sm:text-3xl"
              style={{ color: item.color }}
            />
          </div>
          <h3 className="text-xs xs:text-sm sm:text-base font-medium text-[#E0E0E0] text-center">
            {item.name}
          </h3>
        </div>
      </a>
    </Tilt>
  );
};

export default TechTile;
