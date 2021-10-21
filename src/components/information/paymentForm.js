import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props; // to the the array out of the props
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
            
            <Field className='payment-form__name'
            type='name'
            title='Name'
            placeholder='Name'
            name='name'
            component={FormInput} />
            
            <Field className='payment-form__email'
            type='email'
            title='Email'
            placeholder='Email'
            name='email'
            component={FormInput} />

            <Field className='payment-form__password'
            type='password'
            title='Password'
            placeholder='Password'
            name='password'
            component={FormInput} />

            <Field className='payment-form__confirm'
            type='password'
            title='Confirm Password'
            placeholder='Confirm Password'
            name='confirm'
            component={FormInput} />




            <div className='sign-up-form__line'></div>
            <Field className='sign-up-form__login'
            onClick={() => history.push('/shop')}
            type='submit'
            title='Create Account'
            name='login'
            component={FormButton} />

            <Field className='payment-form__back'
            onClick={() => history.push('/signin')}
            type='button'
            title='Back'
            name='back'
            short={true}
            component={FormButton} />
        </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);// Attach it to sign in

export default PaymentForm; 

