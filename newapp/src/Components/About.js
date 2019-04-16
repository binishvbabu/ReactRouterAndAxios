import React from 'react'
import Rainbow from '../Components/hoc/rainbow'
const About = () => {
    return(
        <div className='container'>
            <h4 className='center'>About</h4>
            <p>this is the about page</p>
        </div>
    )
}

export default Rainbow(About)