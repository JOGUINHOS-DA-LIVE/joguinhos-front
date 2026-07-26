import { createRoot } from 'react-dom/client'
import './index.css' // css G L O B A L
import AppRoutes from './routes';

createRoot(document.getElementById('root')!).render(
  < AppRoutes />
)
