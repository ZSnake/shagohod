export const apikey = process.env.MAPS_KEY || 'fake_api_key';
export const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apikey}`;
