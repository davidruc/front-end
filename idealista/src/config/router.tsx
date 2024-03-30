// App.tsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../presentation/pages/home_page';
// Importa tus otras páginas si las tienes

const router = createBrowserRouter([
  {
   path: '/',
   Component: HomePage
  }
])


export default router;
