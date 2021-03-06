import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import sessionReducer from "../redux/session/sessionReducer";

const sessionPersistConfig = {
  key: "session",
  storage,
  whitelist: ["token"]
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer)
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
