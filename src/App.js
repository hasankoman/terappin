import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeTest from "./components/WelcomeTest";
import leftBottomCorner from "./assets/left-bottom-corner.png";
import rightTopCorner from "./assets/right-top-corner.png";
import TestHeader from "./components/Header";
import Test from "./components/Test";
import CompletedTest from "./components/CompletedTest";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [content, setContent] = useState();
  const question = useSelector((state) => state.question);

  useEffect(() => {
    if (question.welcome) {
      setContent(<WelcomeTest />);
    } else if (question.test) {
      setContent(<Test />);
    } else if (question.completed) {
      setContent(<CompletedTest />);
    }
  }, [question.welcome, question.test, question.completed]);

  return (
    <div className="App">
      <TestHeader />
      <img
        src={leftBottomCorner}
        alt=""
        className="background-image-left-bottom"
      />
      <img src={rightTopCorner} alt="" className="background-image-right-top" />
      <div className="background">
        <div className="test-content">{content}</div>
      </div>
    </div>
  );
}
