import React, { useContext } from 'react'
import { Auth } from "../state/AuthContext"

export default function Display() {

    const theme = useContext(Auth)

    return (
        <h1>Display - {theme.value}</h1>
    )
}