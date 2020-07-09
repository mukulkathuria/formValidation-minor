import React from 'react';

export const Auth = React.createContext();

export const Authentication = props => {
        const [auth,changeauth] = React.useState({
            data:null
        });
        
        React.useEffect(()=>{
            if(auth.data){
                sessionStorage.setItem('auth',JSON.stringify(auth.data));
            }
        },[auth.data])
        const authValue=sessionStorage.getItem('auth');

        if(!auth.data && authValue){
            changeauth({data:authValue});
        }
    return(
            <Auth.Provider value={[auth,changeauth]}>
                {props.children}
            </Auth.Provider>
    );
};