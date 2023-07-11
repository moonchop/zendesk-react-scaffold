import React, { useEffect } from 'react'
import client from './zafClient'

export const App = () => {
  useEffect(() => {
    client.invoke('resize', { width: '100%', height: '500px' })
  }, [])

  return <div className="text-xl font-bold">Hi this is a sample app2</div>
}
