export class Divisas {
    cantidad:string;
    desde:string;
    a:string;
    resultado:number;

    constructor(cantidad?:string, desde?:string, a?:string, resultado?:number){
        this.cantidad=cantidad;
        this.desde=desde;
        this.a=a;
        this.resultado=resultado;
    }
    /*valid: boolean;
    result: string;
    totype: string;
    fromvalue: string;
    fromtype: string; 
    resultfloat: number;

    constructor(valid?:boolean, result?:string, totype?:string, fromvalue?:string, fromtype?:string, resultfloat?:number)
    {
        this.valid = valid;
        this.result = result;
        this.totype = totype;
        this.fromvalue = fromvalue;
        this.fromtype = fromtype;
        this.resultfloat = resultfloat;
    }*/
}
