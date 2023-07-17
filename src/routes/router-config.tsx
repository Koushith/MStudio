import { createBrowserRouter } from "react-router-dom";
import {
  AuthScreen,
  HomeScreen,
  SettingsScreen,
  TasksScreen,
} from "../screens";
import { App } from "../App";

export enum Routes {
  root = "/",
  home = "/home",
  task = "/task",
  settings = "/settings",
  login = "/login",
}

export const routerCongig = createBrowserRouter([
  {
    path: Routes.root,
    element: <App />,
    children: [
      {
        path: Routes.root,
        element: <HomeScreen />,
        index: true,
      },
      {
        path: Routes.task,
        element: <TasksScreen />,
      },
      {
        path: Routes.settings,
        element: <SettingsScreen />,
      },
    ],
  },
  {
    path: Routes.login,
    element: <AuthScreen />,
  },
]);
