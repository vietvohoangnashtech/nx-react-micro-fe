import * as React from 'react';
import { Home } from './home';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { useAuthStore } from '@shared';

const Cart = React.lazy(() => import('cart/Module'));
const Products = React.lazy(() => import('products/Module'));
const Login = React.lazy(() => import('login/Module'));

function AuthGuard({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [isLoggedIn, navigate, location]);

  if (!isLoggedIn && location.pathname !== '/login') {
    return null;
  }

  return children;
}

export function App() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <AuthGuard>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart/*" element={<Cart />} />
                  <Route path="/products/*" element={<Products />} />
                </Routes>
              </AuthGuard>
            }
          />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
