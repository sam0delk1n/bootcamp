#version 300 es

precision highp float;

uniform vec4 u_color;
in      vec4 v_color;
out     vec4 outColor;

void main() {
    outColor = vec4(
        u_color.x * v_color.x,
        u_color.y * v_color.y,
        u_color.z * v_color.z,
        u_color.w * v_color.w
    );
}
