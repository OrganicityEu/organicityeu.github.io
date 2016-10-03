![Organicity Logo](../images/organicity_logo_pink_100.png)

[Back to the Guidlines Overview page](https://organicityeu.github.io/).

# Asset Data Model

For the organization and discovery of data sources, OC is relying on the NGSI 9/10
[NGSI9/10](https://forge.fiware.org/plugins/mediawiki/wiki/fiware/index.php/NGSI-9/NGSI-10_information_model) information model. As depicted in the following diagram, the underlying data model of NGSI
9/10 consists of Asset Element, Asset Attributes and Metadata

![Asset Data Model](./figs/data_model.png "Asset Data Model")

An asset is associated with multiple attributes and each attribute can be associated with various
metadata. Each one of the OC Sites and probably OC Experiments are contributing assets into
the OC facility. Assets would be possibly represent various types of data sources from
IoT/sensor devices with sensors attached, smartphones, services, data sources stored as data
files (csv, xml, pdf) shared online or references to data­endpoints online (third party APIs and
data services). For purposes of clarity of how the data of the various assets can be accessed the
OC indexed assets can be grouped in 3 major categories:

- **OC raw assets**: for this type of assets clients of OC platform can retrieve either their last
value or historic values. In general it is possible to post various queries for retrieving data
of the assets. The execution of the queries is managed by the OC facility and the OC
Site where this asset belongs to.
- **OC dataset assets**: ​ these assets are representing data sources encoded in datafiles
that are shared online (e.g., CKAN instances where the data sources are exposed as
files csv, xml, xls, pdf etc.). OC clients can discover these assets by posting discovery
queries on the OC platform based on their various metadata. The OC platform just
delivers description of the assets. OC clients have to access the online urls to fetch the
files and then further process the dataset files to consume the data.
- **OC online data­endpoint assets**: ​ these assets are representing to online
data­endpoints/APIs for which the actual data access is not managed by the OC facility.
OC clients can discover these assets by posting discovery queries on OC platform based
on their various metadata. The OC platform just delivers description of the assets. OC
clients have to access the online endpoints in order to post queries and consume the
data.

In order to avoid conflicts with the identification of the assets and facilitating interaction with the
entity information to the experimenters, there are specific conventions that should be followed on
Asset, Attribute and Metadata definition.

## Properties of Assets (expressed as attributes) and Metadata:
Each Asset Element has to be associated with a set of of attributes. Each Asset Attribute
might represent various parameters of the asset. In the case of an IoT device or a
smartphone it might represent a sensing or actuation capability of the device or a device
characteristic (static or not) like the human readable name of the device, its description,
its location and so on. In the case of more abstract assets attributes it might represent
types of observations not produced by physical sensors (e.g., a bus reporting the number
of available seats or the number of the route). Each attribute consists of a type shared
amongst all OC sites, the actual value of the attribute and a list of metadata that describe
the value of the attribute better.

- By utilizing the proper attributes for the description of Assets various visualization and
browsing options are made available through the UDO and the rest of the OC tools
including
    -   time­series data browsing for attributes of assets with historical data
    -   geojson data browsing for attributes of assets referring to specific territories
    -   combinations of the above cases
- Each Metadata entry represents more characteristics of an attribute, like units of
measurement, datatypes of the attribute’s value and so on.
- Common attribute types (e.g., observation types) should be described with same format
by the OC sites and values should be represented at the same set of units (e.g., distance
in meters and temperature in degrees Centigrade).

## Type and Identification of Assets

Each entity should have an unique identifier in the form of
```
urn:oc:entity:[site]:[service]:[provider]:[group]:[entityName]
```
where:
- **urn:oc:entity:[site]:[service]:[provider]:[group]:[entityName]** ​ should be
unique across the whole OC facility.
- **[site]** is representing the federated OC site (e.g., london, santander, aarhus, etc.)
or federated assets by an experiment. This parameter is defined during the
registration of an OC site and is unique for all registered OC sites.
- **[service]** ​ is representing a smart city service/application domain for example
parking, garbage, environmental etc.
- **[provider]** is the logic separator for which service the asset belongs to. For
example, in a city, the bus company and waste management company can use
common names for different assets, as they use to work in separate silos. In
order to avoid that, the [​ provider] name allows us to avoid the duplication of
entityNames​ within the OC infrastructure for a particular site.
- **[group]**: This could be optional. ​ The group part can be used for grouping
assets under the same service and provider. It is responsibility of OS sites to
maintain proper group keys.
- **[entityName]**: ​ The Entity​ /​ Device identifier which should be unique at the
corresponding OS Site, service and provider.

Entities could be users, devices, places, buildings, and many other (including virtual
objects). In OC, we define a set of OC Entity Types that can be extended in the future to
include more complex installations. Each entity has a specific resource type in the form
of ​ 
```
urn:oc:entityType:[Type]:[Name]​\
```
where
- **[Name]** ​ could express the context type of the context representation of the asset
for example IoT device, smartphone, bicycle­station, weather­station etc.

Examples of assets ids and types:
```
"contextElement": {
"id": "​ urn:oc:entity:london:environmental:hydePark:weatherstation123​ ",
"type": "​ urn:oc:entityType:raw:iotdevice​ ",
"isPattern": "false",
"attributes": [ … ]
} "
```
```
contextElement": {
"id": "​ urn:oc:resource:london:noiselevels:experiment123:dev12345​ ",
"type": "​ urn:oc:entityType:raw:smartphone​ ",
"isPattern": "false",
"attributes": [ … ]
}
```

## Asset Attributes


 Asset attributes are in the form of ​ **<name, type, value>​ **. Each Asset is associated with a set of
 attributes. Each attribute might represent:
 - in the case of an IoT device or a smartphone: 
    - a ​ capability ​ of the device (sensing or actuation)
    - a ​ device attribute​ like:
        - description of device
        - location of the device
    - Management info:
        - hardware/software characteristics
        - communication interfaces,
        - latest activity
        - etc.
 -  in the case of more abstract resources like a bicycle docking station or bus station and
 so on, attributes might represent another type of observation like
    - number of available bicycles or
    - delay of the next bus
    - etc.
 - in the case of of a CKAN resource shared online as a file the attributes encode metadata
 like:
    - the creator of the file
    - last update
    - the file type: csv,xml, xls, pdf.
    - the url to download the file
    - etc.
- in the case of of an online web service sharing data attributes might represent
    - the url to query the web service
    - the url to retrieve documentation
    - the type of the web service (REST, SOAP)
    - etc.
    
**Attribute names**​ ​ might be a human readable strings.
 
**Attribute types** should follow the format: ​ 
```
urn:oc:attributeType:[type]​
```
     
**Attribute MetaData: S**ome of the aforementioned attribute types might require a specific set of
metadata like: Attribute types for sensor measurements require a datatype metadata or Attribute
types for sensor measurements require an unit of measurement metadata. Each Metadata
represents various characteristics of the associated attribute of the asset. Some examples might
be:
- device​ description ​ metadata e.g., other languages
- device​ location ​ metadata other representation of location like geohashing
- sensing ​ metadata: timestamp of the latest value, url of endpoint to retrieve historical
data of this device/sensor, description of sensor type, units of measurement and so on.
- actuation ​ metadata: url of endpoint to trigger actuation, description of actuation, tbd…
- other type of metadata

### Geospatial properties
 
The geospatial properties of a context entity can be represented by means of regular context attributes. The provision of geospatial properties enables the resolution of geographical queries. Two different syntaxes are supported:

####Simple Location Format

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
####GeoJson

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