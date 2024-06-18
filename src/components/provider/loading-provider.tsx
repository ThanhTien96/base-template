import React, { useContext } from 'react'
import { ShareContext } from './context'
import { Spinner } from 'components/shared'

type ILoadingProviderProps = {
    children: React.ReactNode
}

const LoadingProvider = ({children}: ILoadingProviderProps) => {
    const [state] = useContext(ShareContext);
  return (
    <>
        {state.loading && <Spinner />}
        {children}
    </>
  )
}

export default LoadingProvider