import { useState } from "react";
import HomePage from "./HomePage";
import PreLoader from "./PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3500);
  return <>{loading ? <PreLoader /> : <HomePage />}</>;
};

export default App;

// 320
// 480
// 768
// 1024
// 1200
// 1600 or 1400
