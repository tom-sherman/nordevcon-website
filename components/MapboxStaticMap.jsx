const apiKey = process.env.MAPBOX_API_KEY;
const theme = "mapbox/dark-v10";

export default function MapboxStaticMap({ lat, lon, size, icon, height, width }) {
  let src = `https://api.mapbox.com/styles/v1/${theme}/static/pin-${size}-${icon}+E53E3E(${lon},${lat})/${lon},${lat}, 15,0,45/${width}x${height}@2x?access_token=${apiKey}`;

  return (
    <img className="m-auto" src={src} height={height} width={width} alt="A Mapbox Map" />
  );
}
