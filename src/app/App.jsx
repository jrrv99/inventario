import AuthProvider from "./state/context/AuthContext";
import { AppRouter } from "./routes";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
