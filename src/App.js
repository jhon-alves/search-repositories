import React, { useState, useEffect } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  // const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jhon-alves/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  const filteredRepos = search.length > 0
    ? repos.filter(item => item.name.includes(search))
    : [];

  // useEffect(() => {
  //   if (search.length) {
  //     setFilteredRepos(repos.filter(item => item.name.includes(search)));
  //   }
  // }, [search]);

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        className="input"
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      {search.length > 0 ? (
        <ul>
          {filteredRepos.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {repos.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
