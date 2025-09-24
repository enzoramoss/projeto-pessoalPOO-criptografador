class Criptografador {
    static crips = []
    static inputs = []
    static bidCriptList = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    ]

    constructor(crip) {
        this.crip = crip
    }
}

module.exports = Criptografador