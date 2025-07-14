import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const gridSpacing = 50;
      const lines = [];
      const pulses = [];
      const nodes = [];
      const primaryColor = "#00f7ff";
      const secondaryColor = "#ff00cc";
      const tertiaryColor = "#9933ff";
      
      const initGrid = () => {
        // Create grid lines
        for (let x = 0; x < canvas.width; x += gridSpacing) {
          for (let y = 0; y < canvas.height; y += gridSpacing) {
            if (Math.random() < 0.3) {
              // Horizontal lines
              if (x + gridSpacing < canvas.width && Math.random() < 0.5) {
                const color = Math.random() < 0.6 ? primaryColor : Math.random() < 0.7 ? secondaryColor : tertiaryColor;
                lines.push({
                  x1: x, y1: y, x2: x + gridSpacing, y2: y,
                  color: color,
                  opacity: 0.1 + Math.random() * 0.3,
                  width: Math.random() < 0.9 ? 0.5 : 1.5
                });
                
                if (Math.random() < 0.15) {
                  pulses.push({
                    x1: x, y1: y, x2: x + gridSpacing, y2: y,
                    pos: 0, speed: 0.4 + Math.random() * 1.2,
                    size: 1 + Math.random() * 2,
                    color: color,
                    intensity: Math.random()
                  });
                }
              }
              
              // Vertical lines
              if (y + gridSpacing < canvas.height && Math.random() < 0.5) {
                const color = Math.random() < 0.6 ? primaryColor : Math.random() < 0.7 ? secondaryColor : tertiaryColor;
                lines.push({
                  x1: x, y1: y, x2: x, y2: y + gridSpacing,
                  color: color,
                  opacity: 0.1 + Math.random() * 0.3,
                  width: Math.random() < 0.9 ? 0.5 : 1.5
                });
                
                if (Math.random() < 0.15) {
                  pulses.push({
                    x1: x, y1: y, x2: x, y2: y + gridSpacing,
                    pos: 0, speed: 0.4 + Math.random() * 1.2,
                    size: 1 + Math.random() * 2,
                    color: color,
                    intensity: Math.random()
                  });
                }
              }
              
              // Add nodes at intersections
              if (Math.random() < 0.1) {
                nodes.push({
                  x: x, y: y,
                  size: Math.random() * 2 + 1,
                  color: Math.random() < 0.5 ? primaryColor : secondaryColor,
                  pulsePhase: Math.random() * Math.PI * 2,
                  active: Math.random() > 0.7
                });
              }
            }
          }
        }
      };
      
      initGrid();
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid lines
        lines.forEach(line => {
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.strokeStyle = line.color.replace(')', `, ${line.opacity})`).replace('rgb', 'rgba');
          ctx.lineWidth = line.width;
          ctx.stroke();
        });
        
        // Draw and animate pulses
        pulses.forEach(pulse => {
          pulse.pos += pulse.speed;
          if (pulse.pos > 100) pulse.pos = 0;
          
          const percent = pulse.pos / 100;
          const x = pulse.x1 + (pulse.x2 - pulse.x1) * percent;
          const y = pulse.y1 + (pulse.y2 - pulse.y1) * percent;
          
          // Main pulse
          ctx.beginPath();
          ctx.arc(x, y, pulse.size, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color;
          ctx.fill();
          
          // Pulse glow
          ctx.beginPath();
          ctx.arc(x, y, pulse.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color.replace(')', `, ${0.3 * pulse.intensity})`).replace('rgb', 'rgba');
          ctx.fill();
          
          // Pulse trail
          if (pulse.pos > 10) {
            const trailX = pulse.x1 + (pulse.x2 - pulse.x1) * ((pulse.pos - 10) / 100);
            const trailY = pulse.y1 + (pulse.y2 - pulse.y1) * ((pulse.pos - 10) / 100);
            
            ctx.beginPath();
            ctx.arc(trailX, trailY, pulse.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = pulse.color.replace(')', `, ${0.5 * pulse.intensity})`).replace('rgb', 'rgba');
            ctx.fill();
          }
        });
        
        // Draw nodes
        nodes.forEach(node => {
          node.pulsePhase += 0.1;
          
          if (Math.random() < 0.005) {
            node.active = !node.active;
          }
          
          // Node core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = node.active ? node.color : node.color.replace(')', `, 0.4)`).replace('rgb', 'rgba');
          ctx.fill();
          
          // Node pulse ring
          if (node.active) {
            const pulseSize = node.size * (1.5 + Math.sin(node.pulsePhase) * 0.5);
            ctx.beginPath();
            ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = node.color.replace(')', `, 0.6)`).replace('rgb', 'rgba');
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="circuit-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default CircuitBackground;