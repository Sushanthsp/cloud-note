import React, { useState } from 'react'
import { AlertContext } from './AlertContext'


const AlertState = (props) => {

  const [alerts, setAlerts] = useState({ message: null, type: null })

  const setMsg = (msg,type) =>
  {
    setAlerts({ message: msg, type: type+" " })
    setTimeout(() =>
    {
      setAlerts({ message: null, type: null })
    },1500)
  }
  return (
      <AlertContext.Provider  value={{setMsg , alerts}}>
          {props.children}
      </AlertContext.Provider>
  )
}

export default AlertState