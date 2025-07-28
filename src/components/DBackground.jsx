// src/components/DBackground.jsx (Updated for a Minimal & Subtle Effect)

import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

function DBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          
          // --- NEW MINIMAL CONFIGURATION ---
          color: 0x1e40af,      // A deeper, more subtle blue (like Tailwind's blue-800)
          backgroundColor: 0x0, // Pure black for contrast
          points: 7.00,         // Reduced from 10 to 7 for a much cleaner look
          maxDistance: 17.00,   // GREATLY reduced to prevent a single tangled mesh
          spacing: 20.00        // Keep points spread far apart
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
}

export default DBackground;