import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
    return date.toLocaleDateString();
  }
  function Comment(props){
    return(
        <div className = 'Comment'>
          <div className = 'UserInfo'>
              <img 
                  className = "Avatar"
                  src = {props.author.avatarUrl}
                  alt = {props.author.name}
              />
              <div className = 'UserInfo-name'>
                  {props.author.name}
              </div>
          </div>
          <div className = 'Comment-text'>
              {props.text}
          </div>
          <div className = 'Comment-date'>
              {formatDate(props.date)} 
          </div>
        </div>
    );
  }
  
  const comment = {
    text : 'I hope you enjoy learning React!',
    date : new Date(),
    author : {
        name : 'Hello Kitty',
        avatarUrl : 'https://placekitten.com/g/64/64',
    },
  };
  
  ReactDOM.render(
    <Comment 
      date = {comment.date}
      text = {comment.text}
      author = {comment.author}
    />, 
    document.getElementById('component')
  );

  export default Comment;