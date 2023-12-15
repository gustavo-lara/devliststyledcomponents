import { useContext } from "react"
import * as C from "./styled.js";

import { AppContext } from "../../AppContent"
import Title from "../Title/Title";
import TaskItem from "../TaskItem/TaskItem";
const CompletedTasks = () => {
  const { taskList } = useContext(AppContext);
  return (

    <C.Container>
      <Title iconName="completed" text="Tarefas concluídas" />
      <C.TaskList>
        {taskList.map(
          (task) => task.done && <TaskItem key={task.id} task={task} />
        )}
      </C.TaskList>
    </C.Container>

  )
}

export default CompletedTasks