import React from 'react'
import './../../Styles/Welcome.css'

class Welcome extends React.Component {
    render () {
        return (
            <main>
            <h1 className="greet">Welcome To Our Studio!</h1>
            <h3 className="meet">IT'S NICE TA MEET YA </h3>
            <span><br /></span>
            <span><button className="buttz">Tell Me More</button></span>
            </main>
        )
    }
}

export default Welcome