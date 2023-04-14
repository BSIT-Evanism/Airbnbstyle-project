import { MapPinIcon } from "@heroicons/react/24/solid";
import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/evanismsolanoy/clgg47cqs002901r7ghcba4x5"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.lat}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            pitchAlignment="auto"
            rotationAlignment="auto"
          >
            <p className="relative text-2xl cursor-pointer overflow-hidden animate-bounce">
              <MapPinIcon className="h-10 " />
            </p>
          </Marker>
        </div>
      ))}
      ;
    </ReactMapGL>
  );
}

export default Map;
