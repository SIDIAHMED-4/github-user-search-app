import { loaderElement } from "./elements.js";
import setSearchResult from "./setSearchResults.js";

export default function (loadingState) {
  loaderElement.classList.toggle("hidden", !loadingState);
  loadingState && setSearchResult(null);
}
