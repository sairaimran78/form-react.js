import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState([]);

  const searchRepos = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
      const data = await response.json();
      setRepos(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Forms</h1>
        <form className="search-form" onSubmit={searchRepos}>
          <input 
            type="text" 
            placeholder="Search repositories (e.g. daraz)..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </header>

      {/* Results Section */}
      <main className="results-container">
        {repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <div className="repo-avatar">
              <img src={repo.owner.avatar_url} alt="owner" />
            </div>
            <div className="repo-info">
              <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.full_name}</a></h3>
              <p>{repo.description || "No description available"}</p>
              <div className="repo-meta">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span className="lang">{repo.language}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;