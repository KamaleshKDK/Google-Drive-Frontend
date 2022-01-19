import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ListIcon from '@material-ui/icons/List';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InfoIcon from '@material-ui/icons/Info';

function Data() {
    return <div className='data'>
        <div className='data_header'>
            <div className='data__headerleft'>
                <p>My Drive</p>
                <ArrowDropDownIcon />
            </div>
            <div className='data__headerRight'>
                <ListIcon />
                <InfoIcon />
            </div>
        </div>
    </div>;
}

export default Data;
