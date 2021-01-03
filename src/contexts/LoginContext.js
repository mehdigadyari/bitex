import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/LoginReducer'
const LoginContext = createContext({
  state: {
    signup: true,
    code: false
  },
  dispatch: () => {}
})
export { LoginContext }

export default function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    signup: true,
    code: false
  })
  return (
    <LoginContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
