import React, { useEffect, useRef } from 'react';

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; o: number }[] = [];
    const numStars = 800;
    const speed = 0.5;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          o: Math.random(),
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.fillStyle = '#050510';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      stars.forEach((star) => {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = canvas.width;
        }

        const sx = star.x / (star.z / canvas.width);
        const sy = star.y / (star.z / canvas.width);
        const size = 2 * (1 - star.z / canvas.width);

        ctx.beginPath();
        ctx.fillStyle = `rgba(188, 19, 254, ${star.o * (1 - star.z / canvas.width)})`;
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();

        // Some blue stars too
        if (star.o > 0.7) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(0, 242, 255, ${star.o * (1 - star.z / canvas.width)})`;
            ctx.arc(sx, sy, size * 0.8, 0, Math.PI * 2);
            ctx.fill();
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};
