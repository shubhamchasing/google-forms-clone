import AddDate from "./AddDate";
import AddText from "./AddText";
import AddRadio from "./AddRadio";
import AddSelect from "./AddSelect";

const SelectedQuestion = ({ type, option, handleOptions, field, number }) => {
  if (type === "select" || type === "radio") {
    return (
      <AddSelect
        option={option}
        handleOptions={handleOptions}
        field={field}
        number={number}
      />
    );
  } else if (type === "radio") {
    return <AddRadio />;
  } else if (type === "date") {
    return <AddDate />;
  } else {
    return <AddText />;
  }
};

export default SelectedQuestion;
