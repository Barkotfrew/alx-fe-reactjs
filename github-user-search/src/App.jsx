import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
