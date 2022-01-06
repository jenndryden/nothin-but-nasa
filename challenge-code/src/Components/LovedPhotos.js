import React, {useState} from "react";
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import unavailableMoviePoster from '../unavailableMoviePoster.jpg';

//placeholder image for when there is no nasa available (green image with text)
const DEFAULT_PLACEHOLDER_IMAGE =
unavailableMoviePoster;

// nomination function, takes all results from nominated array and maps them
const LovedPhotos = (props) => {
    const RemoveButtonComponent = props.removeButtonComponent;

  return (
      <>
      { props.nasaphoto.map((nasa,index) => { 
                if (nasa) {
                    const hdurl =
                    nasa.hdurl === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : nasa.hdurl;
                    return (
                        
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
          src={nasa.hdurl}
        />
        </div>
        <div 
        onClick={() => props.handleNominationClick(nasa)}>
        <RemoveButtonComponent/>
        </div>
    </div>
    </div>
    </AppProvider>
    )} return null
      })}
</>
  );
};


export default LovedPhotos;