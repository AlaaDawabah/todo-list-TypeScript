import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import TaskCard from '../../components/taskCard/TaskCard'
import { ReduxState } from '../../store/reducers'

const List = () => {
    const taskList = useSelector((state: ReduxState) => state.task.taskList)
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className='d-flex justify-content-end my-3'>
                <Button text={"Add task"} handleClick={() => navigate(`/add-task`)} />
            </div>
            <div className='row'>
                {taskList?.length ?
                    taskList.map((elem, i) => <div className='col-md-6' key={i}><TaskCard {...elem} /></div>)
                    : <div className='d-flex justify-content-center'>No TO-DOs yet</div>}
            </div>
        </Fragment>
    )
}

export default List