
const ListDetails = (props) => {
    return (
        <div>
            <button className="btn btn-dark w-100" style={{ cursor: "no-drop" }}>Total Tasks : {props.len}</button>
            <button className="fa fa-trash btn btn-danger btn-lg float-right" onClick={props.onDeleteAllTasks}> Delete All Tasks</button>

        </div>
    );
}
export default ListDetails;