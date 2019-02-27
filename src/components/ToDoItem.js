import React from 'react'

function ToDoItem(props) {
    return(
        <div className="first">
            <input type='checkbox' style={{marginLeft: 0}}/>
            <p>{props.name}</p>
        </div>
    )
}

export default ToDoItem