import { useContext, useEffect } from "react";
import FormContext from "../../context";
import { Container } from "../styles";

const Summary = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);

  const onPrev = () => {
    setStepHandler(3);
  };

  const onRestart = () => {
    setStepHandler(1);
    setAnswerHandler("clear");
  };

  useEffect(() => {
    console.log("answers: ", answers);
  }, [answers]);

  return (
    <Container active={step === 4}>
      <p>Summary!</p>
      <p>Congratulations</p>
      <p>
        1. {answers?.stepOne} 2.{answers?.stepTwo} 3. {answers?.stepThree}{" "}
      </p>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onRestart}>Start again</button>
    </Container>
  );
};

export default Summary;
