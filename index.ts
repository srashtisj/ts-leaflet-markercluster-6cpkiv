// Import stylesheets
import './style.css';

import 'leaflet';
import { MarkerClusterGroup } from 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet/dist/leaflet.css';

const L = window['L'];

export const POLSKA_SZER_GEOGR = 51.9874;
export const POLSKA_DL_GEOGR = 19.0162;
export const POLSKA_ZOOM = 5;

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
});
const map = L.map('googleMapsPlaner', {
  center: [POLSKA_SZER_GEOGR, POLSKA_DL_GEOGR],
  zoom: POLSKA_ZOOM,
  zoomControl: true,
  layers: [tiles]
});

const markerIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  // specify the path here
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png'
});

const image = `
    <img width="40px" height="40px" src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 394 549' version='1.1' xmlns='http://www.w3.org/2000/svg'%0A%3E%3Cpath id='path2' d='M177.591,547.792c0,0.1 0.2,0.3 0.2,0.3c0,0 175.2,-269 175.2,-357.4c0,-130.1 -88.8,-186.7 -175.4,-186.9c-86.6,0.2 -175.4,56.8 -175.4,186.9c0,88.4 175.3,357.4 175.3,357.4l0.1,-0.3Zm175.774,-460.852c-2.266,-2.742 -6.254,-1.553 -4.638,1.197c0.033,0.058 0.053,0.097 0.084,0.156c14.557,27.556 23.18,61.704 23.18,102.954c0,77.386 -118.063,263.796 -159.204,328.597c10.694,17.061 17.332,27.248 17.332,27.248l0.1,-0.3c-0,0.1 0.2,0.3 0.2,0.3c-0,0 163.572,-245 163.572,-333.4c0,-54.92 -15.824,-96.743 -40.626,-126.752Z' style='fill:%233a3a3a;fill-rule:nonzero;' /%3E%3Ctext x='104.175px' y='238.598px' style='font-family:%39OpenSans-Regular%39, %39Open Sans%39, sans-serif;font-size:142.527px;fill:%23fff;' %3Ex3%3C/text%3E%3C/svg%3E%0A"/>
    `;
    const imageURL = `data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 394 549' version='1.1' xmlns='http://www.w3.org/2000/svg'%0A%3E%3Cpath id='path2' d='M177.591,547.792c0,0.1 0.2,0.3 0.2,0.3c0,0 175.2,-269 175.2,-357.4c0,-130.1 -88.8,-186.7 -175.4,-186.9c-86.6,0.2 -175.4,56.8 -175.4,186.9c0,88.4 175.3,357.4 175.3,357.4l0.1,-0.3Zm175.774,-460.852c-2.266,-2.742 -6.254,-1.553 -4.638,1.197c0.033,0.058 0.053,0.097 0.084,0.156c14.557,27.556 23.18,61.704 23.18,102.954c0,77.386 -118.063,263.796 -159.204,328.597c10.694,17.061 17.332,27.248 17.332,27.248l0.1,-0.3c-0,0.1 0.2,0.3 0.2,0.3c-0,0 163.572,-245 163.572,-333.4c0,-54.92 -15.824,-96.743 -40.626,-126.752Z' style='fill:%233a3a3a;fill-rule:nonzero;' /%3E%3Ctext x='104.175px' y='238.598px' style='font-family:%39OpenSans-Regular%39, %39Open Sans%39, sans-serif;font-size:142.527px;fill:%23fff;' %3Ex3%3C/text%3E%3C/svg%3E%0A`

const markerCluster = new MarkerClusterGroup({
  iconCreateFunction: function(cluster) {
    cluster.bindTooltip('tooltip text', { direction: 'left' });
    cluster.bindPopup('hi th').openPopup();
     return L.divIcon({ html: image,  className: 'dummy',
     iconSize:[40,40] });
    return L.icon({
      iconUrl: imageURL,
                    iconRetinaUrl: imageURL,
                    shadowUrl: imageURL,
                    
    })
  }
});

var marker = L.marker(new L.LatLng(POLSKA_SZER_GEOGR, POLSKA_DL_GEOGR), {
  title: 'my',
  icon: markerIcon
});

marker.bindTooltip('hello', {
  permanent: true
});

// markerCluster.on('clustermouseover', function(a) {
//   // a.layer is actually a cluster
//   console.log('cluster ' + a.layer.getAllChildMarkers().length);
// });

// markerCluster.on('clustermouseover', function(ev) {
//   ev.propagatedFrom.bindTooltip('tooltip text', {sticky: true}).openTooltip();
// }).on('clustermouseout', function(ev) {
//   ev.propagatedFrom.unbindTooltip();
// });

markerCluster.addLayer(marker);
var marker = L.marker(
  new L.LatLng(POLSKA_SZER_GEOGR + 1, POLSKA_DL_GEOGR + 1),
  { title: 'my', icon: markerIcon }
);
markerCluster.addLayer(marker);

map.addLayer(markerCluster);
