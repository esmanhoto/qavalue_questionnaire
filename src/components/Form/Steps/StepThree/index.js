import { useContext, useEffect, useState } from "react";
import FormContext from "../../context";
import { Container } from "../styles";

const StepThree = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);
  const [checked, setChecked] = useState();

  const handleCheck = () => (e) => {
    setChecked(e.currentTarget.value);
  };

  const onPrev = () => {
    setStepHandler(2);
  };

  const onSubmit = () => {
    setStepHandler(4);
    setAnswerHandler("stepThree", checked);
  };

  useEffect(() => {
    if (!answers?.stepThree) {
      setChecked(null);
    }
  }, [answers?.stepThree]);

  return (
    <Container active={step === 3}>
      <p>Question 03</p>
      <p>text</p>
      <div>
        <input
          onChange={handleCheck()}
          type="radio"
          id="react"
          name="framework"
          value="React"
          checked={checked === "React"}
        />
        <label htmlFor="react">React</label>
        <input
          onChange={handleCheck()}
          type="radio"
          id="Angular"
          name="framework"
          value="Angular"
          checked={checked === "Angular"}
        />
        <label htmlFor="Angular">Angular</label>
        <input
          onChange={handleCheck()}
          type="radio"
          id="vue"
          name="framework"
          value="Vue"
          checked={checked === "Vue"}
        />
        <label htmlFor="vue">Vue</label>
      </div>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onSubmit}>Submit</button>
      <p>error</p>
    </Container>
  );
};

export default StepThree;
