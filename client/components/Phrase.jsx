import React from 'react'

import {getTranslation} from '../apiClient'

const phrase = 'You asked Mr. Weasely to do magic!'

class Phrase extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      english: phrase,
      shakespearean: ''
    }
  }

  componentDidMount () {
    getTranslation(phrase)
      .then(res => {
        this.setState({
          english: res.body.result.english,
          shakespearean: res.body.result.shakespearean
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Shakespearean Translation</h1>
        {/* <h2>{phrase}</h2> */}
        <p>English: {this.state.english}</p>
        <p>Shakespearean: {this.state.shakespearean}</p>
      </div>
    )
  }
}

export default Phrase
