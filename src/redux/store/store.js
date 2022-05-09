import { createStore } from 'redux';
import rootRedcer from '../reducer/reducer'


function configureStore(preloadedState={}) {
    return createStore(rootRedcer, preloadedState)
}

export default configureStore;