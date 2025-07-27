import React,{useEffect,useState} from 'react';
import { login,logout } from './store/authSlice';
import authService from './appwrite/auth';
import {useDispatch} from 'react-redux';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import LoadIcon from './components/LoadIcon.jsx';
import './App.css'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    })
  .finally(()=>setLoading(false))
  },[])

return !loading ? (
  <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
    <header className="bg-white shadow-md p-4">
      <Header />
    </header>

    <main className="flex-grow p-6 bg-gray-400 max-w-5xl mx-auto w-full">
      <Outlet />
    </main>

    <footer className="bg-gray-100 text-gray-600 text-center p-4">
      <Footer />
    </footer>
  </div>
) : (
  <div className="flex items-center justify-center h-screen">
    <LoadIcon />
  </div>
);


}

export default App
