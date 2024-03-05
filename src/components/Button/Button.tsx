const Button = () => {
  function currentNumber(num: number, str: string): void {
    console.log(num, str);
  }

  return (
    <button onClick={() => currentNumber(15, "Sohibjon")}>Click me</button>
  );
};

export default Button;
