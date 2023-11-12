import { ReadonlySignal, Signal, computed, signal } from '@preact/signals-react';
import { BrowserProvider, JsonRpcSigner, ethers } from 'ethers';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

type AppStateProps = {
  provider: BrowserProvider
  signer: Signal<JsonRpcSigner>,
  address: ReadonlySignal<string>
}

const createAppState = (): AppStateProps => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = signal({} as JsonRpcSigner)
  const address = computed(() => signer.value.address)

  return { provider, signer, address }
}

export const AppStateContext = createContext({} as AppStateProps)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppStateContext.Provider value={createAppState()}>
      <App />
    </AppStateContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
