import { useState, useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308];

export default function useGetLocation() {
  const [coords, setCoords] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function onSuccess(position: GeolocationPosition) {
      setCoords([position.coords.latitude, position.coords.longitude]);
      setError(null);
    }
    function onError(error: GeolocationPositionError) {
      console.error("Error on get location:", error.message);
      setCoords(defaultCoords);
      setError(error.message);
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      setCoords(defaultCoords);
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true,
      });
    }
  }, []);

  return { coords, error };
}
