// LandingPage.jsx

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

function LandingPage({ onEnter }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden ">
      {/* Particle Background */}
      <Particles
        init={particlesInit}
        // ... (your particles options remain unchanged)
        options={{
          preset: "links",
          fullScreen: { enable: false },
          background: {
            color: "#e0f7fa",
          },
          particles: {
            number: { value: 80 },
            shape: {
              type: "polygon",
              polygon: {
                sides: 6,
              },
            },
            color: {
              value: ["#0a2540", "#5a6e7f", "#3f51b5"],
            },
            size: {
              value: 8,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#0a2540",
              opacity: 0.4,
              width: 2,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.9,
                },
              },
              repulse: {
                distance: 200,
                duration: 0.6,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Heading with the new Glow and Outline effect */}
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2.5 }}
        className="text-5xl md:text-6xl font-bold mb-4 z-10 text-center animate-glow-outline"
      >
        Talatunnisa A. Siddiqui
      </motion.h1>

      {/* Subtitle - Updated color for better harmony */}
      {showContent && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className="text-xl md:text-2xl mb-8 z-10 font-semibold text-gray-800"
        >
          B.Tech CSE Engineer 🚀
        </motion.p>
      )}

      {/* Button */}
      {showContent && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:bg-indigo-100 z-10"
        >
          Let's Go to My Profile
        </motion.button>
      )}
    </div>
  );
}

export default LandingPage;