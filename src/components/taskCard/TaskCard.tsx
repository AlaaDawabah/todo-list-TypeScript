import { task } from '../../store/task'

const TaskCard = (props: task) => {
    return (
        <div className="card">
            <h5 className="card-header">{props?.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{props?.desc}</h5>
                <p className="card-text">{props?.time}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default TaskCard