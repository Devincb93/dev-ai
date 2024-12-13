import './dashboardpage.css'
import { Outlet } from 'react-router-dom'

const DashBoardPage = () => {
    return (
        <div>
            DashboardPAge
            <Outlet/>
            
        </div>
    )
}

export default DashBoardPage