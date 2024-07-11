import React from 'react'
import { Sidebar } from './Sidebar'
import { Rightbar} from './Rightbar'
import { Posts } from './Posts'

export const Mainpage = () => {
    const mystyle={
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px"
    }
    return (
        <>
            <div className='container' style={mystyle}>
                <div className='row'>
                    <div className='col-4'><Sidebar /></div>
                    <div className='col-6'><Posts /></div>
                    <div className='col-2'><Rightbar /></div> 
                </div>
            </div>
        </>
        // <Router>
        //   <Routes>
        //     <Route exact path="/communities" element={<Communities />} />
        //     <Route exact path="/posts" element={<Posts />} />
        //     <Route exact path="/login" element={<Login />} />
        //     <Route exact path="/signup" element={<Signup />} />
        //   </Routes>
        // </Router>
    )
}
