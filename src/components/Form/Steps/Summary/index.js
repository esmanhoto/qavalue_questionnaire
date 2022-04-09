import { useContext, useEffect } from "react";
import FormContext from "../../context";
import { Button, Container, QuestionNumber, QuestionTitle } from "../styles";

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
      <QuestionNumber>Summary!</QuestionNumber>
      <QuestionTitle>Congratulations</QuestionTitle>
      <p>
        1. {answers?.stepOne} 2.{answers?.stepTwo} 3. {answers?.stepThree}{" "}
      </p>
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onRestart}>Start again</Button>
    </Container>
  );
};

export default Summary;
