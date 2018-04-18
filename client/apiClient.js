import request from 'superagent'

const apiUrl = 'https://shakespeare.p.mashape.com/shakespeare.json'
const apiKey = 'kz44iKPixamshC0seViBpEh7wANap1tVLIljsnM5AoJoc1CiG2'

// const rootUrl = '/api/v1'

export function getTranslation (phrase) {
  return request.post(apiUrl)
    .set('X-Mashape-Key', apiKey)
    .send(`txt=${phrase}`)
}
