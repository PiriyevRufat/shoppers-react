import { useEffect, useState } from 'react'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/Routes'
import axios from 'axios'

function App() {
  const router=createBrowserRouter(ROUTES)
  const[data,setData]=useState([])
  const contextData={
    data,setData
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      setData([...res.data])
      setLoading(false)
    }).catch(error=>{
      setError(error)
      setLoading(false)
    })
  },[])
  return (
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
