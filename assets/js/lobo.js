import { animal } from "./animal.js";

export class leon extends animal{
    constructor(nombre, edad, img, comentarios, sonido)
        super(nombre, edad, img, comentarios, sonido, 'aullar')
    }

    aullar () {
        // this.sonido = this.sonido
    }