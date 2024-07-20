#version 300 es

uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform vec2 u_rotation;
uniform vec2 u_scale;

in  vec2 a_position;
out vec4 v_color;

void main() {
    vec2 position = a_position;

    position *= u_scale;

    position = vec2(
        position.x * u_rotation.y + position.y * u_rotation.x,
        position.y * u_rotation.y - position.x * u_rotation.x
    );

    position += u_translation;

    vec2 clipSpace = (2.0f * position / u_resolution - 1.0f) * vec2(1, -1);

    gl_Position = vec4(clipSpace, 0, 1);
    v_color     = gl_Position * 0.5f + 0.5f;
}