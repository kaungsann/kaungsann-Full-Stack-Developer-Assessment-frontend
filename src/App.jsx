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
import TradingPage from "./pages/TradingPage";
import ChannelForm from "./components/ChannelForm";
import UserPage from "./pages/userPage";
import UserForm from "./components/UserForm";
import ForexForm from "./components/ForexForm";

function MainApp() {
  const routeConfig = [
    { path: "/", element: <Navigate to="channels/list" /> },
    { path: "/register", element: <AuthPage type="register" /> },
    { path: "/login", element: <AuthPage type="login" /> },
    { path: "/401-unauthorized", element: <UnauthorizePage /> },

    {
      path: "/",
      element: <PrivateRoute roles={["admin", "guest", "trader"]} />,
      children: [
        {
          path: "channels/list",
          element: <ChannelPage />,
        },
        {
          path: "/trading/list",
          element: <TradingPage />,
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

    {
      path: "/",
      element: <PrivateRoute roles={["admin"]} />,
      children: [
        {
          path: "users/list",
          element: <UserPage />,
        },
        {
          path: "users/create",
          element: <UserForm mode="Create" />,
        },
        {
          path: "users/edit/:id",
          element: <UserForm mode="Edit" />,
        },
        {
          path: "users/delete/:id",
          element: <UserForm mode="Delete" />,
        },
        {
          path: "/channels/create",
          element: <ChannelForm mode="Create" />,
        },
        {
          path: "/channels/edit/:id",
          element: <ChannelForm mode="Edit" />,
        },
        {
          path: "/channels/delete/:id",
          element: <ChannelForm mode="Delete" />,
        },
        {
          path: "/trading/list",
          element: <TradingPage />,
        },
        {
          path: "/forexs/create",
          element: <ForexForm mode="Create" />,
        },
        {
          path: "/forexs/edit/:id",
          element: <ForexForm mode="Edit" />,
        },
        {
          path: "/forexs/delete/:id",
          element: <ForexForm mode="Delete" />,
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
