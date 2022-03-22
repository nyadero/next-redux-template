import {compose, applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import {createWrapper} from "next-redux-wrapper"

import reducers from "../reducers"

const makeStore = () => createStore(reducers, compose(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);