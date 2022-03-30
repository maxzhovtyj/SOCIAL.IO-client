import React from 'react';

const textAreaStyle = {
    boxSizing: 'border-box',
    padding: '5px',
    width: '100%',
    minHeight: '100px',
    backgroundColor: 'white',
    overflow: 'auto',
    resize: 'none',
    fontSize: '14px',
    lineHeight: '18px',
    borderRadius: '15px',
    paddingLeft: '10px',
    border: 'none',
    wordBreak: 'break-word'
}

const TextArea = ({value, onChange}) => (
    <textarea value={value} onChange={onChange} style={textAreaStyle} />
);

export default TextArea;