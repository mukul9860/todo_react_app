import InputField from '../inputText/InputField';
import { useState, useEffect } from 'react';
import TaskList from '../taskList/TaskList';
import ListDetails from '../ListDetails/ListDetails';

const TodoList = () => {

    const [inputTextValue, setInputTextValue] = useState("");
    const [todoList, setTodolist] = useState([]);

    // storing tasks in localstorage...

    const saveDataLS = (tasks) => {
        localStorage.setItem("todoList", JSON.stringify(tasks));
    }
    useEffect(() => {
        if (localStorage.getItem("todoList")) {
            setTodolist(JSON.parse(localStorage.getItem("todoList")));
        }
    }, [])
    const inputChange = (event) => {
        const textValue = event.target.value;
        setInputTextValue(textValue);
    }
    const enterClick = (event) => {
        if (event.key === 'Enter') {
            addTask(inputTextValue);
        }
    }
    const addTask = (inputTextValue) => {
        if (inputTextValue.trim()) {
            const list = [...todoList];
            list.push({ todoTask: inputTextValue, isMarkDone: false, isEdit: false, itemEditText: inputTextValue});
            setInputTextValue('');
            setTodolist(list);
            saveDataLS(list);
        }
        else {
            alert("Please Enter the task....");
            setInputTextValue('');
        }
    }
    const deleteTodo = (index) => {
        let delt =  window.confirm("Are you sure!!!...\nYou want to delete...!!!");
        if (delt === true) {
            const list = [...todoList];
            list.splice(index, 1);
            setTodolist(list);
            saveDataLS(list);
        }
    };
    const deleteAllTasks = () => {
        let delt =  window.confirm("Are you sure!!!...\nYou want to delete all the tasks...!!!");
        if (delt === true) {
        const list = [...todoList];
        list.splice(list);
        setTodolist(list);
        saveDataLS(list);
        }
    }
    const completeTodo = (index) => {
        const list = [...todoList];
        list[index].isMarkDone = !list[index].isMarkDone;
        setTodolist(list);
        saveDataLS(list);
    }
    const reArrangeItems = (currentIndex, destinationIndex) => {
        const list = [...todoList];
        const temp = list[currentIndex];
        list[currentIndex] = list[destinationIndex];
        list[destinationIndex] = temp;
        setTodolist(list);
        saveDataLS(list);
    }
    const editTodo = (listIndex) => {
        const list = [...todoList];
        list[listIndex].isEdit = true;
        setTodolist(list);
        saveDataLS(list);        
    }
    const submitEdit = (listIndex) => {
        const list = [...todoList];
        list[listIndex].todoTask = list[listIndex].itemEditText;
        list[listIndex].isEdit = false;
        setTodolist(list);
        saveDataLS(list); 
    }
    const cancelEdit = (listIndex) => {
        const list = [...todoList];
        list[listIndex].itemEditText = list[listIndex].todoTask;
        list[listIndex].isEdit = false;
        setTodolist(list);
        saveDataLS(list);
    }
    const editChange = (listIndex, editValue) => {
        const list = [...todoList];
        list[listIndex].itemEditText = editValue;
        setTodolist(list);
        saveDataLS(list);
    }

    return (
        <div>
            <InputField
                onInputTextChange={inputChange}
                onEnterClick={enterClick}
                value={inputTextValue}
                variant='primary'   
            />

            <TaskList
                todoList={todoList}
                onDeleteTask={deleteTodo}
                onCompleteTodo={completeTodo}
                onRearrangeItems={reArrangeItems}
                onEditTodo={editTodo}
                onSubmitEditHandler={submitEdit}
                onCancelEditHandler={cancelEdit}
                onChangeEdit={editChange}
            />

            <ListDetails
                len={todoList.length}
                onDeleteAllTasks={deleteAllTasks}
               
            />
        </div>
    );
};

export default TodoList;