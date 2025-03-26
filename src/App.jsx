import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  // Root layout that includes the navigation and footer
  const Root = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'services', element: <Services /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ], {
    basename: '/simple-react-website' // Replace with your repository name
  });

  return (
    <RouterProvider router={myRouter} />
  );
}

export default App
