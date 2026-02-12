// src/components/MapLibreView.tsx
import { useEffect, useState, useRef } from "react";
import { MapContainer, Marker, Popup, useMap, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "maplibre-gl/dist/maplibre-gl.css";
import L from "leaflet";
import "@maplibre/maplibre-gl-leaflet"; 
import userMarker from '../css/images/marker.png';

const MapLibreTileLayer = () => {
  const map = useMap();

  useEffect(() => {
    const layer = L.maplibreGL({
    style: "https://api.maptiler.com/maps/openstreetmap/style.json?key=cwnkSwLaOP2NIDCL3che",
    });
    layer.addTo(map);
    map.attributionControl.addAttribution(" ");
    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  return null;
};

const MapLibreView = () => {
    const customIcon = L.icon({
        iconUrl: userMarker,
        iconSize: [80, 45],
        iconAnchor: [40, 22.5],
        popupAnchor: [0, -40],
    })

  return (
    <>
    <MapContainer
      center={[38.912753, -77.032194]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
     <MapLibreTileLayer/>
        <Marker position={[38.912753, -77.032194]}
                icon={customIcon} 
                draggable={false}
                >
          <Popup closeButton={false} autoClose={false} closeOnClick={false}>
            <div style={{
                color: "white",
                backgroundColor: "#1c1c1c",
                background: "#1c1c1c",
                padding: "0",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "500",
                maxWidth: 200,
                maxHeight: 150
            }}>Globalwave</div>
          </Popup>
        </Marker>
    </MapContainer>
    </>
  );
};

export default MapLibreView;