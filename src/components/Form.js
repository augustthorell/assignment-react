import React from 'react'

const Form = ({ input, handleChange, handleSubmit }) => {

    const formStyle = {
        textAlign: 'center',
        paddingTop: '50px',
    }
    const inputWrapper = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',


    }
    const inputStyle = {
        height: '36px',
        marginRight: '35px',
        color: '#fff',
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        borderRadius: '50px',
        padding: '0 10px',
        outline: 'none',
    }
    const button = {
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        height: '40px',
        width: '100px',
        borderRadius: '50px',
        marginLeft: '35px',
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={inputWrapper}>
                <input
                    style={inputStyle}
                    type="text"
                    name="text"
                    placeholder="Enter a Todo"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <input
                    style={button}
                    type="submit"
                    value="Add Todo"
                />
            </div>
        </form>

    )
}

export default Form
