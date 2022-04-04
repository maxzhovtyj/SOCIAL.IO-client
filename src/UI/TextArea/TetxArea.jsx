import React from 'react';

import s from './TextArea.module.css'

const textAreaStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    resize: 'none',
    fontSize: '20px',
    lineHeight: '18px',
    border: 'none',
    wordBreak: 'break-word',
    padding: '.2rem',
    borderBottom: '1px solid grey',
    height: '2rem'
}

const TextArea = ({value, onChange}) => (
    <textarea className={s.fv} placeholder={"Share your thoughts"} value={value} onChange={onChange} style={textAreaStyle} />
);

export default TextArea;