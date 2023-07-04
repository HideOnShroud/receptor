import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/recipes", element: <RecipesPage /> },
            { path: "/about", element: <AboutPage /> },
        ]
    }
])

export default router;