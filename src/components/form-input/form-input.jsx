import React from 'react';
import './form-input.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    {
        label ? 
        (<label 
            className={`${
                otherProps.value.length ? 'shrink' : ''
            } form-input-label`}>
            {label}
        </label>)
        : null
    }
    {/* if a label prop is passed, render a <label> element,
    apply the shrink class if there is a value.length(something typed),
    always apply form-input-label,
    keep whatever {label} was passed,
    if no label,render nothing */}
    </div>
    
)

export default FormInput;