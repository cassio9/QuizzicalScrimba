import ReactDOM from "react-dom/client";
import InitialPage from "./components/InitialPage";
import Quiz from "./components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <InitialPage />,
	},
	{
		path: "quiz",
		element: <Quiz />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
