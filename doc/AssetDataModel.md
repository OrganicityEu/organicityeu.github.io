![Organicity Logo](../images/organicity_logo_pink_100.png)

[Back to the Guidlines Overview page](https://organicityeu.github.io/).

# Asset Data Model

For the organization and discovery of data sources, Organicity platform is relying on the NGSI 9/10
[NGSI9/10](https://forge.fiware.org/plugins/mediawiki/wiki/fiware/index.php/NGSI-9/NGSI-10_information_model) information model. As depicted in the following diagram, the underlying data model of NGSI
9/10 consists of Asset Element, Asset Attributes and Attribute Metadata

![Asset Data Model](./figs/data_model.png "Asset Data Model")

An asset is associated with multiple attributes and each attribute can be associated with various
metadata. Each one of the Organicity Sites and probably Organicity Experiments are contributing assets into
the facility. Assets can represent various types of urban resources from
IoT/sensor devices with sensors attached, smartphones, services, data sources stored as data
files (csv, xml, pdf) shared online or references to data­endpoints online (third party APIs and
data services). For purposes of clarity of how the data of the various assets can be accessed the
Organicity indexed assets can be organized in three major categories:

- **OC raw assets**: for this type of assets clients of OC platform can retrieve either their last
value or historic values. In general it is possible to post various queries for retrieving data
of the assets. The execution of the queries is managed by the OC facility and the OC
Site where this asset belongs to.
- **OC dataset assets**: ​ these assets are representing data sources encoded in datafiles
that are shared online (e.g., CKAN instances where the data sources are exposed as
files csv, xml, xls, pdf etc.). Organicity clients can discover these assets by posting discovery
queries on the OC platform based on their various metadata. The  platform just
delivers description of the assets. Organicity clients have to access the online urls to fetch the
files and then further process the dataset files to consume the data.
- **OC online data­endpoint assets**: ​ these assets are representing  online
data­endpoints/APIs for which the actual data access is not managed by the OC facility.
OC clients can discover these assets by posting discovery queries on OC platform based
on their various metadata. The Organicity platform just delivers description of the assets. OC
clients have to access the online endpoints in order to post queries and consume the
data.

In order to avoid conflicts with the identification of the assets and facilitating interaction with the
entity information to the experimenters, there are specific conventions that should be followed on
Asset, Attribute and Metadata definition.

## Asset Attributes and Metadata:
Each Asset Element has to be associated with a set of of attributes. Each Asset Attribute
might represent various parameters of the asset. In the case of an IoT device or a
smartphone it might represent a sensing or actuation capability of the device or a device
characteristic (static or not) like the human readable name of the device, its description,
its location and so on. In the case of more abstract assets attributes might represent
types of observations not produced by physical sensors (e.g., a bus reporting the number
of available seats or the number of the route). Each attribute consists of a type shared
amongst all Organicity sites, the actual value of the attribute and a list of metadata that describe
the value.

By utilizing the proper attributes for the description of Assets various visualization and
browsing options are made available through the Urban Data Observatory and the rest of the Organicity tools
including:
- GeoJson data browsing for attributes of assets referring to specific territories
- Time­series data browsing for attributes of assets with historical data
- combinations of the above cases

Each Metadata entry represents more characteristics of an attribute, like units of
measurement and data types of the attribute value etc.

Common attribute types (e.g., observation types) should be described with same format
by the Organicity sites and values should be represented at the same set of units (e.g., distance
in meters and temperature in degrees Centigrade).

During the federation of various assets from the Organicity City Sites (Aarhus, London, Santader) a list 
of common urn names for Asset Types, Attribute Types and Metadata has been created (Get [XLS](./figs/Organicity_URNs.xlsx) file).
It is recommended to use the available names when you are creating your assets.


### Types and Identification of Assets

Each entity should have an unique identifier in the form of
```
urn:oc:entity:[site]:[service]:[provider]:[group]:[entityName]
```
where:
- **urn:oc:entity:[site]:[service]:[provider]:[group]:[entityName]** ​ should be
unique across the whole Organicity facility.
- **[site]** is representing the federated Organicity site (e.g., London, Santader, Aarhus, Experimenters etc.). During the creation of your experiment you are going 
 to aquire the proper prefixes for your assets.
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
corresponding Organicity Site, service and provider. The same applies at the scope of an experiment.

Assets could represent devices, places, buildings, and many other entities (including virtual
objects). In Organicity, we define a set of OC Entity Types that can be extended in the future to
include more complex installations. Each entity has a specific resource type in the form
of ​ 
```
urn:oc:entityType:[Type]:[Name]​
```
where
- **[Type]** ​ could express the context type of the context representation of the asset
for example IoT device, smartphone, bicycle­station, weather­station etc.
- **[Name]** ​ is optional and can express some specialization of the used type. E.g. ...:iotdevice:noise  

See [XLS](./figs/Organicity_URNs.xlsx) for a recommendation list of asset types.

Examples of assets ids and types:
```
"contextElement": {
"id": "​urn:oc:entity:london:environmental:hydePark:weatherstation123​",
"type": "​urn:oc:entityType:weatherstation",
"attributes": [ … ]
} "
```
```
contextElement": {
"id": "​urn:oc:entity:experimenters:86d7edce-5092-44c0-bed8-da4beaa3fbc6:57eab2c2ad0302ad0b5c92c6:asset1243​",
"type": "​urn:oc:entityType:smartphone​",
"isPattern": "false",
"attributes": [ … ]
}
```

### Asset Attributes

Asset attributes can represent either various urban observations or other things like properties of the asset creating the observations.
Attributes can  have a name, a type and a value (**<name, type, value>​ **). Each attribute might represent:
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
The type should encode the type of observation shared in Organicity. Its quite important to describe only the type of observation that is 
represented and not other details  (like the period of observation, the method of observation etc.) in order to facilitate the discovery process and the joining of 
information. For example is the attribute expressed the speed of vehicles its recommended to use urn:oc:attributeType:speed and then express in metadata level if the speed is per hour or per minute etc.

**Attribute MetaData:** Some of the aforementioned attribute types might require a specific set of
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

Examples of Attributes and Metadata
```
carbonEmission: {
    type: "urn:oc:attributeType:carbonEmission",
    value: "971.336623467994",
    metadata: {
        unit: {
            type: "urn:oc:uom:kilotonne",
            value: "kilotonne"
        },
    TimeInstant: {
        type: "ISO8601",
        value: "2013-12-31T23:59:59"
    }
    }
}
```

See [XLS](./figs/Organicity_URNs.xlsx) for a recommendation list of asset types.

### Geospatial Asset Attributes
 
Asset can have spatial-information attached. It is recommended each assets to have a spatial attribute. For assets that are having a location the asset location format 
should be used, while other assets with more complex geometries (e.g. polygons for boroughs in the city) the complex geometry format can be used.  

####Asset Location Format

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
####Asset Complex Geometry Format

This is model supports complex assets geometries representations by supporting standard [GeoJSON](http://geojson.org/geojson-spec.html#geometry-objects) geometry objects.

* Attribute should be named as geometry and type should be oc:geo:json*

```
{
  "geometry": {
    "value": {
      "type": "Point",
      "coordinates": [2.186447514, 41.3763726] 
    },
    "type": "oc:geo:json"
  }
}
```

### Other designated Asset Attributes

There is a number of attributes that can be used for an asset that encode several aspects and facilitate several methods of Urban Data Observatory like the discovery process

####Last Update

This attribute encoded the time that an update to the assed has been performed
*This attribute is set by Organicity platform  *

```
TimeInstant: {
    type: "ISO8601",
    value: "2016-08-24T11:56:42+01:00"
}
```

####Comments and general asset description
 
```
{
  "description": {
    "value": "This is a general description of the asset",
    "type": "urn:oc:attributeType:description"
  }
}
```

####Ranking 
 
* This attribute is set by Organicity platform only. Posting an asset with this attribute will be rejected *

```
{
  "ranking": {
    "value": 0.7 ,
    "type": "urn:oc:attributeType:reputation"
  }
}
```


####Origin 

This attribute encodes the origin of information described in the asset.
 

```
origin: {
    type: "urn:oc:attributeType:origin",
    value: "Train station performance indicators from the TransportAPI",
    metadata: {
        unit: {
            type: "NOT_APPLIED",
            value: "NOT_APPLIED"
        },
        url1: {
            type: "url",
            value: "http://fcc.transportapi.com/"
        }
    }
}
```

```
"origin": {
    "type": "urn:oc:attributeType:origin"
    "value": "http://www.londonair.org.uk/LondonAir/API/"     
}
```

####Organicity datasource endpoint
 This attribute should describe if an Organicity client could retrieve historic   data through the OC
 platform of by consuming an external API service or  accessing an online file
 
```
"datasource": {
    "type": "urn:oc:attributeType:datasource"
    "value": "http://london.site.organicity.eu:8081/api/v1/entities/"
    "metadata": {
        "datasourceInternal": {
            "type": "urn:oc:datatype:boolean"
            "value": "true"
        }
    }
}
```

# Related Material

[Organicity Java Entities](https://github.com/OrganicityEu/OrganicityEntities) A project for creating and parsing Organicity Asset with Java.