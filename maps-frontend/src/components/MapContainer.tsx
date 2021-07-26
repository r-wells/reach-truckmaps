import React, { useState, useEffect } from "react";
import { getTruckData } from "../services/getLocationData";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export interface Location {
  location: string;
  latitude: number;
  longitude: number;
}

type Cable = {
  assetType: string;
};

export interface TruckData {
  id: number;
  name: string;
  cable: Cable;
  engineHours: number;
  assetSerialNumber?: number;
  location: Array<Location>;
}

type MapStyles = {
  height: string;
  width: string;
};

type DefaultCenter = {
  lat: number;
  lng: number;
};

interface MapContainerProps {
  accessToken: string;
}

const MapContainer: React.FC<MapContainerProps> = (props) => {
  const [truckData, setTruckData] = useState<Array<TruckData>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTruckData(props.accessToken);
      if (!response) {
        window.location.href = "/login";
      }
      setTruckData(response.data.assets);
    };
    fetchData();
    const interval = setInterval(() => fetchData(), 10000);
    return () => clearInterval(interval);
  }, [props.accessToken]);

  const mapStyles: MapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter: DefaultCenter = {
    lat: 39.12,
    lng: -94.55,
  };
  if (!process.env.REACT_APP_GOOGLE_API_KEY) {
    return (
      <h2>
        Sorry, we're having trouble loading data right now, please try again
        later
      </h2>
    );
  } else {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY ?? ""}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={defaultCenter}
        >
          {truckData?.map((item) => {
            const truckPosition = {
              lat: item.location[0].latitude,
              lng: item.location[0].longitude,
            };
            return <Marker key={item.name} position={truckPosition} />;
          })}
        </GoogleMap>
      </LoadScript>
    );
  }
};

export default MapContainer;
