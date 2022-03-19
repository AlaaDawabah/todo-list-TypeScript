import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";
import Button from "../../Button/Button";
import { updateTask } from "../../store/task";
import { task } from "../../store/task";

function MyStopwatch(props: task) {
  const dispatch = useDispatch();
  const { seconds, minutes, hours, days, start, pause } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    dispatch(
      updateTask({
        title: props.title,
        desc: props.desc,
        original_time: props.original_time,
        actual_time: `${days}:` + `${hours}:` + `${minutes}:` + `${seconds}:`,
        id: props?.id
      })
    );
  }, [seconds]);
  return (
    <div className="d-flex justify-content-center">
      <Button text={"Start"} handleClick={start} className="mx-2" />
      <Button text="Finish" handleClick={pause} className="mx-2" />
    </div>
  );
}

export default function Timer(props: task) {
  return (
    <div>
      <MyStopwatch {...props} />
    </div>
  );
}
