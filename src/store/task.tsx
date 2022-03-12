
export interface setTaskInterface {
  type: string,
  payload: object
}
export const setTask = (payload: object): setTaskInterface => ({
  type: "SET_TASK",
  payload,
});
export interface TaskInitialValues {
  taskList: Array<object>
}

export default (state: TaskInitialValues = {
  taskList: []
}, action: setTaskInterface): TaskInitialValues => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, taskList: [...state.taskList, { ...action.payload }] };

    default:
      return state;
  }
};
