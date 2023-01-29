import Comment from "./29-01-2023/Comment";
import Welcome from "./29-01-2023/Welcome";


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
    </>

  );
}

export default App;
