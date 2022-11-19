import "./style.css";

export const Button = ({ type, filterType, setFilterType, children }) => {
  return (
    <button
      className={`button-small ${filterType === type ? "button-selected" : ""}`}
      onClick={() => setFilterType(type)}
    >
      {children}
    </button>
  );
};
