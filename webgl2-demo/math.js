export class Mat3 {
    #elements = [
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    ];

    constructor(
        m11, m12, m13,
        m21, m22, m23,
        m31, m32, m33
    ) {
        if (m11 !== undefined) {
            this.set(
                m11, m12, m13,
                m21, m22, m23,
                m31, m32, m33
            );
        }
    }

    set(
        m11, m12, m13,
        m21, m22, m23,
        m31, m32, m33
    ) {
        const e = this.#elements;

        e[0] = m11; e[1] = m12; e[2] = m13;
        e[3] = m21; e[4] = m22; e[5] = m23;
        e[6] = m31; e[7] = m32; e[8] = m33;

        return this;
    }

    identity() {
        return this.set(
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        );
    }

    copy(other) {
        const a = this.#elements;
        const b = other.#elements;

        a[0] = b[0]; a[1] = b[1]; a[2] = b[2];
        a[3] = b[3]; a[4] = b[4]; a[5] = b[5];
        a[6] = b[6]; a[7] = b[7]; a[8] = b[8];

        return this;
    }

    multiply(other) {
        const a = this.#elements;
        const b = other.#elements;

        const temp = new Mat3(
            b[0] * a[0] + b[1] * a[3] + b[2] * a[6],
            b[0] * a[1] + b[1] * a[4] + b[2] * a[7],
            b[0] * a[2] + b[1] * a[5] + b[2] * a[8],
            b[3] * a[0] + b[4] * a[3] + b[5] * a[6],
            b[3] * a[1] + b[4] * a[4] + b[5] * a[7],
            b[3] * a[2] + b[4] * a[5] + b[5] * a[8],
            b[6] * a[0] + b[7] * a[3] + b[8] * a[6],
            b[6] * a[1] + b[7] * a[4] + b[8] * a[7],
            b[6] * a[2] + b[7] * a[5] + b[8] * a[8]
        );

        return this.copy(temp);
    }

    static makeTranslation(x, y) {
        return new Mat3(
            1, 0, 0,
            0, 1, 0,
            x, y, 1
        );
    }

    static makeRotation(rads) {
        const cos = Math.cos(rads);
        const sin = Math.sin(rads);

        return new Mat3(
            cos, -sin, 0,
            sin,  cos, 0,
              0,    0, 1
        );
    }

    static makeScale(x, y) {
        return new Mat3(
            x, 0, 0,
            0, y, 0,
            0, 0, 1
        );
    }

    static makeProjection(w, h) {
        return new Mat3(
            2 / w,      0, 0,
                0, -2 / h, 0,
               -1,      1, 1
        );
    }

    toArray() {
        const e = this.#elements;

        return [
            e[0], e[1], e[2],
            e[3], e[4], e[5],
            e[6], e[7], e[8]
        ];
    }

    equals(other) {
        const a = this.#elements;
        const b = other.#elements;

        for (let i = 0; i < 9; ++i) {
            if ( a[i] !== b[i] ) return false;
        }

        return true;
    }

    transpose() {
        const e = this.#elements;
        let   swap;

        swap = e[1]; e[1] = e[3]; e[3] = swap;
        swap = e[2]; e[2] = e[6]; e[6] = swap;
        swap = e[5]; e[5] = e[7]; e[7] = swap;

        return this;
    }
}
