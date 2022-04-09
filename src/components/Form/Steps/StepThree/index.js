const StepThree = () => {
  return (
    <div>
      <p>Question 03</p>
      <p>text</p>
      <div>
        <input type="radio" id="react" name="framework" value="React" />
        <label htmlFor="react">React</label>
        <input type="radio" id="Angular" name="framework" value="Angular" />
        <label htmlFor="Angular">Angular</label>
        <input type="radio" id="vue" name="framework" value="Vue" />
        <label htmlFor="vue">Vue</label>
      </div>
      <button>Previous</button>
      <button>Submit</button>
      <p>error</p>
    </div>
  );
};

export default StepThree;
