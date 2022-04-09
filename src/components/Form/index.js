import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import Summary from "./Steps/Summary";

const Form = () => {
  return (
    <div>
      <StepOne />
      <StepTwo />
      <StepThree />
      <Summary />
    </div>
  );
};

export default Form;
