import React ,{useContext}from 'react'
import {app} from './Context'
export default function Comp() {
    const login= useContext(app)
    
  return (
    <div>
      {login}
    </div>
  )
}
