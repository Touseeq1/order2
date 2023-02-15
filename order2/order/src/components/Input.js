import React from 'react'
import { Input } from 'antd';
export const InputField = ({ placeholder, img, onChange }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);};
    return (
        <Input
         className='inputfield' 
         placeholder={placeholder} 
         prefix={<img src={img} style={{ marginLeft: '6px', marginRight: '6px' }}/>}
         onChange={handleChange} />
    )
}
