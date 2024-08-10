import React, { Component } from 'react'
import Loading from './loading.gif'

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      loading:this.props.isVisible
      }
      // console.log(this.state.loading);
  }

  render() {
    return (
      <div className='text-center'>
        {this.state.loading && <img className='my-3' src={Loading} height={'60px'} alt="Loading"/>}
      </div>
    )
  }
}
