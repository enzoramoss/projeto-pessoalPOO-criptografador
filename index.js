const Texto = require('./src/class/Texto.js')
const prompt = require("prompt-sync")()

function setup() {
    let menu = "------------ MENU ------------\n"
    menu += "\n1. Criptografar texto\n"
    menu += "2. Sair do programa\n"

    let option = null

    do {
        console.log(menu)
        option = prompt("Escolha uma operação: ")

        switch (option) {
            case "1":
                const newText = new Texto(prompt("Digite o que deseja criptografar: "))
                console.log("\n")
                console.log(newText.criptografar() + "\n")
                break
            case "2":
                console.log("\n")
                console.log("Saindo do programa...")
                break
            default:
                console.log("\n")
                console.log("Operação inválida!")
                break
        }
    } while (option !== "2")
}

setup()