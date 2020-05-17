import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
     <li key = {number.toString()}> {number} = {2 * number} </li>);
    return (
        <ul>{listItems}</ul>
    );
}
/*ReactDOM.render(
    {listItems},
    document.getElementById('root');
)*/

export default List;