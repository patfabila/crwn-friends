import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/button';

import {auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;



        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
            email: '',
            password: ''});
        }catch(error){
            console.log(error);
        }
    }

    handleChange = (event) => {
        //dynamically sets state of password/email to value typed
        const {value, name } = event.target;
        //value is whatever typed; name is password/email
        console.log(value, name, event);
        this.setState({[name]: value});
    }

    render() {
        const {email, password} = this.state;
        return(
            <div className='sign-in'>
                <h2 className='title'> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={this.handleChange}
                    label='email'
                    required 
                    />
                    <FormInput
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In With Google{' '}</CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn;