![Organicity Logo](../images/organicity_logo_pink_100.png)

[Back to the Guidlines Overview page](https://organicityeu.github.io/).

# Federated Data Assets

....

## Aarhus

## London

### London Borough and Neighbourhood Profiles
Greater London is divided into 33 Boroughs. For each Borough and Neighbourhood we gather aggregate statistics related to mobility, air quality and communities. Some statistics are based on census that is collected every 10 years, while other statistics are updated more frequently. Example statistics include population density, average income, average house price, fraction of greenspace and average number of cars per household. The data is gathered from the [London Datastore](http://data.london.gov.uk/), [Public Health England](http://phe.gov.uk/) and other sources.

```json
{
	"id": "urn:oc:entity:london:districtProfile:uk.gov.london:E09000028",
	"type": "urn:oc:entityType:districtProfile",
	"context": {
		"service": "urn:oc:entityType:districtProfile",
		"provider": "uk.gov.london",
		"group": "null",
		"name": "urn:oc:entity:london:districtProfile:uk.gov.london:E09000028",
		"last_updated_at": 1472729511,
		"position": {
			"latitude": "51.474238816217806",
			"longitude": "-0.07405488959078453",
			"city": "London",
			"region": "England",
			"country_code": "UK",
			"country": "United Kingdom"
		}
	},
	"related": {
		"service": "urn:oc:entityType:districtProfile",
		"provider": "uk.gov.london",
		"group": "null",
		"site": {
			"id": "london",
			"name": "London",
			"description": "London is the capital and most populous city of England and the United Kingdom.",
			"position": [-0.1275, 51.507222],
			"links": "{\"wiki\":{\"href\":\"https://en.wikipedia.org/wiki/London\"}}"
		}
	},
	"data": {
		"context": {
			"time_instant": null,
			"created_at": 1472729511,
			"updated_at": 1472729511
		},
		"attributes": {
			"types": ["area", "cyclingFrequency", "origin", "housePrice", "populationDensity", "householdCarOwnership", "greenspace", "carbonEmission", "walkingFrequency", "location", "obesity", "householdIncome"],
			"data": {
				"area": {
					"type": "json",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": {
						"coordinates": [<SKIPPED FOR BREVITY>],
						"type": "MultiPolygon"
					}
				},
				"cyclingFrequency": {
					"type": "urn:oc:attributeType:cyclingFrequency",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "11.000514809905427",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:percent",
						"value": "percent"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2014-12-31T23:59:59"
					}]
				},
				"origin": {
					"type": "urn:oc:attributeType:origin",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "The London Borough profile is a combination of data from the London Datastore and Public Health England.",
					"md": [{
						"name": "unit",
						"type": "NOT_APPLIED",
						"value": "NOT_APPLIED"
					}, {
						"name": "origin:url:3",
						"type": "url",
						"value": "http://www.noo.org.uk/visualisation"
					}, {
						"name": "origin:url:1",
						"type": "url",
						"value": "http://data.london.gov.uk/dataset/london-borough-profiles"
					}, {
						"name": "origin:url:2",
						"type": "url",
						"value": "http://data.london.gov.uk/dataset/walking-and-cycling-borough"
					}]
				},
				"housePrice": {
					"type": "urn:oc:attributeType:housePrice",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "420000.0",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:monetaryValuePounds",
						"value": "monetayValuePounds"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2014-12-31T23:59:59"
					}]
				},
				"populationDensity": {
					"type": "urn:oc:attributeType:populationDensity",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "106.26417064937873",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:peoplePerHectare",
						"value": "peoplePerHectare"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2015-12-31T23:59:59"
					}]
				},
				"householdCarOwnership": {
					"type": "urn:oc:attributeType:householdCarOwnership",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "0.5018850376177111",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:count",
						"value": "count"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2011-12-31T23:59:59"
					}]
				},
				"greenspace": {
					"type": "urn:oc:attributeType:greenspace",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "24.9",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:percent",
						"value": "percent"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2005-12-31T23:59:59"
					}]
				},
				"carbonEmission": {
					"type": "urn:oc:attributeType:carbonEmission",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "1454.4848984840905",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:kilotonne",
						"value": "kilotonne"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2013-12-31T23:59:59"
					}]
				},
				"walkingFrequency": {
					"type": "urn:oc:attributeType:walkingFrequency",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "54.48956268601683",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:percent",
						"value": "percent"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2014-12-31T23:59:59"
					}]
				},
				"location": {
					"type": "geo:point",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "-0.07405488959078453,51.474238816217806"
				},
				"obesity": {
					"type": "urn:oc:attributeType:obesity",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "0.21118580478441834",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:percent",
						"value": "percent"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2014-12-31T23:59:59"
					}]
				},
				"householdIncome": {
					"type": "urn:oc:attributeType:householdIncome",
					"creDate": 1472729511,
					"modDate": 1472729511,
					"value": "48000.0",
					"md": [{
						"name": "unit",
						"type": "urn:oc:uom:monetaryValuePounds",
						"value": "monetayValuePounds"
					}, {
						"name": "TimeInstant",
						"type": "ISO8601",
						"value": "2013-12-31T23:59:59"
					}]
				}
			}
		}
	}
}
```

### London Traffic Counts
In October every year the [Department for Transport](http://dft.gov.uk/) performs an extensive [traffic count](http://www.dft.gov.uk/traffic-counts/) throughout thousands for locations in England. The traffic counts are presented as daily averages of different vehicle types (bicycles, motorcycles, cars, vans, trucks, etc.) that pass through a certain point.

ACTION for Borkur: Add example. 

### Transport
[Transport for London](http://api.tfl.gov.uk) and [Transport API](http://www.transportapi.com/) provide API endpoints for getting information about the London public transport network, tube stations, bus stops, citybicycle rental stations, tube lines and bus lines. In the first round of experimentation we 

ACTION for Borkur: Add example. 

### London Air Quality Network
The [London Air Quality Network](http://www.londonair.org.uk/) (LAQN) provides pollution measurements that are essential to underpin air quality management and health studies. The majority of London’s 33 boroughs supply measurements to the network and in addition these data are increasingly being supplemented by measurements from local authorities surrounding London, thereby providing an overall perspective of air pollution in London. The LAQN is operated and managed by the Environmental Research Group (ERG) at King’s College London. QA/QC audits are carried out by the National Physical Laboratory (NPL).

Based on the 2014 [LAQN report](http://www.londonair.org.uk/london/reports/2014_LAQN_Summary_Report.pdf), the air quality observations made are Carbon Monoxide (CO), Nitrogen Dioxide (NO2), Sulphur dioxide (SO2), Ozone (O3), Particles (PM10) and Particles (PM2.5) along with environmental observations like Wind Speed, Temperature, Rainfall, etc. in over 60 monitoring sites.

ACTION for Borkur: Add example. 

### Environmental Sensors - QEOP
A number of environmental stations (3 weather stations) have been deployed in Queen Elizabeth Olympic Park (QEOP) measuring environmental conditions of the park like: temperature, rain levels, wind direction and intensity, humidity, barometric pressure and light intensity.

Moreover, there are recorded data from 10 distinct points in the city (Temperature, Humidity, Nitrogen Oxide, Nitrogen Dioxide, Carbon Dioxide) for year 2015. 

ACTION for Borkur: Add example. 

## Santander
 
  
