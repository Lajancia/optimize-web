import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import ViewPage from "./pages/ViewPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={ListPage} />
        <Route path="/view/:id" Component={ViewPage} />
      </Routes>
    </div>
  );
}

export default App;
