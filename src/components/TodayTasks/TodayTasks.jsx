import { useContext } from "react";
import * as C from "./styled.js";

import Title from "../Title/Title";
import styles from "./TodayTasks.module.css";
import { AppContext } from "../../AppContent";
import TaskItem from "../TaskItem/TaskItem";

const TodayTasks = () => {
  const { taskList, progressBarValue } = useContext(AppContext);
  return (

    <C.Container style={{
      marginTop: `${progressBarValue === 100 ? "-107px" : "0"}`
    }}>
      <Title iconName={"list"} text={"Tarefas de hoje"} />
      {progressBarValue === 100 || taskList.length === 0 ? (
        <C.TodayTasksMessage>Você não tem tarefas disponíveis</C.TodayTasksMessage>
      ) :
        (
          <C.TaskList>
            {taskList.map(
              (task) => !task.done && <TaskItem key={task.id} task={task} />
            )}
          </C.TaskList>
        )}
    </C.Container>
  );
};

export default TodayTasks;
