import DotGrid from "../components/welcome";
import TextType from "../components/type";
import Navbar from "../components/Navbar";
import ShinyText from "../components/shiny";
import GradientButton from "../components/GradientButton";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-black text-white flex flex-col">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid />
      </div>

      {/* Navbar */}
      <div className="relative z-20 py-6">
        <Navbar />
      </div>

      {/* Centered content */}
      <div className="flex-grow flex flex-col items-center justify-center z-10 px-4 text-center pointer-events-auto gap-10">
        {/* Typing intro */}
        <div className="max-w-[95vw] px-2 overflow-hidden">
          <TextType
            text={[
              "Welcome to my portfolio.",
              "I'm Atharva.",
              "ML & Backend | Fintech.",
            ]}
            className="font-bold whitespace-nowrap text-[clamp(1.5rem,5vw,4rem)]"
            typingSpeed={60}
            deletingSpeed={40}
            pauseDuration={1800}
            showCursor
            textColors={["#ffffff", "#38bdf8", "#f472b6"]}
            cursorBlinkDuration={0.5}
          />
        </div>

        {/* Shiny tagline */}
        <ShinyText
          text="Crafting smart backends and ML solutions that solve real-world problems."
          className="
            text-lg sm:text-xl md:text-3xl
            max-w-sm sm:max-w-md md:max-w-none
            mx-auto
            text-center
          "
        />
      </div>

      {/* Button on the right, slightly up from bottom, scrolls with page */}
      <div className="flex justify-end px-8 pb-8">
        <div className="mb-10">
          <GradientButton
            url="/projects"
            text="View My Projects"
            newTab={false}
          />
        </div>
      </div>
    </div>
  );
}
