import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type Coordinates = [number, number];

type MapProps = {
  center: Coordinates; // Центр карты
  zoom: number; // Уровень увеличения карты
  markers: Coordinates[]; // Координаты всех маркеров
  activeMarker?: Coordinates | null; // Координаты активного маркера (подсвечивается)
};

const Map: React.FC<MapProps> = ({ center, zoom, markers, activeMarker }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current, {
        center,
        zoom,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }),
        ],
      });

      markers.forEach((marker) => {
        const iconUrl =
          activeMarker && marker[0] === activeMarker[0] && marker[1] === activeMarker[1]
            ? 'img/pin-active.svg'
            : 'img/pin.svg';

        L.marker(marker, {
          icon: L.icon({
            iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          }),
        }).addTo(map);
      });

      return () => {
        map.remove();
      };
    }
  }, [center, zoom, markers, activeMarker]);

  return <div ref={mapRef} className="cities__map" style={{ height: '100%' }} />;
};

export default Map;
