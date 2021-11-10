import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/button';

import {auth, createUserProfileDocument} from '../../firebase/firebase.util';

import './sign-up.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            pass:'',
            confirmPass:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, pass, confirmPass} =this.state;

        if (pass !== confirmPass ) {
            alert('password does not match');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, pass);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                //meant to clear the form
                displayName:'',
                email:'',
                pass:'',
                confirmPass:''
            })
        }catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value });
        console.log(event);
    };

    render(){
        const {displayName, email, pass, confirmPass} = this.state;
        return(
            <div className='signup'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        label='Display Name'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='email'
                        label='Email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='pass'
                        label='Password'
                        type='password'
                        value={pass}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='confirmPass'
                        label='Confirm Password'
                        type='password'
                        value={confirmPass}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    
                    
                </form>
                
            </div>
        )
    }
}

export default SignUp;
