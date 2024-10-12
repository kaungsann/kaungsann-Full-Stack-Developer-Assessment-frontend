import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { useRoutes } from "react-router-dom";
import UnauthorizePage from "./pages/UnauthorizePage";
import ThreeSixFivePage from "./pages/ThreeSixFivePage";
import PrivateRoute from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const routeConfig = [
    // { path: "/", element: <Navigate to="threesixfive" /> },
    { path: "/register", element: <AuthPage type="register" /> },
    { path: "/login", element: <AuthPage type="login" /> },

    { path: "/401-unauthorized", element: <UnauthorizePage /> },
    {
      path: "/",
      element: <PrivateRoute roles={["admin", "user"]} />,
      children: [{ path: "threesixfive", element: <ThreeSixFivePage /> }],
    },
    {
      path: "/owner",
      element: <PrivateRoute roles={["admin", "user"]} />,
      children: [{ path: "threesixfive", element: <ThreeSixFivePage /> }],
    },

    { path: "*", element: <NotFoundPage /> },
  ];

  const element = useRoutes(routeConfig);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
