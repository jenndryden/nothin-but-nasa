import React, { useCallback, useState } from "react";
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button, RangeSlider} from '@shopify/polaris';

//search component, allows user to search for movies and click search button 
/*const Search = (props) => {
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
}*/
const Search = (props) => {

  const [searchValue, setSearchValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value) => setSearchValue(value),
    [],
  );

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    //resetInputField();
  }

  return (
    <form className="search">
    <div class="sliderNasaCard">
    <div class="sliderNasaCard">
    <div class="col-md-3">
      <RangeSlider output output step={1} max={24} min={1}
        label="select a photo!" 
        label="how many photos would you like to choose from?"
        value={searchValue}
        onChange={handleRangeSliderChange}
        output
      />
      </div>
      </div>

<button class="searchbutton" onClick={callSearchFunction} type="submit" color="primary">search</button>
    </div>
    </form>
  );

}
export default Search;