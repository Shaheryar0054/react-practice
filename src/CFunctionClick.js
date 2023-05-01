/* eslint-disable */
import React, { Component } from 'react'

class CFunctionClick extends Component {
    
    changeEvent(){
        alert ("Hello Anum")
    }
  render() {
    return (
      <div>
        <button type='button' onClick={this.changeEvent}>Hit Me</button>
      </div>
    )
  }
}

export default CFunctionClick
