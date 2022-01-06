import React, { useState } from "react";
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';

//search component, allows user to search for movies and click search button 
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
          <AppProvider i18n={enTranslations}>
            <div class="rowSearch">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button class="searchbutton" onClick={callSearchFunction} type="submit" color="primary">search</button>
        </div>
        </AppProvider>
      </form>
    );
}

export default Search;