const Texto = require('./src/class/Texto.js')
const prompt = require("prompt-sync")()

function setup() {
    console.log("------------ MENU ------------")
    console.log("1. Criptografar texto")
    console.log("2. Sair do programa")

    const option = prompt("Escolha uma operação: ")

    switch (option) {
        case "1":
            const newText = new Texto(prompt("Digite o que deseja criptografar: "))
            console.log(newText.criptografar())
            setup()
            break
        case "2":
            console.log("Saindo do programa...")
            break
        default:
            console.log("Operação inválida!")
            setup()
            break
    }
}

setup()