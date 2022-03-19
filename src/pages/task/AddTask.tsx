import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import { setTask, task, updateTask } from '../../store/task'

const AddTask = () => {
    const navigate = useNavigate()
    const [taskParams, setTaskParams] = useState<task>({
        id: '',
        title: '',
        desc: '',
        original_time: '',
        actual_time: ''
    })
    const dispatch = useDispatch()
    return (
        <div className="w-75 m-auto">
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <Input id={"title"} name="title" onChange={(e) => { setTaskParams({ ...taskParams, title: e.target.value }) }} value={taskParams.title} placeholder={"Enter task title"} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <Input id={"desc"} name="desc" onChange={(e) => { setTaskParams({ ...taskParams, desc: e.target.value }) }} value={taskParams.desc} placeholder={"Enter task description"} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="time" className="col-sm-2 col-form-label">Time</label>
                <div className="col-sm-10">
                    <Input id={"time"} name="time" onChange={(e) => { setTaskParams({ ...taskParams, original_time: e.target.value }) }} value={taskParams.original_time} placeholder={"Enter task estimated time ex: 10min"} />
                </div>
            </div>
            <Button text={"Save"} handleClick={() => {
                dispatch(setTask({
                    title: taskParams.title,
                    desc: taskParams.desc,
                    original_time: taskParams.original_time,
                    actual_time: "0",
                    id: JSON.stringify(Math.random())
                }))
                navigate(`/list`)
            }} />
        </div>
    )
}

export default AddTask