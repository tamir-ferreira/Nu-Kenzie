export const Input = ({ id, type, placeholder, step }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder ? "Digite aqui sua descrição" : ""}
        step={step ? "0.01" : ""}
        required
      />
    </>
  );
};
