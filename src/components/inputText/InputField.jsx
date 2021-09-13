const InputField = (props) => {
    return (
        <input type="text" 
        value={props.value}
        onChange={props.onInputTextChange}
        onKeyPress={props.onEnterClick}
        className="mt-3 mb-3 form-control"
        placeholder="Enter the todo-task to be added....."
        />
    );
};

export default InputField;
