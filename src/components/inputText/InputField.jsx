const InputField = (props) => {
    let inp_field;
    if (props.variant === 'primary')
        inp_field =
        <input type="text" 
        value={props.value}
        onChange={props.onInputTextChange}
        onKeyPress={props.onEnterClick}
        className="mt-3 mb-3 form-control"
        placeholder="Enter the todo-task to be added....."
        />
    else
        inp_field=
        <input type="text" 
        value={props.value}
        onChange={props.onInputTextChange}
        onKeyPress={props.onEnterClick}
        className="form-control w-25"
        placeholder="Enter the todo-task to be added....."
        />
    return (
        <>
        {inp_field}
        </>
    );
};

export default InputField;
