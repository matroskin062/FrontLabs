import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CompaniesContainer from "./components/Companies/CompamiesContainer";
import Navbar from "./components/Navbar/Navbar";
import UpdateCompanyContainer from './components/UpdateCompany/UpdateCompanyContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <section className='app-content'>
        <Route exact path='/' render={() => <h1>React SPA</h1>} />
        <Route exact path='/companies/' render={() => <CompaniesContainer />} />
        <Route path='/companies/update/:id?' render={() => <UpdateCompanyContainer />} />
      </section>
    </div>
  );
}

export default App;
