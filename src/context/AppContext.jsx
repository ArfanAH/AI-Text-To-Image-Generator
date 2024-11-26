import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()

const AppContextProvider = (props) =>
{
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('token'));
  
  const [credit , setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const navigate = useNavigate()
  

  const loadcreditData = async () =>
  {
    try
    {
      const { data } = await axios.get(backendUrl + '/api/user/credits/', { headers: { token } })
      
      if (data.success)
      {
        setCredit(data.credits);
        setUser(data.user);
      }
    }
    catch (err)
    {
      console.log(err);
      toast.error(err.message);
    }
  }


  const logOut = () =>
  {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  }

  const generateImage = async (prompt) =>
  {
    try
    {
      const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } })
      if (data.success)
        {
        loadcreditData()
        return data.resultImage
      } else
      {
        toast.error(data.message);
        loadcreditData()
        if (data.creditBalance === 0)
        {
          navigate('/buycredit')
        }
      }

    } catch (error)
    {
      toast.error(error.message);
    }
  }

  useEffect(() =>
  {
    if (token)
    {
      loadcreditData();
    }
  
  },[token])
  const value = {
    user, setUser, showLogin, setShowLogin, backendUrl,token, setToken,credit , setCredit,loadcreditData,logOut, generateImage
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}

    </AppContext.Provider>

  )
}

export default AppContextProvider
