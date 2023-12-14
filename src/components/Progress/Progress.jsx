import { useContext } from "react";
import * as C from "./styled.js";

import Title from "../Title/Title";
import { AppContext } from "../../AppContent";
import imgUrl from "../../assets/img-trophy-min.png";

const Progress = () => {
  const { progressBarValue } = useContext(AppContext);
  return (
    <C.Container>
      <Title iconName={"chart"} text={"Progresso"} />
      <C.Input
        readOnly
        type="range"
        value={progressBarValue} />

      <C.Bar>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </C.Bar>

      {progressBarValue === 100 && (
        <C.Message>
          <img src={imgUrl} alt="Troféu" width="40" height="40" />
          <span>Parabéns! Você completou todas as tarefas de hoje!</span>
        </C.Message>
      )}
    </C.Container>
  );
};

export default Progress;
