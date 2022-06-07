import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log("In App, posts are:")
console.log(blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} aboutText={blogData.about} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
