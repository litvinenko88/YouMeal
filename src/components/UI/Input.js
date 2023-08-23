function Input(props) {
  return (
    <input
      className={props.className}
      placeholder={props.plac}
      type={props.type}
      id={props.id}
      checked={props.checked}
      name={props.name}
    />
  );
}

export default Input;
