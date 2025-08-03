import axios from "axios";

// Fetch user by exact username (direct lookup)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced search by criteria: username (optional), location, repo count, pagination
export const searchUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = [];

    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const searchQuery = query.join(" ");
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        searchQuery
      )}&page=${page}&per_page=10`
    );

    return response.data;
  } catch (error) {
    throw new Error("Search failed");
  }
};
