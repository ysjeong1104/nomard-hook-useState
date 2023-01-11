import { useState } from "react";
//import { useInput } from "./useInput";
import { useTabs } from "./useTabs";

const content = [
  {
    tab: "section1",
    content: "I'm content 1"
  },
  {
    tab: "section2",
    content: "I'm content 2"
  }
];

const App = () => {
  const maxLen = (val) => {
    return val.length < 10;
  };

  const { currentItem, changeItem } = useTabs(0, content);
  //const name = useInput("Mr. ", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => {
        return (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        );
      })}
      <div>{currentItem.content}</div>
      {/*<input placeholder="Name" {...name} /> */}
    </div>
  );
};

export default App;
