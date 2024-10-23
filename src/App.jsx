import { Suspense, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Navigate, useRoutes } from "react-router-dom";
import UnauthorizePage from "./pages/UnauthorizePage";
import ThreeSixFivePage from "./pages/ThreeSixFivePage";
import PrivateRoute from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import IbetPage from "./pages/IbetPage";
import DataPaster from "./components/DataPaster";
import CustomForm from "./components/CustomForm";
import { Toaster } from "sonner";

function MainApp() {
  const routeConfig = [
    { path: "/", element: <Navigate to="three-six-five" /> },
    { path: "/register", element: <AuthPage type="register" /> },
    { path: "/login", element: <AuthPage type="login" /> },
    { path: "/401-unauthorized", element: <UnauthorizePage /> },

    {
      path: "/",
      element: <PrivateRoute roles={["admin", "agent", "superuser"]} />,
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
      element: <PrivateRoute roles={["admin", "agent", "superuser"]} />,
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
          element: <CustomForm mode="Create" />,
        },
        {
          path: "three-six-five/edit",
          element: <CustomForm mode="Edit" />,
        },
        {
          path: "three-six-five/delete",
          element: <CustomForm mode="Delete" />,
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
        <Toaster richColors position="top-center" />
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
