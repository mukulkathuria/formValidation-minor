import React from 'react';
import Data from '../../Data/dashboard.json';
import {StyleDiv} from './dashboardstyle';
import { withRouter, Redirect} from 'react-router-dom';
import {Auth} from '../../Contexts/AuthContext';

const Dashboard = props =>{
    const [auth] = React.useContext(Auth);

    const handleClick = (data) =>{
        props.history.push({
            pathname:'/userform',
            state:data });
    }
    if(!auth.data) return <Redirect to='/' />

    return(
        <div>
            {Data.map((list,i) =>
            <StyleDiv key={i} onClick={() => handleClick(list)}>
                <div className='user'>{list.user}</div>
                <div className='email'>{list.email}</div>
                </StyleDiv>
            )}
        </div>
    );
}
export default withRouter(Dashboard);