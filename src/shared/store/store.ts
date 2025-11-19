import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice  from './slices/AuthorizationSlice'
import movieSlice from "@pages/Catalogue/slice/movieSlice";

const rootReducer = combineReducers({
    authorizationReducer: authSlice,
    movieReducer: movieSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']