import React from 'react'

import {getBadWords} from '../apiClient'

// const phrase = this.state.censoredContent

class Phrase extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      badWords: [],
      censoredContent: 'That guy is a fucking wanker',
      badWordsTotal: 0,
      isBad: false
    }
  }

  componentDidMount () {
    getBadWords()
      .then(res => {
        this.setState({
          badWords: res.body.badWords,
          censoredContent: res.body.censoredContent,
          badWordsTotal: res.body.badWordsTotal,
          isBad: res.body.isBad
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Bad Word Filter</h1>
        <p>Bad Words: {this.state.badWords}</p>
        <p>Censored Content: {this.state.censoredContent}</p>
        <p>Total Bad Words: {this.state.badWordsTotal}</p>
        <p>Is it bad? {this.state.isBad}</p>
      </div>
    )
  }
}

export default Phrase
