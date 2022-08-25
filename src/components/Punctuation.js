import React from 'react'

export default function Punctuation(string) {

    const newString = string.replace(/[^\w\s]|_/g, " ")
    console.log(newString)

    return (
        <div>
            <p>{newString}</p>
        </div>
    )
}



