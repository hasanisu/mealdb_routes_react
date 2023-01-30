import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home', element: <Home></Home>
        },
        {
          path: '/products', 
          loader: async()=>{
           return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          },
          element: <Products></Products>
        }
      ]
  },
  {
    path: '/about', element: <About></About>
  }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
