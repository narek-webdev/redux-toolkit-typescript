import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from 'common/routes'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={<route.element />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
