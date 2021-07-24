import React from 'react';
import Button from '@material-ui/core/Button';
import './button.scss';

function Button(props) {
    return (
        <Button variant="contained" color="primary" disableElevation>{props.children}</Button>
    )
}
export default Button;