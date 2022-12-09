import React from "react"

const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ',', '.', '?', ' ']

function decode(message, alp) {

    message = message.split(" ")

    res = ''

    for (let i = 0; i < message.length - 1; i += 2) {

        let index = parseInt(message[i] / message[i + 1])

        res += alp[index - 1]
    }

    return res
}

const Decode = () => {
    return (
        <h1>Decode</h1>
    )
}

export default Decode