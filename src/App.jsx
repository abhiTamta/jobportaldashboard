import { Provider } from "react-redux"
import AuthProvider from "./midelwares/AuthProvider"
import { RouterProvider } from "react-router-dom"
import pageRouter from "./routers"
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={pageRouter} />
      </AuthProvider>
    </Provider>
  )
}

export default App