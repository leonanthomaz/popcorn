import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { AppRoutes } from "./routes/AppRouter";
import { HooksProvider } from "./shared/contexts/HooksContext";

import { Header } from "./components/Header";

export const  App = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
