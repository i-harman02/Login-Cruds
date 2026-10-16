import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
        <Header />
        <div className='max-w-[900px] mx-auto py-[60px]'>
         <Outlet />
        </div>
      
    </>
  )
}

export default Layout
