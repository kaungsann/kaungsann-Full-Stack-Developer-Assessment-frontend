import { Suspense, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { useRoutes } from "react-router-dom";
import UnauthorizePage from "./pages/UnauthorizePage";
import ThreeSixFivePage from "./pages/ThreeSixFivePage";
import PrivateRoute from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import IbetPage from "./pages/IbetPage";
import DataPaster from "./components/DataPaster";
import ThreeSixFiveForm from "./components/ThreeSixFiveForm";
import CustomForm from "./components/CustomForm";

function MainApp() {
  const routeConfig = [
    { path: "/register", element: <AuthPage type="register" /> },
    { path: "/login", element: <AuthPage type="login" /> },
    { path: "/401-unauthorized", element: <UnauthorizePage /> },

    {
      path: "/",
      element: <PrivateRoute roles={["admin", "user"]} />,
      children: [
        {
          path: "three-six-five/:id",
          element: (
            <CustomForm
              mode="View"
              name="three-six-five"
              route="threesixfives"
            />
          ),
        },
        {
          path: "ibet/:id",
          element: <CustomForm mode="View" name="ibet" route="ibets" />,
        },
      ],
    },

    {
      path: "/",
      element: <PrivateRoute roles={["admin", "user"]} />,
      children: [
        { path: "three-six-five", element: <ThreeSixFivePage /> },
        { path: "ibet", element: <IbetPage /> },
        {
          path: "three-six-five/data-paste",
          element: <DataPaster type="Three Six Five" route="threesixfives" />,
        },
        {
          path: "ibet/data-paste",
          element: <DataPaster type="ibet" route="ibets" />,
        },
        {
          path: "three-six-five/create",
          element: <ThreeSixFiveForm mode="Create" />,
        },
        {
          path: "three-six-five/edit",
          element: <ThreeSixFiveForm mode="Edit" />,
        },
        {
          path: "three-six-five/delete",
          element: <ThreeSixFiveForm mode="Delete" />,
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ];

  const element = useRoutes(routeConfig);

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    // Apply custom background colors based on theme
    if (theme === "light") {
      document.documentElement.style.backgroundColor = "#f5f5f5";
    } else {
      document.documentElement.style.backgroundColor = "#020817";
    }
  }, [theme]);

  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
