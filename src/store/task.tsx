

export type task = {
  title: string
  desc: string
  original_time: string,
  actual_time?: string,
  id?: string
}

export type setTaskActionInterface = {
  type: string,
  payload: task
}
export const setTask = (payload: task): setTaskActionInterface => ({
  type: "SET_TASK",
  payload,
});
export const updateTask = (payload: task): setTaskActionInterface => ({
  type: "UPDATE_TASK",
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
    case "UPDATE_TASK":
      return {
        ...state, taskList: state.taskList.map(elem => {
          if (elem.id == action.payload.id) {
            return action.payload
          } else {
            return elem
          }
        })
      };
    default:
      return state;
  }
};
