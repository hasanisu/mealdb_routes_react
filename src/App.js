import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Restaurants from './components/Restaurants/Restaurants';
import MealDetails from './components/MealDetails/MealDetails';
import Users from './components/Users/Users';
import Userinfo from './components/Userinfo/Userinfo';


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
          path: '/restaurants', 
          loader: async()=>{
           return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          },
          element: <Restaurants></Restaurants>
        },
        {
          path:'/singlemeal/:mealId',
          loader: async({params})=>{
            console.log(params);
              return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
          },
          element: <MealDetails></MealDetails>
        },
        {
          path: '/users',
          loader: async()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        },
        {
          path: '/user/:userId',
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          },
          element: <Userinfo></Userinfo>
        }
      ]
  },

  
  {
    path: '/about', element: <About></About>
  },
  {
    path: '*', element: <div> We could Not found your requested page!! 404</div>
  }
  ]);






  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
