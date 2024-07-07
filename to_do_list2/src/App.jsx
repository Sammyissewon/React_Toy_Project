import "./App.css";
import Header from "./Components/Header";
import Editor from "./Components/Editor";
import List from "./Components/List";

// 1. UI 짜기
// 2. 각 컴포넌트의 기본 CSS 설정
// 3. Header 구현하기

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
