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
)*
/*******************************/
//you should keep the key on the <ListItem /> element in the array rather than on the <li> element
function ListItem(props) {

    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    const list_Items = numbers.map((number) => 
        <ListItem key = {number.toString()}              
        id = {number.id}
        value = {number} />
    );
    return (
        <ul>
            {list_Items}
        </ul>
    );
}

function Blog(props) {
    const posts = props.posts;
    const sidebar = (
        <ul>
            {posts.map((post) => 
                <li key = {post.id}> {post.title} </li>
            )}
        </ul>
    );

    const content = posts.map((post) => 
        <div key = {post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;