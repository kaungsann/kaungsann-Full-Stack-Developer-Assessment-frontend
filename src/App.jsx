import { Suspense, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Navigate, useRoutes } from "react-router-dom";
import UnauthorizePage from "./pages/UnauthorizePage";
import PrivateRoute from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "sonner";
import ChannelPage from "./pages/ChannelPage";
import MessagePage from "./pages/MessagePage";
import NotiPage from "./pages/NotiPage";

function MainApp() {
  const routeConfig = [
    { path: "/", element: <Navigate to="channels" /> },
    { path: "/register", element: <AuthPage type="register" /> },
    { path: "/login", element: <AuthPage type="login" /> },
    { path: "/401-unauthorized", element: <UnauthorizePage /> },

    {
      path: "/",
      element: <PrivateRoute roles={["admin", "guest", "trader"]} />,
      children: [
        {
          path: "channels",
          element: <ChannelPage />,
        },
        {
          path: "/messages",
          element: <MessagePage />,
        },
        {
          path: "/notifications",
          element: <NotiPage />,
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
