import React from 'react'

// import {getTranslation} from '../apiClient'

import Phrase from './Phrase'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Phrase />
      </div>
    )
  }
}

//   componentDidMount () {
//     getFruits()
//       .then(fruits => {
//         this.setState({fruits})
//       })
//   }

//   render () {
//     return (
//       <div className='app'>
//         <h1>Fullstack Boilerplate</h1>
//         <ul>
//           {this.state.fruits.map(fruit => (
//             <li key={fruit}>{fruit}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

export default App
