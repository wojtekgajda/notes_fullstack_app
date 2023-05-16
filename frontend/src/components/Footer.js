import React from 'react'
export const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <footer>
            <p>Copyright {year}</p>
        </footer>
    )
}