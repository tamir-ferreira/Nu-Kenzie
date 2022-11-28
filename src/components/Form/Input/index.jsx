export const Input = ({ id, type, placeholder, step, min }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder && "Digite aqui sua descrição"}
        step={step && "0.01"}
        min={min && "0.01"}
        required
      />
    </>
  );
};
