import React from "react"

const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ',', '.', '?', ' ']

function encode(message, alp) {

    message = message.toLowerCase()

    let res = ""

    for (let i = 0; i < message.length; i++) {

        let key = Math.floor(Math.random() * 10) + 1

        for (let j = 0; j < alp.length; j++) {

            if (message[i] === alp[j]) {

                res += ((j + 1) * key).toString() + " "

            }
        }
        res += key.toString() + " "
    }

    return res
}

const Encode = () => {
    return (
        <h1>Encode</h1>
    )
}

export default Encode