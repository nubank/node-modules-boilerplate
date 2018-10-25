import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>Teste</div>,
  document.getElementById('app')
)

export default {
  oiTeste1: () => {
    console.log('uhul1');
  },

  oiTeste2: () => {
    console.log('uhul2');
  }
}

export function named1() {
}

export function named2() {
  console.log('uhul');
}