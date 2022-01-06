import React, { useReducer, useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import NasaPhoto from "./NasaPhoto";
import Search from "./Search";
import LovedPhotos from "./LovedPhotos";
import LoveButton from "./LoveButton";
import RemoveButton from "./RemoveButton";
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Banner} from '@shopify/polaris';

//api key information -- enter your own custom key below if you'd like!
const API_KEY = "Z603WCbqUtSl02JQTiZX5mVRczejcUKJGb6c85Dt";
const MOVIE_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
let nominations_count = 0;

//inital state for creating array of NASA for api calls
const initialState = {
  loading: true,
  nasa: [],
  errorMessage: null
};

//cases for api calls
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NASA_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_NASA_SUCCESS":
      return {
        ...state,
        loading: false,
        NASA: action.payload
      };
    case "SEARCH_NASA_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};



const App = (
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

    useEffect(() => {
        //setting payload as json search response for successful api call 
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
        
            dispatch({
                type: "SEARCH_NASA_SUCCESS",
                payload: jsonResponse.Search
        	});
      	});
  	}, []);

    const search = searchValue => {
    	dispatch({
      	type: "SEARCH_NASA_REQUEST"
    	});
	
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${searchValue}`)
      	.then(response => response.json())
      	.then(jsonResponse => {
        	//if (jsonResponse === "True") {
            console.log(jsonResponse);
          	dispatch({
                type: "SEARCH_NASA_SUCCESS",
                payload: jsonResponse
          	});
        	//} else { //for api call errors
           // console.log("error" + jsonResponse);
          //	dispatch({
           //     type: "SEARCH_NASA_FAILURE",
           //     error: jsonResponse.Error
          //	});
          }
      	//});
        )};

    const { NASA, errorMessage, loading } = state;
    const [nominations, setNominations] = useState([]); 

    //this function is for adding new nominated NASA to the nominated movie array
    const additionNominatedNasa = (movie) => {
      if ((nominations_count<5) && (!nominations.includes(movie))){ 
        nominations_count++ //increases count of nominations, cannot be more than 5
        const newNominationList = [...nominations, movie]; 
        setNominations(newNominationList);
      }
    };

    //function for removing NASA from the nominated NASA array
    const removalNominatedNasa = (nasa) => {
      nominations_count--; // decreases nasa count
      const newNominationList = nominations.filter((nomination) => nomination !== nasa); 
      setNominations(newNominationList); 
    };


    return (
      <AppProvider>
    <div className="App">
      <Header/>
      <Search search={search}/>
      {nominations_count === 5 ? (
        //banner that is displayed when there is already 5 NASA
    <Banner 
    title="You have already added 5 NASA Photos"
    status="critical"
  >
    <p>
      To add a different nasa to the nominations, please{' '}
      delete a nasa nomination from the list and add
      a new one.
    </p>
  </Banner>
  ) : (
    null
  )}
  {nominations_count>0 && nominations_count!==5 ? (
    <Banner
    title="Your have added a nasa nomination"
    status="success"
  />
  ) :
  null}
      <div className="allNASA">
        <br></br>
      <h4 className="App-intro">NASA to nominate</h4>
      <br></br>
      <div className="NASA">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <NasaPhoto 
          nasaphoto={NASA}
          //key={NASA.imdbID}
          handleNominationClick={additionNominatedNasa}
          />
        )} 
</div>
    </div>
    <div className="nominatedNASA">
    <h4 className="App-intro">nominated NASA photos</h4> 
    <div className="NASA">
        {(loading && !errorMessage) ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <LovedPhotos
          nasaphoto={nominations} 
          //key={nominations.imdbID}
          removeButtonComponent={RemoveButton} 
          handleNominationClick={removalNominatedNasa}
          /> 
        )} 
      </div>
    </div>
    </div>
    </AppProvider>
  );
};

export default App;