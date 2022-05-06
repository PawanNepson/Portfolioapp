import React from 'react'
import "./header.css"
import { Quote } from './Quote'
export const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Helllo I'm</h5>
                <h1>Pawan Upadhayay (NEPSON)</h1>
                <h5 className='text-light'>Front-End Developer</h5>
                <Quote />
            </div>
        </header>
    )
}
