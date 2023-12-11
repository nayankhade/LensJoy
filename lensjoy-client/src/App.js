import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Dashboard } from './Components/Dashboard';
import { Login } from './Components/Login';
import { Registration } from './Components/Registration';
import { Contact } from './Components/Contact';
import { Services } from './Components/Services';
import { Products } from './Components/Products';
import { Kids } from './Components/Kids';
import { Womens } from './Components/Womens';
import { Mens } from './Components/Mens';
import { About } from './Components/About';
import { UserFeedback } from './Components/UserFeedback';
import { DisplayFeedbacks } from './Components/DisplayFeedBacks';
import { PrivateRoute } from './Components/PrivateRoute';
import { Orders } from './Components/Orders';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/service" element={<PrivateRoute><Services /></PrivateRoute>} />
          <Route path="/product" element={<PrivateRoute><Products /></PrivateRoute>}>
            <Route path="kids" element={<Kids />} />
            <Route path="womens" element={<Womens />} />
            <Route path="mens" element={<Mens />} />
          </Route>
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/userfeedback" element={<UserFeedback />} />
          <Route path="/userfeedback/feedbacks" element={<DisplayFeedbacks />} />
          <Route path='/orders' element={<PrivateRoute><Orders></Orders></PrivateRoute>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
