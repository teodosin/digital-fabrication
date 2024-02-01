precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(0.0);

  // Create a starry sky
  for (int i = 0; i < 100; i++) {
    vec2 pos = vec2(sin(u_time + float(i)), cos(u_time + float(i)));
    float dist = distance(st, pos);
    color += 1.0 / (dist * dist) * vec3(1.0);
  }

  gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
}