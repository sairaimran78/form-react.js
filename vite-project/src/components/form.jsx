import { useState } from "react";

function form() {
  const [query, setquery] = useState("");
  const [repositorires, setRepositories] = useState("");

  const getRepositories = async (searchTerm) =>{
    const response = await axios.get(
   `https://api.github.com/search/repositories?q=foodpanda`
    )
  }
    
  const searchGitHub = async() => {
    e.preventDefault()

  }
  return (



    <form onSubmit={searchGitHub}>
      <label>Enter your name</label>
      <br />

      <input
      id="query"
        type="text"
        placeholder="Enter your name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      
      <button type="submit">Submit</button>
    </form>
  );
}

export default form;