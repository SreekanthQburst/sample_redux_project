import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import NoResult from "./components/NoResult";

import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/user/:userid" element={<UserDetails />} />
            <Route exact path="/" element={<UserList />} />
            <Route path="*" element={<NoResult />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
