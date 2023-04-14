import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/evanismsolanoy/clgg47cqs002901r7ghcba4x5"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    ></ReactMapGL>
  );
}

export default Map;
