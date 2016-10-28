import React from 'react';

/**
 * Button
 * @param text
 * @param className
 * @param onClick
 * @constructor
 */
type propTypes = {text: string, className?: string, onClick: Function}
export const Button = ({text, className = '', onClick}: propTypes) => (
    <a
        className={`button ${className}`}
        href='javascript:void(0)'
        onClick={onClick}
    >
        {text}
    </a>
);

export default Button;