// import Comment from "./29-01-2023/Comment";
import Welcome from "./29-01-2023/Welcome";
import Clock from "./30-01-2023/Clock";
import Comment from "./30-01-2023/Comment";
import Form from "./30-01-2023/Form";

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
    </>

  );
}

export default App;
