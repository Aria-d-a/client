import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";

function Map({ items }) {
  return (
    <MapContainer
      center={
        [44.578273, 38.0799335]
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[44.578273, 38.0799335]}>
        <Popup>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
