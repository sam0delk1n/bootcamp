#version 300 es

uniform mat3 u_matrix;

in  vec2 a_position;
out vec4 v_color;

void main() {
    gl_Position = vec4( ( u_matrix * vec3(a_position, 1) ).xy, 0, 1 );
    v_color     = gl_Position * 0.5f + 0.5f;
}
