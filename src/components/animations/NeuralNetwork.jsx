import React, { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
  const neuralNetworkRef = useRef(null);

  useEffect(() => {
    if (neuralNetworkRef.current) {
      const canvas = neuralNetworkRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;
      let particles = [];
      let connections = [];
      let brainWaves = [];
      
      const handleResize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initializeParticles();
      };
      
      const initializeParticles = () => {
        particles = [];
        connections = [];
        brainWaves = [];
        const particleCount = Math.min(40, Math.floor(canvas.width * canvas.height / 15000));
        
        // Create neural network nodes
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1.5,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
            active: Math.random() > 0.3,
            color: Math.random() > 0.6 ? '#00f7ff' : Math.random() > 0.3 ? '#ff00cc' : '#9933ff',
            pulsePhase: Math.random() * Math.PI * 2,
            energy: Math.random()
          });
        }
        
        // Create brain wave patterns
        for (let i = 0; i < 8; i++) {
          brainWaves.push({
            amplitude: Math.random() * 30 + 20,
            frequency: Math.random() * 0.02 + 0.01,
            phase: Math.random() * Math.PI * 2,
            y: Math.random() * canvas.height,
            speed: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.3 + 0.1
          });
        }
        
        // Create intelligent connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(particles[i].x - particles[j].x, 2) + 
              Math.pow(particles[i].y - particles[j].y, 2)
            );
            
            if (distance < canvas.width / 6 && Math.random() > 0.85) {
              connections.push({
                from: i,
                to: j,
                strength: Math.random(),
                pulsePosition: 0,
                pulseSpeed: Math.random() * 0.04 + 0.01,
                pulseActive: false,
                dataPacket: null
              });
            }
          }
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw brain waves
        brainWaves.forEach(wave => {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 247, 255, ${wave.opacity})`;
          ctx.lineWidth = 1;
          
          for (let x = 0; x < canvas.width; x += 5) {
            const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
          wave.phase += wave.speed * 0.01;
        });
        
        // Draw connections with data flow
        connections.forEach(connection => {
          const fromParticle = particles[connection.from];
          const toParticle = particles[connection.to];
          
          const dx = toParticle.x - fromParticle.x;
          const dy = toParticle.y - fromParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width / 5) {
            // Connection line
            ctx.beginPath();
            ctx.moveTo(fromParticle.x, fromParticle.y);
            ctx.lineTo(toParticle.x, toParticle.y);
            
            const opacity = Math.max(0, (1 - distance / (canvas.width / 5)) * 0.3 * connection.strength);
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Trigger data packets randomly
            if (Math.random() < 0.003 && !connection.pulseActive) {
              connection.pulseActive = true;
              connection.pulsePosition = 0;
              connection.dataPacket = {
                type: Math.random() > 0.5 ? 'data' : 'signal',
                size: Math.random() * 2 + 1
              };
            }
            
            // Animate data packets
            if (connection.pulseActive) {
              connection.pulsePosition += connection.pulseSpeed;
              
              if (connection.pulsePosition > 1) {
                connection.pulseActive = false;
                connection.pulsePosition = 0;
                connection.dataPacket = null;
                // Activate target particle
                toParticle.energy = Math.min(1, toParticle.energy + 0.3);
              } else {
                const pulseX = fromParticle.x + dx * connection.pulsePosition;
                const pulseY = fromParticle.y + dy * connection.pulsePosition;
                
                // Draw data packet
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, connection.dataPacket.size, 0, Math.PI * 2);
                ctx.fillStyle = connection.dataPacket.type === 'data' ? '#ff00cc' : '#00f7ff';
                ctx.fill();
                
                // Data packet trail
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, connection.dataPacket.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = connection.dataPacket.type === 'data' ? 'rgba(255, 0, 204, 0.2)' : 'rgba(0, 247, 255, 0.2)';
                ctx.fill();
              }
            }
          }
        });
        
        // Draw particles with enhanced effects
        particles.forEach(particle => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Boundary collision
          if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;
          
          // Update energy and activity
          particle.energy *= 0.995; // Energy decay
          particle.pulsePhase += 0.1;
          
          if (Math.random() < 0.01) {
            particle.active = !particle.active;
          }
          
          // Draw particle core
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          const coreOpacity = particle.active ? 1 : 0.4;
          ctx.fillStyle = particle.color.replace(')', `, ${coreOpacity})`).replace('rgb', 'rgba');
          ctx.fill();
          
          // Draw energy field
          if (particle.energy > 0.1) {
            const energyRadius = particle.radius * (2 + particle.energy * 2);
            const energyOpacity = particle.energy * 0.3;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, energyRadius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color.replace(')', `, ${energyOpacity})`).replace('rgb', 'rgba');
            ctx.fill();
          }
          
          // Draw pulse ring for active particles
          if (particle.active) {
            const pulseRadius = particle.radius * (1.5 + Math.sin(particle.pulsePhase) * 0.5);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, pulseRadius, 0, Math.PI * 2);
            ctx.strokeStyle = particle.color.replace(')', `, 0.6)`).replace('rgb', 'rgba');
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      handleResize();
      animate();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <canvas 
      ref={neuralNetworkRef} 
      className="neural-network-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default NeuralNetwork;