import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setUserList([]);
    setPage(1);

    if (location || minRepos) {
      try {
        const data = await searchUsers({
          username,
          location,
          minRepos,
          page: 1,
        });
        setUserList(data.items);
        setTotalCount(data.total_count);
      } catch (err) {
        setError("Search failed");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (err) {
        setError("Looks like we cant find the user");

      } finally {
        setLoading(false);
      }
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setUserList((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Failed to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 shadow rounded"
      >
        <h2 className="text-xl font-bold text-gray-800">
          GitHub Advanced User Search
        </h2>

        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          placeholder="Minimum Repositories"
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      {/* Exact match display */}
      {userData && (
        <div className="mt-6 p-4 border rounded shadow text-center">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="mx-auto w-24 h-24 rounded-full"
          />
          <h3 className="text-lg font-semibold mt-2">
            {userData.name || userData.login}
          </h3>
          <p>{userData.location}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}

      {/* List of matched users */}
      {userList.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Showing {userList.length} of {totalCount} results
          </h3>
          <ul className="space-y-4">
            {userList.map((user) => (
              <li
                key={user.id}
                className="p-4 border rounded shadow flex items-center space-x-4"
              >
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {userList.length < totalCount && (
            <button
              onClick={handleLoadMore}
              className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;



