import React from 'react';
import { Link } from "react-router-dom";
import './Pop.css';

function Popular() {
    return (
        <div>
            <div className='popular'>
                <div className='pop'>
                    <div id='up'>Company</div>
                    <Link to="/register" id='down'>1000</Link>
                </div>
                <div className='pop'>
                    <div id='up'>You</div>
                    <Link to="/register" id='down'>1000</Link>
                </div>
                <div className='pop'>
                    <div id='up'>Will</div>
                    <Link to="/register" id='down'>1000</Link>
                </div>
                <div className='pop'>
                    <div id='up'>Find</div>
                    <Link to="/register" id='down'>1000</Link>
                </div>
            </div>
        </div>
    )
}

export default Popular
