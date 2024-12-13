import RootLayout from '../RootLayout/RootLayout'
import { Outlet } from 'react-router-dom'
import './dashboardLayout.css'

const DashboardLayout = ()=> {
    return (
        <div className='layout'>
            <div>
                Menu
            </div>
            <div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default DashboardLayout