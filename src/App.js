// import Comment from "./29-01-2023/Comment";
import Welcome from "./29-01-2023/Welcome";
import Clock from "./30-01-2023/Clock";
import Comment from "./30-01-2023/Comment";
import Form from "./30-01-2023/Form";
import Toggle from './30-01-2023/Toggle';
import LoggingButton from "./31-01-2023/LoggingButton";


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

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
    </>

  );
}

export default App;
