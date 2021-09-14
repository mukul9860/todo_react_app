import InputField from '../inputText/InputField';
import styles from './tasklist.module.css';

const TaskList = (props) => {
  return (
    props.todoList.map((item, index) => (
      <li key={index} className="list-group-item list-group-item-secondary">
        <span className={item.isMarkDone ? styles.done : ""}>

          {/* Down Button */}
          {index !== props.todoList.length - 1 && (
            <i className="float-right fa fa-arrow-down ml-3 mr-3"
              style={{ fontSize: "30px", color: "chocolate", cursor: "pointer" }}
              onClick={() => { props.onRearrangeItems(index, index + 1) }}>
            </i>
          )}

          {/* Up button */}
          {index !== 0 && (
            <i className="float-right fa fa-arrow-up ml-3 mr-3"
              style={{ fontSize: "30px", color: "darkgreen", cursor: "pointer" }}
              onClick={() => { props.onRearrangeItems(index, index - 1) }}>
            </i>
          )}


          {/* Edit Section */}
            {item.isEdit && (
            <div className="row">
              <InputField
                value={item.itemEditText}
                onInputTextChange={(event) => {
                  const editedValue = event.target.value;
                  props.onChangeEdit(index, editedValue)
                }
                }
              />
              <button 
                onClick={() => props.onSubmitEditHandler(index)}
                className="btn btn-success ml-3"
              >
                Save</button>
              <button
                onClick={() => props.onCancelEditHandler(index)}
                className="btn btn-danger ml-3"
              >
                Cancel</button>
            </div>
          )}
          {!item.isEdit && (
            <>
              <input type="checkbox" className={styles.checkbox} onClick={() => props.onCompleteTodo(index)} />
              <b className="ml-4">{item.todoTask}</b>
              {!item.isMarkDone && (
                <i className="float-right fa fa-edit mr-3" style={{ fontSize: "40px", color: "darkviolet", cursor: "pointer" }}
                  onClick={() => props.onEditTodo(index)}
                >
                </i>
              )}
            </>
          )}

          {/* Delete Button */}
          {item.isMarkDone && (
            <i className="fa fa-trash float-right"
              style={{ fontSize: "40px", cursor: "pointer", color: "red" }}
              onClick={() => props.onDeleteTask(index)}></i>
          )}

        </span>

      </li>
    )
    )
  );
}

export default TaskList;