import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


function GeneralWrapper() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default GeneralWrapper