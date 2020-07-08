import React from 'react';
import {Formik ,Form ,Field} from 'formik';
import { InputDiv , Labels , Successbtn } from './formstyle';
import intialValue from './initials';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class UserForm extends React.Component {
    state ={
        form:null
    }
    
    onSubmit = values =>{
        const updated = {...values,
            password:'123456789',
            grant_type:'password',
            client_id:'5x7EuN09HAeBn2pYJnvvq7szgJaULh14'};
        axios.post(' http://199.192.19.247:4502/oauth/token',updated)
        .then(res => {console.log(res)}).catch(err => console.log(err));
    }
    render(){
        if(!this.props.location.state) return <Redirect to='/' />
        return(
            <Formik
                initialValues = {intialValue}
                onSubmit={this.onSubmit}
                >
                {formik =>(
                    <Form>
                    <Labels>email</Labels>
                    <InputDiv> <Field type='text'  
                    name='email' 
                    autoComplete='new-password' 
                    value={this.props.location.state.email}
                    />
                    </InputDiv>

                    <Labels>Message</Labels>
                    <InputDiv><Field as='textarea' name='message' />
                    </InputDiv>

                    <Successbtn type='submit' disabled={!formik.isValid || formik.isSubmitting}> 
                    Submit</Successbtn>

                    </Form>
                )}
            </Formik>
        );
    }
}
export default UserForm;