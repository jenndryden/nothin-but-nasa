import React from 'react';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {Banner} from '@shopify/polaris';

//banner for when there are no remaining nominations left
const NoLovedPhotos = ({available}) => {
    if (!available) return null;
	return (
		<>
			<Banner showBanner={noNominationsLeft}
  title="You have already added 5 NASA photos"
  action={{content: 'Review risk analysis'}}
  status="critical"
>
  <p>
    To add a different nasa photo to the loved list, please{' '}
    delete a nasa heart from the list and add
    a new one.
  </p>
</Banner>
		</>
	);
};

export default NoLovedPhotos;