import './App.css';
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/' element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
