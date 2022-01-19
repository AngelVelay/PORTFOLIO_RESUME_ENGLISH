import React from 'react'

const Snack = {
    overflow: 'hidden',
    background: '#F9F9F9',
    border:'1px solid var(--color-border)',
    borderRadius:'4px',
    height:'700px',
    width:'100%'
}



const SnackApp = () => {

    return (
        <div >
            <div 
                data-snack-id="@angelvelay/crypto-market" 
                data-snack-platform="web" 
                data-snack-preview="true" 
                data-snack-theme="dark" 
                data-snack-loading="lazy"
                style={Snack}>
            </div>
        </div>
       
    )
    
}



export default SnackApp
