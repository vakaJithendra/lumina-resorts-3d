import { useRef, useEffect } from 'react';

interface OceanCanvasProps {
  mouseX?: number;
  mouseY?: number;
}

export default function OceanCanvas({ mouseX = 0, mouseY = 0 }: OceanCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    const draw = () => {
      const { width, height } = canvas;
      time += 0.008;

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Sky gradient (sunset)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.55);
      skyGrad.addColorStop(0, '#0a1628');
      skyGrad.addColorStop(0.3, '#1a2d4a');
      skyGrad.addColorStop(0.55, '#3d2b4a');
      skyGrad.addColorStop(0.75, '#8b4a3a');
      skyGrad.addColorStop(0.9, '#d4885a');
      skyGrad.addColorStop(1, '#D4A853');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height * 0.55);

      // Sun glow
      const sunX = width * 0.65 + mouseX * 20;
      const sunY = height * 0.42 + mouseY * 10;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 200);
      sunGrad.addColorStop(0, 'rgba(255, 200, 100, 0.6)');
      sunGrad.addColorStop(0.3, 'rgba(212, 168, 83, 0.3)');
      sunGrad.addColorStop(0.7, 'rgba(212, 136, 83, 0.1)');
      sunGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, width, height * 0.6);

      // Sun disc
      ctx.beginPath();
      ctx.arc(sunX, sunY, 35, 0, Math.PI * 2);
      const discGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 35);
      discGrad.addColorStop(0, 'rgba(255, 230, 180, 0.9)');
      discGrad.addColorStop(0.7, 'rgba(255, 200, 120, 0.6)');
      discGrad.addColorStop(1, 'rgba(212, 168, 83, 0.1)');
      ctx.fillStyle = discGrad;
      ctx.fill();

      // Ocean layers
      const oceanTop = height * 0.5;
      const waveLayers = [
        { offset: 0, amplitude: 18, frequency: 0.004, speed: 1.2, color1: 'rgba(26, 78, 107, 0.6)', color2: 'rgba(11, 29, 46, 0.8)' },
        { offset: 25, amplitude: 14, frequency: 0.005, speed: 0.9, color1: 'rgba(20, 65, 95, 0.7)', color2: 'rgba(11, 29, 46, 0.85)' },
        { offset: 50, amplitude: 10, frequency: 0.006, speed: 0.7, color1: 'rgba(15, 55, 85, 0.8)', color2: 'rgba(11, 29, 46, 0.9)' },
        { offset: 75, amplitude: 8, frequency: 0.008, speed: 0.5, color1: 'rgba(11, 40, 70, 0.9)', color2: 'rgba(6, 13, 24, 0.95)' },
        { offset: 100, amplitude: 5, frequency: 0.01, speed: 0.3, color1: 'rgba(8, 30, 55, 0.95)', color2: 'rgba(6, 13, 24, 1)' },
      ];

      waveLayers.forEach((layer) => {
        const baseY = oceanTop + layer.offset;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 2) {
          const mouseInfluence = Math.sin((x - mouseX * width) * 0.01) * 3 * mouseY;
          const y = baseY +
            Math.sin(x * layer.frequency + time * layer.speed) * layer.amplitude +
            Math.sin(x * layer.frequency * 2.3 + time * layer.speed * 1.4) * (layer.amplitude * 0.4) +
            mouseInfluence;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - layer.amplitude, 0, height);
        grad.addColorStop(0, layer.color1);
        grad.addColorStop(1, layer.color2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Sun reflection on water
      const reflGrad = ctx.createLinearGradient(sunX - 60, oceanTop, sunX + 60, height);
      reflGrad.addColorStop(0, 'rgba(212, 168, 83, 0.15)');
      reflGrad.addColorStop(0.5, 'rgba(212, 168, 83, 0.05)');
      reflGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = reflGrad;
      ctx.fillRect(sunX - 80, oceanTop, 160, height - oceanTop);

      // Shimmering light particles on water
      for (let i = 0; i < 30; i++) {
        const px = (Math.sin(time * 0.3 + i * 1.7) * 0.5 + 0.5) * width;
        const py = oceanTop + 20 + (Math.sin(time * 0.5 + i * 2.3) * 0.5 + 0.5) * (height - oceanTop - 20);
        const alpha = Math.sin(time * 2 + i * 3.1) * 0.3 + 0.3;
        const size = Math.sin(time * 1.5 + i * 2.7) * 1.5 + 2;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${Math.max(0, alpha)})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}