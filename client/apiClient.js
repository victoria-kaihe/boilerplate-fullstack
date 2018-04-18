import request from 'superagent'

const apiUrl = 'https://neutrinoapi-bad-word-filter.p.mashape.com/bad-word-filter'
const apiKey = 'kz44iKPixamshC0seViBpEh7wANap1tVLIljsnM5AoJoc1CiG2'

// const rootUrl = '/api/v1'

export function getBadWords (censoredContent) {
  return request.post(apiUrl)
    .set('X-Mashape-Key', apiKey)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Accept', 'application/json')
    .send('censor-character=*')
    .send(`txt=${censoredContent}`)
    .then(res => {
      return res.body
    })
}
