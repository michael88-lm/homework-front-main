type InputPropsType = {
  currentText: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: (text: string) => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setCurrentText(event.currentTarget.value); // НУЖНО ДОПИСАТЬ
  };

  return (
    <input
      aria-label="#"
      id={"hw04-input"}
      type="text"
      value={props.currentText}
      onChange={onChangeHandler}
    />
  );
};
