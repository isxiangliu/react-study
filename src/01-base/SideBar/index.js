import React from 'react'
import propTypes from 'prop-types'
console.log(propTypes);

export default function SideBar(props) {
    console.log(props);
    let { bg } = props
    var obj1 = {
        left: 0
    }
    var obj2 = {
        right: 0
    }
    var obj = {
        background: bg,
        width: '200px',
        position:'fixed'
    }
    
    var style= bg==="yellow"?{...obj,...obj2}:''
    return (
        <div style={style}>
            <ul>
                <li className=''>111</li>
                <li>222</li>
                <li>333</li>
            </ul>
        </div>
    )
}

