import React from 'react';
import { Link } from 'react-router-dom';
import ADD from '../src/media/Google.png';
import './cloneheading.css'
function Cloneheading() {
    return (
        <>
           
                <div className='clone-btn'>
                    <img src={ADD} alt="drive-logo" />
                </div>
                <div></div>
                <div className='col-lg-8'>
                   <Link to="/dashboard"> <button className='btn btn-primary'>LOGIN TO GOOGLE DRIVE CLONE</button></Link>
                </div>
      


        </>
    )
}

export default Cloneheading;
