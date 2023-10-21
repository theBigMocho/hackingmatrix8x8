class Matrix {
    constructor(ix) {
        this.ix = ix;
        this.colArray = [];
        for (let i = 0; i < 8; i++) {
            let m = new MatrixCol(i);
            this.colArray.push(m);
        }
    }
    generaVista() {
        const ix = this.ix;
        let html = '';
        this.colArray.forEach((m) => html += m.generaVista());
        return `<div Class="MATRIX">${html}</div>`;
    }
    refrescarEstado(arr) {
        this.colArray.forEach((mc, ix) => mc.refrescarEstado(arr[ix]));
    }
}

class MatrixCol {
    constructor(ix) {
        this.ix = ix;
    }
    generaVista() {
        const ix = this.ix;
        let html = '';
        for (let i = 0; i < 8; i++) {
            html += `<div id="${i}-${ix}" class="OFF"></div>`;
        }
        return `<div>${html}</div>`;
    }
    refrescarEstado(arr) {
        //recibe arreglo binario de estados: 0,1
        arr.forEach((e, ix) => {
            const light = e == '1' ? 'ON' : 'OFF'
            $(`#${ix}-${this.ix}`).removeClass('ON');
            $(`#${ix}-${this.ix}`).removeClass('OFF');
            $(`#${ix}-${this.ix}`).addClass(light);
        });
    }

}
function hex2bin(hex) {
    return [...(parseInt(hex, 16).toString(2)).padStart(8, '0')].reverse();
}

m = new Matrix(1);
$('body').append(m.generaVista());
const letra = [
    hex2bin('00')
    , hex2bin('00')
    , hex2bin('5f')
    , hex2bin('00')
    , hex2bin('00')
    , hex2bin('00')
    , hex2bin('00')
    , hex2bin('00')
];

m.refrescarEstado(letra)
