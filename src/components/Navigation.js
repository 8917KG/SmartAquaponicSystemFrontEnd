import { useState, useEffect, useInsertionEffect } from "react"

export function Navigation(props) {

    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        if (navItems.length == 0) {
            setNavItems(props.items)
        }
    }, [props.items])

    if (navItems.length > 0) {

        const NavLinks = navItems.map((item) => {
            return (
                <a href={item.path} className="nav-link">{item.name}</a>
            )
        })
        return (
            <nav className="navbar-nav me-auto mb-2 mb-lg-0">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Contact</a>
                <a href="#" className="nav-link">About</a>
            </nav>
        )
    }
    else {
        return null
    }
}