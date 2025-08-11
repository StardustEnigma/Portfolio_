import Navbar from "../components/Navbar";
import TrueFocus from "../components/true";
import GradientButton from "../components/GradientButton";
import { useRef, useEffect } from "react";

export default function Projects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0e0220] via-[#14062e] to-[#1a0940] overflow-hidden text-white">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Floating blurred blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[200px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[200px] rounded-full animate-pulse pointer-events-none" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 relative z-10 space-y-6">
        <TrueFocus sentence="Coming Soon" />
      </main>

      {/* Button on the right, slightly up from bottom, scrolls with page */}
      <div className="flex justify-end px-8 pb-8">
        <div className="mb-10">
          <GradientButton
            url="/about"
            text="Visit About"
            newTab={false}
          />
        </div>
      </div>
    </div>
  );
}
