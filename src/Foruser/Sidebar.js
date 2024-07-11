import { Link } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='buttonWrapper'>
                    <div className='buttonBox'>
                        <div className='buttonItems'>
                            <span className='createIcon'>
                                <ion-icon name="add-circle-outline"></ion-icon>
                            </span>
                            <Link to='/createCommunity' className='commButton'>Create community</Link>
                        </div>
                        <span className='textBelowBtn'>Create a new community for women having similar interests as yourself</span>
                    </div>
                    <div className='buttonBox'>
                        <div className='buttonItems'>
                            <span className='createIcon'>
                                <ion-icon name="add-circle-outline"></ion-icon>
                            </span>
                            <Link to='/joinCommunity' className='commButton'>Join community</Link>
                        </div>
                        <span className='textBelowBtn'>Join a community and connect with women having similar interests as yourself</span>
                    </div>
                </div>
                <hr className='hrSidebar'/>
                <ul className='sidebarList'>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                    <li>first</li>
                </ul>
                <hr className="sidebarHr" />
            </div>
        </div>
    )
}
