
import app from "./app";

interface IAsyncReducerProps {
    [key: string] : any;
}

const rootReducer = {
    app,
}

const createReducer = (asyncReducer?: IAsyncReducerProps) => ({
    ...asyncReducer,
    ...rootReducer
});

export default createReducer;