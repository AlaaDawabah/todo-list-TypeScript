import { task } from '../../store/task'
import Timer from '../Timer/Timer'
const TaskCard = (props: task) => {
    return (
        <div className="card pb-3">
            <h5 className="card-header"><span>Task Name: </span>{props?.title}</h5>
            <div className="card-body">
                <h5 className="card-title"><span>Task Description: </span>{props?.desc}</h5>
                <div>
                    <span>Original time:</span>
                    <span>{props?.original_time}</span>
                </div>
                <div>
                    <span>Actual time:</span>
                    <span>{props?.actual_time}</span>
                </div>
            </div>
            <Timer {...props} />
        </div>
    )
}

export default TaskCard