"use client";

import { useEffect, useRef } from "react";

export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    // --- Stars (twinkling background) ---
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      pulseSpeed: number;
      pulseOffset: number;
      color: string;
    }

    // --- Crystal particles ---
    interface Crystal {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      alpha: number;
      hue: number;
      sides: number;
    }

    // --- Planets ---
    interface Planet {
      x: number;
      y: number;
      radius: number;
      orbitRadius: number;
      orbitSpeed: number;
      orbitAngle: number;
      centerX: number;
      centerY: number;
      color1: string;
      color2: string;
      hasRing: boolean;
    }

    // --- Meteors ---
    interface Meteor {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      alpha: number;
      life: number;
      maxLife: number;
    }

    // --- Galaxy spirals ---
    interface Galaxy {
      x: number;
      y: number;
      radius: number;
      rotation: number;
      rotationSpeed: number;
      arms: number;
      alpha: number;
      hue: number;
    }

    let stars: Star[] = [];
    let crystals: Crystal[] = [];
    let planets: Planet[] = [];
    let meteors: Meteor[] = [];
    let galaxies: Galaxy[] = [];

    const starColors = [
      "200, 220, 255",
      "255, 240, 220",
      "180, 160, 255",
      "255, 200, 180",
      "160, 220, 255",
    ];

    function resize() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w * window.devicePixelRatio;
      canvas!.height = h * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      init();
    }

    function init() {
      // Stars
      stars = [];
      const starCount = Math.min(Math.floor((w * h) / 2000), 350);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.8 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          pulseSpeed: Math.random() * 0.03 + 0.005,
          pulseOffset: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }

      // Crystals
      crystals = [];
      const crystalCount = Math.min(Math.floor((w * h) / 20000), 25);
      for (let i = 0; i < crystalCount; i++) {
        crystals.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 8 + 4,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          alpha: Math.random() * 0.3 + 0.1,
          hue: Math.random() * 60 + 240, // purple-blue spectrum
          sides: Math.floor(Math.random() * 3) + 4, // 4-6 sided
        });
      }

      // Planets
      planets = [];
      const planetCount = Math.floor(Math.random() * 2) + 3;
      for (let i = 0; i < planetCount; i++) {
        const centerX = Math.random() * w;
        const centerY = Math.random() * h;
        const hue = Math.random() * 360;
        planets.push({
          x: centerX,
          y: centerY,
          radius: Math.random() * 12 + 6,
          orbitRadius: Math.random() * 40 + 20,
          orbitSpeed:
            (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
          orbitAngle: Math.random() * Math.PI * 2,
          centerX,
          centerY,
          color1: `hsl(${hue}, 60%, 50%)`,
          color2: `hsl(${hue + 30}, 70%, 30%)`,
          hasRing: Math.random() > 0.5,
        });
      }

      // Galaxies
      galaxies = [];
      const galaxyCount = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < galaxyCount; i++) {
        galaxies.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 60 + 40,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed:
            (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
          arms: Math.floor(Math.random() * 2) + 2,
          alpha: Math.random() * 0.12 + 0.04,
          hue: Math.random() * 60 + 250,
        });
      }

      // Start with some meteors
      meteors = [];
    }

    function spawnMeteor() {
      if (meteors.length > 4) return;
      const fromLeft = Math.random() > 0.5;
      meteors.push({
        x: fromLeft ? -10 : w + 10,
        y: Math.random() * h * 0.5,
        vx: (fromLeft ? 1 : -1) * (Math.random() * 4 + 3),
        vy: Math.random() * 2 + 1,
        length: Math.random() * 60 + 30,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 80 + 60,
      });
    }

    function drawStars(time: number) {
      for (const star of stars) {
        const a =
          star.alpha *
          (0.6 + Math.sin(time * star.pulseSpeed + star.pulseOffset) * 0.4);
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${star.color}, ${a})`;
        ctx!.fill();

        // Glow for brighter stars
        if (star.size > 1.2) {
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${star.color}, ${a * 0.15})`;
          ctx!.fill();
        }
      }
    }

    function drawCrystals(time: number) {
      for (const c of crystals) {
        c.x += c.vx;
        c.y += c.vy;
        c.rotation += c.rotationSpeed;

        // Wrap around
        if (c.x < -20) c.x = w + 20;
        if (c.x > w + 20) c.x = -20;
        if (c.y < -20) c.y = h + 20;
        if (c.y > h + 20) c.y = -20;

        const pulseAlpha =
          c.alpha * (0.7 + Math.sin(time * 0.02 + c.rotation) * 0.3);

        ctx!.save();
        ctx!.translate(c.x, c.y);
        ctx!.rotate(c.rotation);

        // Draw crystal polygon
        ctx!.beginPath();
        for (let i = 0; i < c.sides; i++) {
          const angle = (Math.PI * 2 * i) / c.sides - Math.PI / 2;
          const px = Math.cos(angle) * c.size;
          const py = Math.sin(angle) * c.size;
          if (i === 0) ctx!.moveTo(px, py);
          else ctx!.lineTo(px, py);
        }
        ctx!.closePath();

        ctx!.strokeStyle = `hsla(${c.hue}, 70%, 65%, ${pulseAlpha})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Inner glow
        ctx!.fillStyle = `hsla(${c.hue}, 70%, 65%, ${pulseAlpha * 0.15})`;
        ctx!.fill();

        // Sparkle highlight
        ctx!.beginPath();
        ctx!.arc(0, 0, c.size * 0.3, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${c.hue}, 80%, 80%, ${pulseAlpha * 0.4})`;
        ctx!.fill();

        ctx!.restore();
      }
    }

    function drawPlanets() {
      for (const p of planets) {
        p.orbitAngle += p.orbitSpeed;
        p.x = p.centerX + Math.cos(p.orbitAngle) * p.orbitRadius;
        p.y = p.centerY + Math.sin(p.orbitAngle) * p.orbitRadius * 0.4; // elliptical

        // Orbit trail
        ctx!.beginPath();
        ctx!.ellipse(
          p.centerX,
          p.centerY,
          p.orbitRadius,
          p.orbitRadius * 0.4,
          0,
          0,
          Math.PI * 2,
        );
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx!.lineWidth = 0.5;
        ctx!.stroke();

        // Planet body gradient
        const grad = ctx!.createRadialGradient(
          p.x - p.radius * 0.3,
          p.y - p.radius * 0.3,
          0,
          p.x,
          p.y,
          p.radius,
        );
        grad.addColorStop(0, p.color1);
        grad.addColorStop(1, p.color2);

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.globalAlpha = 0.4;
        ctx!.fill();
        ctx!.globalAlpha = 1;

        // Ring
        if (p.hasRing) {
          ctx!.save();
          ctx!.translate(p.x, p.y);
          ctx!.scale(1, 0.3);
          ctx!.beginPath();
          ctx!.arc(0, 0, p.radius * 1.8, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(200, 180, 255, 0.2)`;
          ctx!.lineWidth = 1.5;
          ctx!.stroke();
          ctx!.restore();
        }

        // Planet glow
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(139, 92, 246, 0.03)`;
        ctx!.fill();
      }
    }

    function drawMeteors() {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;
        m.alpha = 1 - m.life / m.maxLife;

        if (m.life >= m.maxLife) {
          meteors.splice(i, 1);
          continue;
        }

        // Meteor trail
        const tailX =
          m.x - (m.vx / Math.sqrt(m.vx * m.vx + m.vy * m.vy)) * m.length;
        const tailY =
          m.y - (m.vy / Math.sqrt(m.vx * m.vx + m.vy * m.vy)) * m.length;

        const gradient = ctx!.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${m.alpha * 0.9})`);
        gradient.addColorStop(0.3, `rgba(200, 180, 255, ${m.alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);

        ctx!.beginPath();
        ctx!.moveTo(m.x, m.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = 2;
        ctx!.lineCap = "round";
        ctx!.stroke();

        // Head glow
        ctx!.beginPath();
        ctx!.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${m.alpha})`;
        ctx!.fill();
      }
    }

    function drawGalaxies(time: number) {
      for (const g of galaxies) {
        g.rotation += g.rotationSpeed;

        ctx!.save();
        ctx!.translate(g.x, g.y);
        ctx!.rotate(g.rotation);

        // Draw spiral arms
        for (let arm = 0; arm < g.arms; arm++) {
          const armOffset = (Math.PI * 2 * arm) / g.arms;
          for (let i = 0; i < 60; i++) {
            const angle = armOffset + i * 0.12;
            const dist = (i / 60) * g.radius;
            const px = Math.cos(angle) * dist;
            const py = Math.sin(angle) * dist;
            const dotAlpha =
              g.alpha * (1 - i / 60) * (0.7 + Math.sin(time * 0.01 + i) * 0.3);
            const dotSize = (1 - i / 60) * 1.5 + 0.3;

            ctx!.beginPath();
            ctx!.arc(px, py, dotSize, 0, Math.PI * 2);
            ctx!.fillStyle = `hsla(${g.hue + i * 0.5}, 60%, 70%, ${dotAlpha})`;
            ctx!.fill();
          }
        }

        // Core glow
        const coreGrad = ctx!.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          g.radius * 0.25,
        );
        coreGrad.addColorStop(0, `hsla(${g.hue}, 50%, 80%, ${g.alpha * 2})`);
        coreGrad.addColorStop(1, `hsla(${g.hue}, 50%, 50%, 0)`);
        ctx!.beginPath();
        ctx!.arc(0, 0, g.radius * 0.25, 0, Math.PI * 2);
        ctx!.fillStyle = coreGrad;
        ctx!.fill();

        ctx!.restore();
      }
    }

    // Nebula / dust clouds
    function drawNebula(time: number) {
      const nebulaCount = 3;
      for (let i = 0; i < nebulaCount; i++) {
        const x =
          (w * (i + 1)) / (nebulaCount + 1) + Math.sin(time * 0.003 + i) * 30;
        const y =
          (h * (i + 1)) / (nebulaCount + 1) +
          Math.cos(time * 0.002 + i * 2) * 20;
        const radius = 80 + i * 30;

        const grad = ctx!.createRadialGradient(x, y, 0, x, y, radius);
        const hue = 260 + i * 40;
        grad.addColorStop(0, `hsla(${hue}, 60%, 50%, 0.04)`);
        grad.addColorStop(0.5, `hsla(${hue + 20}, 50%, 40%, 0.02)`);
        grad.addColorStop(1, `hsla(${hue}, 40%, 30%, 0)`);

        ctx!.beginPath();
        ctx!.arc(x, y, radius, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }
    }

    let time = 0;
    let meteorTimer = 0;

    function animate() {
      time++;
      meteorTimer++;
      ctx!.clearRect(0, 0, w, h);

      // Spawn meteors periodically
      if (meteorTimer > 120 + Math.random() * 100) {
        spawnMeteor();
        meteorTimer = 0;
      }

      drawNebula(time);
      drawGalaxies(time);
      drawStars(time);
      drawCrystals(time);
      drawPlanets();
      drawMeteors();

      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
