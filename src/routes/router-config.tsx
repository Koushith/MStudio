import { createBrowserRouter } from "react-router-dom";
import { HomeScreen, SettingsScreen, TasksScreen } from "../screens";
import { App } from "../App";

export enum Routes {
  root = "/",
  home = "/home",
  task = "/task",
  settings = "/settings",
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
]);
