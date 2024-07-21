#version 300 es

uniform vec2 u_resolution;
uniform mat3 u_matrix;

in  vec2 a_position;
out vec4 v_color;

void main() {
    vec2 position  = ( u_matrix * vec3(a_position, 1) ).xy;
    vec2 clipSpace = (2.0f * position / u_resolution - 1.0f) * vec2(1, -1);

    gl_Position = vec4(clipSpace, 0, 1);
    v_color     = gl_Position * 0.5f + 0.5f;
}