import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <input className='form-input__input' type={type} placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input, short } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className={`form-button__button ${short ? 'form-button__gray-button' : ''}`}
                    //  ternary expression  created to make both button responsive
                        type={type}
                        {...input}
                        onClick={onClick}
                >
                {title}
                </button>
            </div>
        )
    }
} 

export class ChangePasswordButton extends Component {
    render() {
        const { className, title, type, onClick, input,  labelTitle} = this.props;
        return (
            <div className={`${className} form-button-long-gray `}>
                <label className='form-button-long-gray __label'>{labelTitle}</label>
                <button className={`form-button-long-gray__button`}
                    
                        type={type}
                        {...input}
                        onClick={onClick}
                >
                {title}
                </button>
            </div>
        )
    }
} 
