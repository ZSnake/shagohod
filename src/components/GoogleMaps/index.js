// @flow

import * as React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Modal } from 'react-bootstrap';
import type { Movie } from '../../types/movies';
import { mapUrl } from '../../config/mapConfig';
import defaultMapCenter from '../../config/defaultMapCenter';

type GoogleMapsProps = {
  movies: Movie[],
  show: boolean,
  onModalHide: Function,
  onModalShow: Function,
};

const googleMapsComponent = ({
  movies,
  show,
  onModalHide,
  onModalShow,
}: GoogleMapsProps) => (
  <div>
    <GoogleMap defaultZoom={8} defaultCenter={defaultMapCenter}>
      <Modal show={show} onHide={onModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
      </Modal>
      {movies && movies.length &&
        movies.map((movie, index) =>
          (movie.location && movie.location !== 0 &&
            <span key={index} onClick={onModalShow}>
              <Marker position={{
                lat: movie.location.Location.DisplayPosition.Latitude,
                lng: movie.location.Location.DisplayPosition.Longitude,
              }}/>
            </span>
          ))}
    </GoogleMap>
  </div>
);

const GoogleMaps = compose(withProps({
  googleMapURL: mapUrl,
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '100%' }} />,
  mapElement: <div style={{ height: '100%' }} />,
}), withScriptjs, withGoogleMap)(googleMapsComponent);

export default GoogleMaps;
