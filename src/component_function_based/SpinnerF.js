import React from 'react'
import Loading from './loading.gif'

export default function SpinnerF(props) {
    return (
        <div className='text-center'>
            <img className='my-3' src={Loading} height={'60px'} alt="Loading"/>
        </div>
    )
}
