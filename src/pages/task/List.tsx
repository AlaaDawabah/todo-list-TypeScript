import React from 'react'
import { useSelector } from 'react-redux'
import { ReduxState } from '../../store/reducers'

const List = () => {
    const taskList = useSelector((state: ReduxState) => state.task.taskList)
    console.log("first", taskList)
    return (
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default List