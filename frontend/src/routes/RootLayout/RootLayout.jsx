import DashboardLayout from '../DashboardLayout/DashboardLayout'
import './rootLayout.css'
import { Link, Outlet } from 'react-router-dom'


const RootLayout = () => {
    return (
        <div className='rootLayout'>
            <header>
                <Link className='logo' to='/'>
                    <img className='imagenav' src='../public/eye.png' alt='' />
                    <span>
                        Dev.AEye
                    </span>
                </Link>
                <div className='user'>
                    User
                </div>
            </header>
            
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout