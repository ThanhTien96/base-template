import * as React from "react";
import { IContextVal, IUseReducerAction } from "./shared-reducer";



export type ISharedContextValueType = [
    IContextVal,
    React.Dispatch<IUseReducerAction>
]

const Context = React.createContext<ISharedContextValueType>(null as any)
export default Context;