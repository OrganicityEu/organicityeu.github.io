![Organicity Logo](../images/organicity_logo_pink_100.png)

[Back to the Guidlines Overview page](https://organicityeu.github.io/).

# Assets Data Model

This is a WIP documentation on the Organcity Assets Data Model.

For the organization and discovery of data sources, OC is relying on the NGSI 9/10
[NGSI9/10](https://forge.fiware.org/plugins/mediawiki/wiki/fiware/index.php/NGSI-9/NGSI-10_information_model) information model. As depicted in the following diagram, the underlying data model of NGSI
9/10 consists of Asset Element, Asset Attributes and Metadata

![Asset Data Model](./figs/data_model.png "Asset Data Model")

## Geospatial properties
 
The geospatial properties of a context entity can be represented by means of regular context attributes. The provision of geospatial properties enables the resolution of geographical queries. Two different syntaxes are supported:

###Simple Location Format

This is the basic model for adding a simple single point location to an asset.

*Points are always always a string containing a valid longitude-latitude pair, separated by comma.﻿⁠⁠*

```
{
  "location": {
    "value": "-0.2379, 51.5875",
    "type": "geo:point"
  }
}
```
###GeoJson

This is model supports complex assets geometries representations by supporting standard [GeoJSON](http://geojson.org/geojson-spec.html#geometry-objects) geometry objects.

*Points are always always an 2 items array containing a valid longitude and latitude pair.*

```
{
  "location": {
    "value": {
      "type": "Point",
      "coordinates": [2.186447514, 41.3763726] 
    },
    "type": "geo:json"
  }
}
```