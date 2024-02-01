export async function runSketch(element: HTMLElement) {
    if (typeof window !== 'undefined') {
      const p5 = (await import('p5')).default;

      new p5((p: any) => {
        let stars: { x: any; y: any; weight: any; color: any; }[] = [];

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

          // Generate stars
          for (let i = 0; i < 300; i++) {
            stars.push({
              x: p.random(0, p.width),
              y: p.random(0, p.height),
              weight: p.random(0.3, 2),
              color: p.random(50, 155)
            });
          }
        };

        p.draw = () => {
          //p.background(0); // Set the background color to black
          p.translate(-p.width / 2, -p.height / 2); // Move the origin to the center

          // Draw stars
          for (let star of stars) {
            p.stroke(star.color / 4); // Set the color of the stars
            p.strokeWeight(star.weight * 4);
            p.point(star.x, star.y);
            p.stroke(star.color / 2); // Set the color of the stars
            p.strokeWeight(star.weight * 2);
            p.point(star.x, star.y);
            p.stroke(star.color); // Set the color of the stars
            p.strokeWeight(star.weight);
            p.point(star.x, star.y);
          }
        };

        p.windowResized = () => {
            const oldWidth = p.width;
            const oldHeight = p.height;
            p.resizeCanvas(p.windowWidth, p.windowHeight);
          
            // Generate new stars in the newly visible area
            if (p.width > oldWidth) {
              for (let i = 0; i < (p.width - oldWidth) * p.height / 10000; i++) {
                stars.push({
                  x: p.random(oldWidth, p.width),
                  y: p.random(0, p.height),
                  weight: p.random(0.3, 4),
                  color: p.random(50, 155)
                });
              }
            }
            if (p.height > oldHeight) {
              for (let i = 0; i < (p.height - oldHeight) * p.width / 10000; i++) {
                stars.push({
                  x: p.random(0, p.width),
                  y: p.random(oldHeight, p.height),
                  weight: p.random(0.3, 4),
                  color: p.random(50, 155)
                });
              }
            }
          };
      }, element);
    }
  }

// export async function runSketch(element: HTMLElement) {
//     if (typeof window !== 'undefined') {
//       const p5 = (await import('p5')).default;
  
//       new p5((p: any) => {
//         let shader: { setUniform: (arg0: string, arg1: number | any[]) => void; };
  
//         p.preload = () => {
//           shader = p.loadShader('starry_sky.frag', () => {
//             console.log("Shader loaded successfully");
//           }, (err: any) => {
//             console.log("Shader failed to load", err);
//           });
//         };
  
//         p.setup = () => {
//           p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
//           p.shader(shader);
//         };
  
//         p.draw = () => {
//           shader.setUniform('u_resolution', [p.width, p.height]);
//           shader.setUniform('u_time', p.millis() / 1000.0);
//         };
  
//         p.windowResized = () => {
//           p.resizeCanvas(p.windowWidth, p.windowHeight);
//         };
//       }, element);
//     }
//   }