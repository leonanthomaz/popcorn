import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { AppRoutes } from "./routes/AppRouter";
import { HooksProvider } from "./shared/contexts/HooksContext";

import { Header } from "./components/Header";
import { useContext } from "react";
import { MovieContext } from "./shared/contexts/MovieContext";

export const  App = () => {
  const { setText } = useContext(MovieContext)
  return (
    <div className="App" onClick={()=>setText('')}>
      <GlobalStyle/>
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
