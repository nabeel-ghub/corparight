// src/components/MapLibreView.tsx
import { useEffect } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
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
      center={[12.995109, 77.541590]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
     <MapLibreTileLayer/>
        <Marker position={[12.995109, 77.541590]}
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