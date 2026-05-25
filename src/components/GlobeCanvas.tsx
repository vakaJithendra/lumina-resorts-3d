import { useRef, useEffect } from 'react';

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 400;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    let time = 0;

    const draw = () => {
      const cx = size / 2;
      const cy = size / 2;
      const radius = size * 0.38;

      ctx.clearRect(0, 0, size, size);

      // Atmospheric glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.6);
      glowGrad.addColorStop(0, 'rgba(26, 78, 107, 0.15)');
      glowGrad.addColorStop(0.5, 'rgba(26, 78, 107, 0.05)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, size, size);

      // Globe outline
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 168, 83, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Globe fill
      const globeGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, 0, cx, cy, radius);
      globeGrad.addColorStop(0, 'rgba(26, 78, 107, 0.15)');
      globeGrad.addColorStop(1, 'rgba(6, 13, 24, 0.3)');
      ctx.fillStyle = globeGrad;
      ctx.fill();

      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        const latRad = (lat * Math.PI) / 180;
        const lineRadius = radius * Math.cos(latRad);
        const lineY = cy - radius * Math.sin(latRad);

        ctx.beginPath();
        ctx.ellipse(cx, lineY, lineRadius, lineRadius * 0.15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(212, 168, 83, 0.08)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Longitude lines
      for (let lon = 0; lon < 180; lon += 30) {
        const lonRad = ((lon + time * 15) * Math.PI) / 180;
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 2) {
          const latRad = (lat * Math.PI) / 180;
          const x = radius * Math.cos(latRad) * Math.sin(lonRad);
          const y = radius * Math.sin(latRad);
          const z = radius * Math.cos(latRad) * Math.cos(lonRad);

          if (z > 0) {
            const screenX = cx + x;
            const screenY = cy - y;
            if (lat === -90) ctx.moveTo(screenX, screenY);
            else ctx.lineTo(screenX, screenY);
          }
        }
        ctx.strokeStyle = 'rgba(212, 168, 83, 0.06)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Dots on sphere (continents approximation)
      const rotation = time * 15;
      for (let lat = -80; lat <= 80; lat += 8) {
        for (let lon = -180; lon <= 180; lon += 8) {
          const latRad = (lat * Math.PI) / 180;
          const lonRad = ((lon + rotation) * Math.PI) / 180;

          const x = radius * Math.cos(latRad) * Math.cos(lonRad);
          const y = radius * Math.sin(latRad);
          const z = radius * Math.cos(latRad) * Math.sin(lonRad);

          if (z > 0) {
            const screenX = cx + x;
            const screenY = cy - y;
            const alpha = (z / radius) * 0.4;

            ctx.beginPath();
            ctx.arc(screenX, screenY, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 168, 83, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // Resort beacon (Maldives: 4.1755° N, 73.5093° E)
      const resortLat = (4.1755 * Math.PI) / 180;
      const resortLon = ((73.5093 + rotation) * Math.PI) / 180;
      const rx = radius * Math.cos(resortLat) * Math.cos(resortLon);
      const ry = radius * Math.sin(resortLat);
      const rz = radius * Math.cos(resortLat) * Math.sin(resortLon);

      if (rz > 0) {
        const sx = cx + rx;
        const sy = cy - ry;

        // Outer pulse
        const pulse = Math.sin(time * 3) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(sx, sy, 6 + pulse * 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${0.15 + pulse * 0.15})`;
        ctx.fill();

        // Inner dot
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#D4A853';
        ctx.fill();

        // Label
        ctx.font = '10px DM Sans';
        ctx.fillStyle = 'rgba(212, 168, 83, 0.8)';
        ctx.fillText('LUMINA', sx + 12, sy - 4);
        ctx.fillStyle = 'rgba(245, 237, 216, 0.5)';
        ctx.fillText('RESORTS', sx + 12, sy + 8);
      }

      time += 0.003;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto"
      style={{ maxWidth: '100%' }}
    />
  );
}