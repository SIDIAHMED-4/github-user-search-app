import getMessage from "./getMessage.js";
import setLoadingState from "./setLoadingState.js";
import setMessage from "./setMessage.js";
import setSearchResult from "./setSearchResults.js";

const USERS_API = "https://api.github.com/search/users?q=";

const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage("");

  const typeQuery = isUserSelected ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("Please fill out the search field 👆");
    return;
  }

  setLoadingState(true);

  fetch(`${USERS_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(false));
};

export default performSearch;
