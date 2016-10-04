![Organicity Logo](../images/organicity_logo_pink_100.png)

[Back to the Guidelines Overview page](https://organicityeu.github.io/).

# Assets Discovery Service

The Asset Discovery API facilitates exploration and inspection of available assets.

## General Information

This API aims to create the foundations for a novel urban data observatory in the form of a service that allow various stakeholders (data scientists, city decision makers, organisations and citizens) to explore, with the intent to act, mixed static and real-time urban and social data streams and their exploitation in experimentation.

It comprises the following functionalities:

- Searching and filtering assets using multiple options
- Retrieving information about: services, sites and providers
- Retrieving assets data
- Retrieving experiments and the associated assets
- Support for [GeoJSON](http://geojson.org)

*This API is the core engine of the [Organicity Urban Data Observatory](http://observatory.organicity.eu/) and it is designed following the [OASC](http://oascities.org/) principles, as an extension of the [NGSI 9/10](https://forge.fiware.org/plugins/mediawiki/wiki/fiware/index.php/FI-WARE_NGSI-10_Open_RESTful_API_Specification) standard, specially following the new [FIWARE-NGSI v2 Specification](http://telefonicaid.github.io/fiware-orion/api/v2/latest/)*

## Documentation

- [API Documentation](https://organicityeu.github.io/api/AssetDiscovery.html)
- [API Swagger Blueprint](https://github.com/OrganicityEu/api/blob/master/raw/AssetDiscovery.yaml)

## Examples

### GeoJson and Leaflet

By using the [Asset Discovery Geographical](https://organicityeu.github.io/api/AssetDiscovery.html#operation--assets-geo-search-get) method we can quickly get assets data on [GeoJSON](http://geojson.org/geojson-spec.html) format. This allows to quickly develop map vizualizations by using libraries as [Leaflet](http://leafletjs.com/)

```javascript
var myMap = L.map('map');
var assetsLayer = new L.geoJson();
assetsLayer.addTo(myMap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  id: 'mapbox.streets-basic',
  accessToken: 'pk.eyJ1IjoidG9tYXNkaWV6IiwiYSI6ImRTd01HSGsifQ.loQdtLNQ8GJkJl2LUzzxVg'
}).addTo(myMap);

$.getJSON("http://discovery.organicity.eu/v0/assets/geo/search?city=london", function(layers) {

  $(layers).each(function(key, data) {
    $(layers[key].features).each(function(key, data) {
      console.log(data);
      assetsLayer.addData(data);
    });
  });

   myMap.fitBounds(assetsLayer.getBounds());
  
});
```

Look at the complete example in [Codepen.io](http://codepen.io/pral2a/pen/NRgakY)

## Status

[![Code Climate](https://codeclimate.com/github/OrganicityEu/organicity-discovery-api/badges/gpa.svg)](https://codeclimate.com/github/OrganicityEu/organicity-discovery-api)


