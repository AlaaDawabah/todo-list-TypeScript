import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import { setTask } from '../../store/task'

const AddTask = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [time, setTime] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <Input id={"title"} name="title" onChange={(e) => { setTitle(e.target.value) }} value={title} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <Input id={"desc"} name="desc" onChange={(e) => { setDesc(e.target.value) }} value={desc} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="time" className="col-sm-2 col-form-label">Time</label>
                <div className="col-sm-10">
                    <Input id={"time"} name="time" onChange={(e) => { setTime(e.target.value) }} value={time} />
                </div>
            </div>
            <Button handleClick={() => {
                dispatch(setTask({
                    title,
                    desc,
                    time
                }))
            }} />
        </>
    )
}

export default AddTask