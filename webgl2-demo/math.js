export class Mat3 {
    constructor() {
        this.elements = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
    }

    set(
        m11, m12, m13,
        m21, m22, m23,
        m31, m32, m33
    ) {
        const e = this.elements;

        e[0] = m11; e[1] = m12; e[2] = m13;
        e[3] = m21; e[4] = m22; e[5] = m23;
        e[6] = m31; e[7] = m32; e[8] = m33;

        return this;
    }

    identity() {
        this.set(
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        );

        return this;
    }

    copy(other) {
		const a = this.elements;
		const b = other.elements;

		a[0] = b[0]; a[1] = b[1]; a[2] = b[2];
		a[3] = b[3]; a[4] = b[4]; a[5] = b[5];
		a[6] = b[6]; a[7] = b[7]; a[8] = b[8];

		return this;
	}

    multiply(other) {
        const a = this.elements;
        const b = other.elements;

        const temp = new Mat3();

        temp.set(
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
        const m = new Mat3();

        return m.set(
            1, 0, 0,
            0, 1, 0,
            x, y, 1
        );
    }

    static makeRotation(rads) {
        const cos = Math.cos(rads);
        const sin = Math.sin(rads);

        const m = new Mat3();

        return m.set(
            cos, -sin, 0,
            sin,  cos, 0,
              0,    0, 1
        );
    }

    static makeScale(x, y) {
        const m = new Mat3();

        return m.set(
            x, 0, 0,
            0, y, 0,
            0, 0, 1
        );
    }
}