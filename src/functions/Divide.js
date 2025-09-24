function Divide() {
    return {
        setDivision(undivided) {
            if (typeof (undivided) === "string") {
                const cripString = undivided.split('')
                let finalString = ""

                const crippedString = cripString.reduce((acc, cur, index, array) => {

                    if ((index + 1) % 3 === 0 && index !== array.length - 1) {
                        cur += "-"
                    }

                    finalString += cur

                    return finalString
                }, "")

                return crippedString
            }
        }
    }
}

module.exports = Divide()