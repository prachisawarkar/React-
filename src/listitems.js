import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
     <li key = {number.toString()}> 
        {number} = {2 * number +' id =>'+ number.toString()} 
    </li>);
    //keys are required to uniquely identify each element
    //for key use a string
    
    // we can even pass key as id from your data
    const todos = ['DS','React','Reactjs','ReactNative'];
    const todoList = todos.map((todo) => 
        <li key = {todo.id}>
            {todo.id} = {todo}
        </li>
    );
    
    //if we don't have stable id's, then use item index as a key
    /*do not use indexes as key if the order of items change then it
    have the negative impact on the component state. */

    //if we do not assign key explicitly then indexes will be assigned as keys
    const work_done = ['React','Reactjs'];
    const doneList = work_done.map((done, index) => 
        <li key = {index}>
            {index} = {done}
        </li>
    );
    return (
        <ul>{listItems}
            {todoList}
            {doneList}
        </ul>
    );
}
/*ReactDOM.render(
    {listItems},
    document.getElementById('root');
)*/

export default List;