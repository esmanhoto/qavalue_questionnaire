import { FormContextProvider } from "./context";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import Summary from "./Steps/Summary";
import { Container } from "./styles";
import logo from "../../assets/qavalue_logo.png";

const Form = () => {
  return (
    <FormContextProvider>
      <Container>
        <img src={logo} type="img/png" alt="QAValue's logo" />
        <StepOne />
        <StepTwo />
        <StepThree />
        <Summary />
      </Container>
    </FormContextProvider>
  );
};

export default Form;
