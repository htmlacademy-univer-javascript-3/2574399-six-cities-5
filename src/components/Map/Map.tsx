import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type Coordinates = [number, number];

type MapProps = {
  center: Coordinates; // Координаты центра карты
  zoom: number; // Уровень приближения
  markers: Coordinates[]; // Координаты маркеров
};

const Map: React.FC<MapProps> = ({ center, zoom, markers }) => {
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
        L.marker(marker).addTo(map);
      });

      return () => {
        map.remove();
      };
    }
  }, [center, zoom, markers]);

  return <div ref={mapRef} className="cities__map" style={{ height: '100%' }} />;
};

export default Map;
