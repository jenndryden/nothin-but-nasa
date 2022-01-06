import React, {useState, setState, isDisabled} from "react";
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import LoveButton from './LoveButton';
import unavailableMoviePoster from '../unavailableMoviePoster.jpg';

//placeholder image for when there is no nasa available (green image with text)
const DEFAULT_PLACEHOLDER_IMAGE =
  unavailableMoviePoster;

  //this function maps all the search results from the api and displays the movies in a card
const NasaPhoto = (props)  => {
  
  const [disable, setDisable] = useState(false);
  return (
    <>
    {props.nasaphoto && props.nasaphoto.map((nasa =>  (

    <AppProvider i18n={enTranslations}>
            <div className="nasa">
            <div className="moviecard">
      
    <div className="movietext">
     <h1>{nasa.title}</h1>
      <p>({nasa.date})</p>
      </div>
      <div className="movieimagecard">
        <img
          width="100"
          height = "150"
          alt={`The nasa titled: ${nasa.title}`}
          src={nasa.hdurl === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : nasa.hdurl}
        />
        </div>
        <div 
        onClick={() => props.handleNominationClick(nasa)}>
        <button disabled={props.disable} onClick={() => setDisable(true)} type="submit" >💚</button> 
        </div>
    </div>
    </div>
    </AppProvider>
  )))}
  </>
  );
};


export default NasaPhoto;