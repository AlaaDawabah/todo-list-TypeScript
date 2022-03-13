

export type task = {
  title: string
  desc: string
  time: string
}

export type setTaskActionInterface = {
  type: string,
  payload: task
}
export const setTask = (payload: task): setTaskActionInterface => ({
  type: "SET_TASK",
  payload,
});
export type State = {
  taskList: Array<task>
}

export default (state: State = {
  taskList: []
}, action: setTaskActionInterface): State => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, taskList: [...state.taskList, { ...action.payload }] };

    default:
      return state;
  }
};
