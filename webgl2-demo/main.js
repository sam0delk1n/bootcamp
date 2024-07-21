import {Mat3} from "./math.js";

window.addEventListener("load", main);

async function main() {
    try {
        const canvas = window.document.getElementById("canvas");
        if (canvas === null) {
            throw new Error("Не удалось получить canvas");
        }

        const gl = canvas.getContext("webgl2");
        if (gl === null) {
            throw new Error("Не удалось получить gl");
        }

        let vertexShaderSource   = null;
        let fragmentShaderSource = null;

        await window.fetch("./plain.vert")
            .then( r => r.text() )
            .then( t => { vertexShaderSource = t } );

        await window.fetch("./plain.frag")
            .then( r => r.text() )
            .then( t => { fragmentShaderSource = t } );

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (success) return shader;

            console.log( gl.getShaderInfoLog(shader) );
            gl.deleteShader(shader);
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        function createProgram(gl, vertexShader, fragmentShader) {
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            const success = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (success) return program;

            console.log( gl.getProgramInfoLog(program) );
            gl.deleteProgram(program);
        }

        const program = createProgram(gl, vertexShader, fragmentShader);

        const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
        const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
        const matrixLocation = gl.getUniformLocation(program, "u_matrix");
        const colorUniformLocation = gl.getUniformLocation(program, "u_color");

        function randomInt(range) {
            return Math.floor( range * Math.random() );
        }

        function drawRectangle(gl, x, y, w, h, degrees, color) {
            const data = [
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,
            ];

            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(data),
                gl.STATIC_DRAW
            );

            const matrix = new Mat3();

            matrix
                .multiply( Mat3.makeTranslation(x, y) )
                .multiply( Mat3.makeRotation(Math.PI / 180 * degrees) )
                .multiply( Mat3.makeScale(w, h) );

            gl.uniformMatrix3fv(matrixLocation, false, matrix.elements);

            gl.uniform4fv(colorUniformLocation, color);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);

        gl.enableVertexAttribArray(positionAttributeLocation);

        const size = 2;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;

        gl.vertexAttribPointer(
            positionAttributeLocation,
            size,
            type,
            normalize,
            stride,
            offset
        );

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.useProgram(program);
        gl.bindVertexArray(vao);

        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

        for (let i = 0; i < 50; ++i) {
            drawRectangle(
                gl,
                randomInt(300),
                randomInt(300),
                randomInt(300),
                randomInt(300),
                0,
                [ Math.random(), Math.random(), Math.random(), 1 ]
            );
        }

        drawRectangle(gl, 128, 128, 256, 256, 0, [1, 1, 0, 1]);

    } catch (error) {
        window.alert( `ERROR: ${error.message}` );
    }
}