import React, {createContext} from 'react'
export const app= createContext()
export default function Context({children}) {

  return (
    <div>
     
    <app.Provider value={5}>
      {children}
    </app.Provider>
 
    </div>
  )
}
