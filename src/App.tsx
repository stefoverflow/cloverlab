import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import PostsPage from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={PostsPage} />
      <Route exact path="/posts/:id" component={Post} />
    </BrowserRouter>
  );
}

export default App;
