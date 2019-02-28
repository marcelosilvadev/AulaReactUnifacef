import React from 'react'
import ReactDOM from 'react-dom'
import { Aluno, Professor } from './component.jsx'
ReactDOM.render(<div><Aluno nome='Marcelo Silva' />
                     <Professor titulacao='Mestrado' />
                </div>, 
document.getElementById('app'))
