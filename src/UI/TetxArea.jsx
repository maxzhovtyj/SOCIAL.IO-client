import React from 'react';

const textAreaStyle = {
    maxWidth: '72%',
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
}

const TextArea = ({value, onChange}) => (
    <textarea value={value} onChange={onChange} style={textAreaStyle} />
);

export default TextArea;