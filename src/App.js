// import Comment from "./29-01-2023/Comment";
import Blog from "./01-02-2023/Blog";
import NameForm from "./01-02-2023/NameForm";
import NumberList from "./01-02-2023/NumberList";
import Welcome from "./29-01-2023/Welcome";
import Clock from "./30-01-2023/Clock";
import Comment from "./30-01-2023/Comment";
import Form from "./30-01-2023/Form";
import Toggle from './30-01-2023/Toggle';
import LoggingButton from "./31-01-2023/LoggingButton";
import LoginControl from "./31-01-2023/LoginControl";
import PackingList from "./31-01-2023/PackingList";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const numbers = [2,4,5,8,1,9];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


function App() {
  return (
    <>
      <Welcome  name="John" />
      <Welcome  name="Emili" />
      <Welcome  name="Alen" />
      <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock />
      <Form />
      <Toggle />
      <LoggingButton />
      <PackingList />
      <LoginControl />
      <NumberList numbers={numbers}/>
      <Blog posts={posts} />

      <NameForm />
    </>

  );
}

export default App;
