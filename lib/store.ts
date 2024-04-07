import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counter/counterSlice';
import { pokemonsApiSlice } from './features/pokemons/pokemon-list.api';
import { pokemonApiSlice } from './features/pokemon/pokemon.api';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.

const rootReducer = combineSlices(counterSlice, pokemonsApiSlice, pokemonApiSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(pokemonsApiSlice.middleware).concat(pokemonApiSlice.middleware);
    },
    devTools: {
      name: 'Kevins Home',
      actionsDenylist: ['__rtkq/focused', '__rtkq/unfocused'],
    },
  });
};


// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;  

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
