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
	"id": "urn:oc:entity:london:districtProfile:uk.gov.london:E09000016",
	"type": "urn:oc:entityType:districtProfile",
	"area": {
		"type": "json",
		"value": {
			"coordinates": [
				[
					[
						[0.2321, 51.6272],
						[0.1431, 51.6183],
						[0.1496, 51.5681],
						[0.2321, 51.6272]
					]
				]
			],
			"type": "MultiPolygon"
		},
		"metadata": {}
	},
	"carbonEmission": {
		"type": "urn:oc:attributeType:carbonEmission",
		"value": "1161.2066312322656",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:kilotonne",
				"value": "kilotonne"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2013-12-31T23:59:59"
			}
		}
	},
	"cyclingFrequency": {
		"type": "urn:oc:attributeType:cyclingFrequency",
		"value": "5.231047848497513",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	},
	"greenspace": {
		"type": "urn:oc:attributeType:greenspace",
		"value": "59.3",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2005-12-31T23:59:59"
			}
		}
	},
	"housePrice": {
		"type": "urn:oc:attributeType:housePrice",
		"value": "250000.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:monetaryValuePounds",
				"value": "monetayValuePounds"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	},
	"householdCarOwnership": {
		"type": "urn:oc:attributeType:householdCarOwnership",
		"value": "1.210238788464902",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:count",
				"value": "count"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2011-12-31T23:59:59"
			}
		}
	},
	"householdIncome": {
		"type": "urn:oc:attributeType:householdIncome",
		"value": "44430.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:monetaryValuePounds",
				"value": "monetayValuePounds"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2013-12-31T23:59:59"
			}
		}
	},
	"location": {
		"type": "geo:point",
		"value": "0.2204196305373867,51.56312098009648",
		"metadata": {}
	},
	"obesity": {
		"type": "urn:oc:attributeType:obesity",
		"value": "0.24429498205867556",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "The London Borough profile is a combination of data from the London Datastore and Public Health England.",
		"metadata": {
			"unit": {
				"type": "NOT_APPLIED",
				"value": "NOT_APPLIED"
			},
			"origin:url:3": {
				"type": "url",
				"value": "http://www.noo.org.uk/visualisation"
			},
			"origin:url:1": {
				"type": "url",
				"value": "http://data.london.gov.uk/dataset/london-borough-profiles"
			},
			"origin:url:2": {
				"type": "url",
				"value": "http://data.london.gov.uk/dataset/walking-and-cycling-borough"
			}
		}
	},
	"populationDensity": {
		"type": "urn:oc:attributeType:populationDensity",
		"value": "22.047239552986298",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:peoplePerHectare",
				"value": "peoplePerHectare"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"walkingFrequency": {
		"type": "urn:oc:attributeType:walkingFrequency",
		"value": "46.500102208112395",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	}
}
```
Note: The area attribute has been simplified in this example due to space reasons.

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
 
  
