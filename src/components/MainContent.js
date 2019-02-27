import React from 'react'
import ToDoItem from './ToDoItem'

function MainContent() {
    const styles = {
        color: "#282c34",
        fontSize: "14px"
    }
    return (

        <div className='main' style={styles}>
            <div className='todo-list'>
                <ToDoItem name="veggies"/>
                <ToDoItem name="paper"/>
                <ToDoItem name="meat"/>
                <ToDoItem name="bread"/>
            </div>
        </div>
    )
}

export default MainContent