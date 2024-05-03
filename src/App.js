import React from "react";
import ToggleColorMode from "./MUIcomp/darktheme";
import ACCORDION from "./Chakracomp/accordion";
// import CustomTabs from "./Chakracomp/custom_tab";
import Emotion from "./Emotioncom/emotion_css";
import Glamarous from "./Emotioncom/glamorous";
import Darktheme from "./Darktheme/Darktheme";

function App() {
  return (
    <div>
      <Darktheme />
      <ToggleColorMode />
      <ACCORDION />
      {/* <CustomTabs /> */}
      <Emotion />
      <Glamarous />
    </div>
  );
}

export default App;
