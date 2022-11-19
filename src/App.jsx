import { useState } from "react";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";

export const App = () => {
  const [initialPage, setInitialPage] = useState(true);

  return (
    <div className="App">
      {initialPage ? (
        <>
          <Home setInitialPage={setInitialPage} />
        </>
      ) : (
        <>
          <Dashboard setInitialPage={setInitialPage} />
        </>
      )}
    </div>
  );
};
