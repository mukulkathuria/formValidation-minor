import React from 'react';
import {Formik ,Form ,Field , ErrorMessage} from 'formik';
import { InputDiv , Labels , Successbtn } from './formstyle';
import intialValue from './initials';
import validationSchema from './validation';
import {Auth} from '../../Contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class LoginForm extends React.Component {
    state ={
        form:null
    }
    
    static contextType = Auth;

    onSubmit = values =>{
        const updated = {...values,
            grant_type:'password',
            client_id:'5x7EuN09HAeBn2pYJnvvq7szgJaULh14'};
        axios.post(' http://199.192.19.247:4502/oauth/token',updated)
        .then(res => {this.setState({
            form:res.data.access_token
        })}).catch(err => console.log(err));
    }


    render(){
        const [auth,changeauth] = this.context;
        if(this.state.form){
            changeauth({data:this.state.form});
           return <Redirect to='/dashboard' />
        }
        if(auth.data) return <Redirect to='/dashboard' />
        return(
            <Formik
                initialValues = {intialValue}
                onSubmit={this.onSubmit}
                validationSchema={validationSchema}
                >
                {formik =>(
                    <Form>
                    <Labels>Usename or email</Labels>
                    <InputDiv> <Field type='text'  name='username' 
                    autoComplete='new-password' />
                    <ErrorMessage name='username' /> 
                    </InputDiv>

                    <Labels>Password</Labels>
                    <InputDiv><Field type='password' name='password' />
                    <ErrorMessage name='password' />
                    
                    </InputDiv>
                    <Successbtn type='submit' disabled={!formik.isValid || formik.isSubmitting}> 
                    Login</Successbtn>

                    </Form>
                )}
            </Formik>
        );
    }
}
export default LoginForm;