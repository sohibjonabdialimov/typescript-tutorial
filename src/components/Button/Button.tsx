type ButtonProps = { backgroundColor: string; fontSize: number; bool: boolean };

export default function Button({
  backgroundColor,
  fontSize,
  bool,
}: ButtonProps) {
  return (
    <div>
      <button>{bool && `Click me ${backgroundColor} ${fontSize}`}</button>
    </div>
  );
}
