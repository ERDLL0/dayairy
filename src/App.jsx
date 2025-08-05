import React from "react";
import EmotionDiary from "./components/EmotionDiary";

const App = () => {
  return (
    <div className="min-h-screen bg-softBlue p-4 font-handwriting">
      <header className="text-center text-3xl font-bold mb-6">Dayairy - Günlük Defteri</header>
      <EmotionDiary />
    </div>
  );
};

export default App;
