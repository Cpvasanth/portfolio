import React, { useEffect, useState } from 'react';
import styles from "../styles/github.module.css";
import axios from 'axios';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/cpvasanth/repos'
        );
        setRepos(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  return (
    <div className={styles.github}>
      <h1>My GitHub Repositories</h1>

      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <div className='repo-info'>
              <p>⭐ Stars: {repo.stargazers_count}</p>
              <p>🍴 Forks: {repo.forks_count}</p>
              <p>👀 Watchers: {repo.watchers_count}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
