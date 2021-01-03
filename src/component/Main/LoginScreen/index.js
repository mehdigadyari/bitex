import React, { useContext } from 'react'
import SignUp from './SignUp'
import Code from './Code'
import { LoginContext } from '../../../contexts/LoginContext'
export default function Index() {
  const { state } = useContext(LoginContext)

  return (
    <>
      {state.signup ? <SignUp /> : null}
      {state.code ? <Code /> : null}
    </>
  )
}
