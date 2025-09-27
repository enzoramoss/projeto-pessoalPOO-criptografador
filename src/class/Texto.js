const Criptografador = require("./Criptografador")
const Divide = require("../functions/Divide")

class Texto extends Criptografador {
    #textoCriptografado = ""

    constructor(crip) {
        super(crip)
    }

    criptografar() {

        if (this.crip === "" || typeof(this.crip) === "undefined") return "\x1b[31mAlerta:\x1b[0m Não pode ser criptografado uma string vazia."
        if (!/[a-zA-Z]/.test(this.crip)) return "\x1b[31mErro:\x1b[0m Números não podem ser criptografados."

        let stack = false

        for (let i = 0; i < this.crip.length; i++) {
            if (!stack) {
                stack = true
            } else {
                stack = false
            }

            const altBidIndex = stack === true ? 0 : 1

            const selectedArray = Criptografador.bidCriptList[altBidIndex]

            const newRandomNumber = parseInt(Math.random() * (selectedArray.length))

            this.#textoCriptografado += `${selectedArray[newRandomNumber]}`
        }

        console.log("Criptografia realizada com \x1b[32msucesso\x1b[0m!\n")

        return `Criptografia: \x1b[33m${Divide.setDivision(this.#textoCriptografado)}\x1b[0m\n`
    }
}

module.exports = Texto