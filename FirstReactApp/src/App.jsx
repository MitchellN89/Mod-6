// Have commented out the app.css in order to use my own styles
// import "./App.css";
import Greeting from "./Components/Greeting";
import Comment from "./Components/Comment";
import BigCats from "./Components/BigCats";
import Emoji from "./Components/Emoji";
import BirthdayTranslator from "./Components/BirthdayTranslator";
import Weather from "./Components/Weather";
import Container from "./Components/Container";
import "./stylesheets/styles.css";
import Calculator from "./Components/Calculator";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function App() {
  return (
    <>
      {/* I've opted to add a some additional JSX below. I've wrapped each part in a "Container". This makes it a little more visually easier to understand each exercise. This also served as good practice for me */}
      <Container tag="Exercise 1: Greeting Component">
        <Greeting name="Mitchell">
          <p>Spledid to meet you!</p>
          {/* the paragraph (child) line here can be commented out to allow for a default within the component */}
        </Greeting>
      </Container>

      <Container tag="Comments (with sub components)">
        <Comment
          author={comment.author}
          date={comment.date}
          text={comment.text}
        ></Comment>
      </Container>

      <Container tag="Exercise 2, 4 & 5: Big Cats">
        <BigCats></BigCats>
      </Container>

      <Container tag="Exercise 3: Mood Emoji">
        <Emoji></Emoji>
      </Container>

      <Container tag="Birthday Translator">
        <BirthdayTranslator></BirthdayTranslator>
      </Container>

      <Container tag="Weather">
        <Weather></Weather>
      </Container>

      <Container tag="Exercise 6: Calculator">
        <Calculator></Calculator>
      </Container>
    </>
  );
}

export default App;
