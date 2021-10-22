import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Departments from './Pages/Departments/Departments';
import Consultants from './Pages/Consultants/Consultants';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import DoctorsDetails from './Pages/DoctorsDetails/DoctorsDetails';
import Appointments from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctorsdetails/:id">
              <DoctorsDetails></DoctorsDetails>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/appointment/:id">
              <Appointments></Appointments>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/consultants">
              <Consultants></Consultants>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
