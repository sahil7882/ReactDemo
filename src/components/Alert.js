import React from 'react'
//it is Alert component which will decide what will be alert msg and how it will look
//message pass through props
function Alert(props) {
    // capitalize function will capitalize first latter of sentence
    const capitalize=(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (    
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
    )
}

export default Alert