import React from 'react';
import { useState } from 'react'
import '../index.css'


function Input() {
    const [input, setInput] = useState('')

    return (
        <div className="input__card">
            <input name="react-fact-input" className='input___card-input' type="text" defaultValue={'Add your favorite React fact!'}/>
            <button onClick={() => setInput((input))}>+</button>
        </div>
    )
}

export default Input;