import React from 'react'
import './sidebar.css';
import ADD from '../src/media/plus.png'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DevicesIcon from '@material-ui/icons/Devices';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_btn'>
                <Link to="/newfolder"> <button>
                    <img src={ADD} alt="add photo" />
                    <span>New</span>
                </button></Link>
            </div>
            <div className='sidebar_options'>
                <div className='sidebar_option sidebar_option-Active'>
                    <MobileScreenShareIcon />
                    <Link to="/mydrive">

                        <span>My Drive</span>
                    </Link>
                </div>
                <div className='sidebar_option sidebar_option-Active'>
                    <DevicesIcon />
                    <Link to="/computer">
                        <span>Computers</span>
                    </Link>
                </div>
                <div className='sidebar_option sidebar_option-Active'>
                    <PeopleAltIcon />
                    <Link to="/shared">
                        <span>shared with me</span>
                    </Link>
                </div>
                <div className='sidebar_option sidebar_option-Active'>
                    <QueryBuilderIcon />
                    <Link to="/recent">
                        <span>Recent</span>
                    </Link>
                </div>
                <div className='sidebar_option sidebar_option-Active'>
                    <StarBorderIcon />
                    <Link to="/shared">
                        <span>Starred</span>
                    </Link>
                </div>
                <div className='sidebar_option sidebar_option-Active'>
                    <DeleteOutlineIcon />
                    <Link to="/trash">
                        <span>Trash</span>
                    </Link>
                </div>
            </div>
            <hr />

            <div className='sidebar_options'>
                <div className='sidebar_option'>
                    <CloudQueueIcon />
                    <span>Storage</span>
                </div>
                <div className='progress_bar'>
                    <progress size="tiny" value="50" max="100" />
                    <span>6.45 GB of 15 GB used</span>
                    <h6>not connect to aws s3</h6>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
