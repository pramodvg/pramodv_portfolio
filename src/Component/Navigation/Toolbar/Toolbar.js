import React from 'react'
import ToolbarItem from './ToolbarItem';

export default function Toolbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='/'>Pramod Vaghasia</a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#mynavigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            {/* <div className='collapse navbar-collapse' id='mynavigation'>
                <ul className='navbar-nav ml-auto'>
                    <ToolbarItem/>
                </ul >

            </div > */}
        </nav >
    )
}
