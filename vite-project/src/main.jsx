import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";
                                    
        
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css"; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      {/* <PersistGate persistor={persistor}> */}
          <App />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>
);
