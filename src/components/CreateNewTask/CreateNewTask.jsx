import { useContext, useState } from "react";
import * as C from "./styled.js";

import Title from "../Title/Title";
import addIcon from "../../assets/icon-add.svg";
import { AppContext } from "../../AppContent";

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { handleAddTask } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length) {
      handleAddTask(inputValue);
      setInputValue("");
    } else setError(true);

  };

  const handleChange = (e) => {
    if (error) setError(false)
    setInputValue(e.target.value);
  };

  return (

    <C.Container>
      <Title iconName={"pencil"} text={"Criar nova tarefa"} />
      <C.InputContainer onSubmit={handleSubmit}>
      <C.InputText
        type="text"
        autoFocus
        placeholder="Nome da tarefa"
        value={inputValue}
        onChange={handleChange}
      />
      <C.AddButton>
      <img src={addIcon} alt="Adicionar tarefa" />
      </C.AddButton>
      </C.InputContainer>
    </C.Container>

    // <div className={styles.container}>
    //   <Title iconName={"pencil"} text={"Criar nova tarefa"} />
    //   <form onSubmit={handleSubmit} className={styles.inputContainer}>
    //     <input
    //       className={styles.inputText}
    //       type="text"
    //       autoFocus
    //       placeholder="Nome da tarefa"
    //       value={inputValue}
    //       onChange={handleChange}
    //     />
    //     <button className={styles.addButton} type="submit">
    //       <img src={addIcon} alt="Adicionar tarefa" />
    //     </button>
    //   </form>
    // </div>
  );
};

export default CreateNewTask;
