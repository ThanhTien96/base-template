import React, { useReducer } from 'react'
import Context from './shared-context'
import reducer, { appReducerState } from './shared-reducer';
import { Drawer } from 'components/shared';

type IContextProviderProps = {
    children: React.ReactNode;
}

const ContextProvider = ({children}: IContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer,appReducerState)
  return (
    <Context.Provider value={[state, dispatch]}>
        {children}
        <Drawer {...state.drawer} />
    </Context.Provider>
  )
}

export default ContextProvider