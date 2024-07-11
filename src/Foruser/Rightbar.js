import './Rightbar.css'
import { Mentorshipstartpage } from '../Mentorship/Mentorshipstartpage'
import { Link } from "react-router-dom"

export const Rightbar = () => {
    return (
        <div className='rightbarStyle'>
            <div className='buttonBox'>
                <div className='buttonItems'>
                    <span className='createIcon'>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </span>
                    <Link to='/mentorshipStartPage' className='commButton'>Mentorship Portal</Link>
                </div>
            </div>
            <div className='buttonBox'>
                <div className='buttonItems'>
                    <span className='createIcon'>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </span>
                    <Link to='/AIGuidance' className='commButton'>AI for guidance</Link>
                </div>
            </div>
        </div>
    )
}
