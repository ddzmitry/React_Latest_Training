// Import the React and ReactDOM Libraried
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/comment';
import faker from 'faker';
let today = new Date();
let getTime = () => today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let getDate =  () => today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

let data = [
];

let getuser = () => (
    {  
        author: faker.internet.userName,
        time: getTime(),
        comment: faker.random.words(),
        date: getDate(),
        imgUrl: faker.image.avatar()
    }
);
for (let i = 0; i < 10; i++) {
    data.push(getuser());
}
// Create React Component
const App = () => { 
return (
          <div >
          <div className="ui comments">
          
          {data.map((props_data,i) => {
                return <Comment key={i} {...props_data} />;
          })}
          </div>

          </div>
      );
};



// Take the React Component and show it in the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);