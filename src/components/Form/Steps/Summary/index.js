import { useContext, useEffect } from "react";
import FormContext from "../../context";
import { Button, Container, QuestionNumber } from "../styles";
import { SummaryText } from "./styles";

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
      <QuestionNumber>Summary</QuestionNumber>
      <SummaryText>
        <p>
          Congratulations <span>{answers?.stepOne}!</span>
        </p>
        <p>
          From this quick questionnaire learned you are able to use{" "}
          <span name="stepOneAnswer">{answers?.stepTwo}</span>. Furthermore, you
          guessed{" "}
          <span>{answers?.stepThree === "React" ? "right" : "wrong"}</span>, the
          framework used in this project was <span>React</span>.
        </p>
      </SummaryText>
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onRestart}>Start again</Button>
    </Container>
  );
};

export default Summary;
