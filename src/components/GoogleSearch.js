import React from 'react'

const GoogleSearch = () => {
    const inputText = {
        marginTop: '35px',
        color: '#fff',
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        height: '60px',
        width: '350px',
        borderRadius: '50px',
        padding: '0 10px',
        boxShadow: '15px 10px 20px 3px rgba(0,0,0,0.5)',
        outline: 'none',
    }
    const submitInput = {
        display: 'none',
    }
    return (
        <form action="http://google.com/search" style={{ textAlign: 'center' }}>
            <input
                style={inputText}
                placeholder='Search'
                name="q" />
            <input
                style={submitInput}
                type="submit" />
        </form>
    )
}

export default GoogleSearch
