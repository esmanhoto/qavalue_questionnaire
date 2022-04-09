import { useContext, useEffect, useState } from "react";
import FormContext from "../../context";
import {
  Container,
  ErrorMessage,
  QuestionNumber,
  QuestionTitle,
  Button,
} from "../styles";
import { Label, RadioInput, RadioOptions } from "./styles";

const StepThree = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);
  const [checked, setChecked] = useState();
  const [error, setError] = useState("");

  const handleCheck = () => (e) => {
    setChecked(e.currentTarget.value);
  };

  const onPrev = () => {
    setStepHandler(2);
  };

  //   const onSubmit = () => {
  //     setStepHandler(4);
  //     setAnswerHandler("stepThree", checked);
  //   };

  const onSubmit = () => {
    if (checked === null) {
      setError("You must choose an option!");
    } else {
      setStepHandler(4);
      setAnswerHandler("stepThree", checked);
      setError("");
    }
  };

  useEffect(() => {
    if (!answers?.stepThree) {
      setChecked(null);
    }
  }, [answers?.stepThree]);

  return (
    <Container active={step === 3}>
      <QuestionNumber>Question 03</QuestionNumber>
      <QuestionTitle>
        Which framework do you think was used to create this questionnaire?
      </QuestionTitle>
      <RadioOptions>
        <RadioInput
          onChange={handleCheck()}
          type="radio"
          id="react"
          name="framework"
          value="React"
          checked={checked === "React"}
        />
        <Label htmlFor="react">React</Label>
        <RadioInput
          onChange={handleCheck()}
          type="radio"
          id="Angular"
          name="framework"
          value="Angular"
          checked={checked === "Angular"}
        />
        <Label htmlFor="Angular">Angular</Label>
        <RadioInput
          onChange={handleCheck()}
          type="radio"
          id="vue"
          name="framework"
          value="Vue"
          checked={checked === "Vue"}
        />
        <Label htmlFor="vue">Vue</Label>
      </RadioOptions>
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onSubmit}>Submit</Button>
      {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
    </Container>
  );
};

export default StepThree;
