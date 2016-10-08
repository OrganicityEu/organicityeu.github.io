![Organicity Logo](../images/organicity_logo_pink_100.png)

[Back to the Guidelines Overview page](https://organicityeu.github.io/).

# Federated Data Assets

....

## Aarhus

## London

### London Borough Profiles
Greater London is divided into 33 Boroughs. For each Borough we gather aggregate statistics related to mobility, air quality and communities. Some statistics are based on census that is collected every 10 years, while other statistics are updated more frequently. Example statistics include population density, average income, average house price, fraction of greenspace and average number of cars per household. The data is gathered from the [London Datastore](http://data.london.gov.uk/), [Public Health England](http://phe.gov.uk/) and other sources.

Example:
```json
{
	"id": "urn:oc:entity:london:districtProfile:uk.gov.london:E09000013",
	"type": "urn:oc:entityType:districtProfile",
	"carbonEmission": {
		"type": "urn:oc:attributeType:carbonEmission",
		"value": "971.336623467994",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:kilotonne",
				"value": "kilotonne"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2013-12-31T23:59:59"
			}
		}
	},
	"cyclingFrequency": {
		"type": "urn:oc:attributeType:cyclingFrequency",
		"value": "19.882866745828885",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	},
	"geometry": {
		"type": "oc:geo:json",
		"value": {
			"coordinates": [
				[
					[
						[-0.2333, 51.532],
						[-0.2456, 51.4908],
						[-0.203, 51.4933],
						[-0.2333, 51.532]
					]
				]
			],
			"type": "MultiPolygon"
		},
		"metadata": {}
	},
	"greenspace": {
		"type": "urn:oc:attributeType:greenspace",
		"value": "19.1",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2005-12-31T23:59:59"
			}
		}
	},
	"housePrice": {
		"type": "urn:oc:attributeType:housePrice",
		"value": "661000.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:monetaryValuePounds",
				"value": "monetayValuePounds"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	},
	"householdCarOwnership": {
		"type": "urn:oc:attributeType:householdCarOwnership",
		"value": "0.544025313314307",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:count",
				"value": "count"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2011-12-31T23:59:59"
			}
		}
	},
	"householdIncome": {
		"type": "urn:oc:attributeType:householdIncome",
		"value": "62910.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:monetaryValuePounds",
				"value": "monetayValuePounds"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2013-12-31T23:59:59"
			}
		}
	},
	"location": {
		"type": "geo:point",
		"value": "-0.22078893731921054,51.49501040208028",
		"metadata": {}
	},
	"obesity": {
		"type": "urn:oc:attributeType:obesity",
		"value": "14.918342434625048",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
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
			"urls": {
				"type": "url",
				"value": "http://data.london.gov.uk/dataset/london-borough-profiles,http://data.london.gov.uk/dataset/walking-and-cycling-borough,http://www.noo.org.uk/visualisation"
			}
		}
	},
	"populationDensity": {
		"type": "urn:oc:attributeType:populationDensity",
		"value": "110.80989224363077",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:peoplePerHectare",
				"value": "peoplePerHectare"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"walkingFrequency": {
		"type": "urn:oc:attributeType:walkingFrequency",
		"value": "61.00442050708806",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2014-12-31T23:59:59"
			}
		}
	}
}
```
Note: The area attribute has been simplified in this example due to space reasons.

### London Traffic Counts
In October every year the [Department for Transport](http://dft.gov.uk/) performs an extensive [traffic count](http://www.dft.gov.uk/traffic-counts/) throughout thousands for locations in England. The traffic counts are presented as daily averages of different vehicle types (bicycles, motorcycles, cars, vans, trucks, etc.) that pass through a certain point.

Example:
```json
{
	"id": "urn:oc:entity:london:trafficCount:uk.gov.dft:DfT-TrafficCounter-6000",
	"type": "urn:oc:entityType:trafficstats",
	"location": {
		"type": "geo:point",
		"value": "-0.23795282516501054,51.587519079277754",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "Street-level traffic count data from UK Department for Transport.",
		"metadata": {
			"unit": {
				"type": "NOT_APPLIED",
				"value": "NOT_APPLIED"
			},
			"urls": {
				"type": "url",
				"value": "http://www.dft.gov.uk/traffic-counts/"
			}
		}
	},
	"trafficIntensity:bicycle": {
		"type": "urn:oc:attributeType:trafficIntensity:bicycle",
		"value": "0.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:vehiclePerDay",
				"value": "vehiclePerDay"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"trafficIntensity:bus": {
		"type": "urn:oc:attributeType:trafficIntensity:bus",
		"value": "320.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:vehiclePerDay",
				"value": "vehiclePerDay"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"trafficIntensity:car": {
		"type": "urn:oc:attributeType:trafficIntensity:car",
		"value": "35237.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:vehiclePerDay",
				"value": "vehiclePerDay"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"trafficIntensity:heavyGoodsVehicle": {
		"type": "urn:oc:attributeType:trafficIntensity:heavyGoodsVehicle",
		"value": "3271.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:vehiclePerDay",
				"value": "vehiclePerDay"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"trafficIntensity:lightGoodsVehicle": {
		"type": "urn:oc:attributeType:trafficIntensity:lightGoodsVehicle",
		"value": "7204.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:vehiclePerDay",
				"value": "vehiclePerDay"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	},
	"trafficIntensity:motorcycle": {
		"type": "urn:oc:attributeType:trafficIntensity:motorcycle",
		"value": "493.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:vehiclePerDay",
				"value": "vehiclePerDay"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2015-12-31T23:59:59"
			}
		}
	}
}
```

### Transport
[Transport for London](http://api.tfl.gov.uk) and [Transport API](http://www.transportapi.com/) provide API endpoints for getting information about the London public transport network, tube stations, bus stops, citybicycle rental stations, tube lines and bus lines. In the first round of experimentation we

Example:
```json
{
	"id": "urn:oc:entity:london:transportService:TransportAPI:VIC",
	"type": "urn:oc:entityType:transportStation",
	"access:scope": {
		"type": "urn:oc:attributeType:access:scope",
		"value": "public",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-0.144544,51.495256",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "Train station performance indicators from the TransportAPI",
		"metadata": {
			"unit": {
				"type": "NOT_APPLIED",
				"value": "NOT_APPLIED"
			},
			"urls": {
				"type": "url",
				"value": "http://fcc.transportapi.com/"
			}
		}
	},
	"transportServicePerformance": {
		"type": "urn:oc:attributeType:transportServicePerformance",
		"value": "96.0",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:percent",
				"value": "percent"
			},
			"TimeInstant": {
				"type": "urn:oc:attributeType:ISO8601",
				"value": "2016-09-29T16:17:38+01:00"
			}
		}
	}
}
```

### London Air Quality Network
The [London Air Quality Network](http://www.londonair.org.uk/) (LAQN) provides pollution measurements that are essential to underpin air quality management and health studies. The majority of London’s 33 boroughs supply measurements to the network and in addition these data are increasingly being supplemented by measurements from local authorities surrounding London, thereby providing an overall perspective of air pollution in London. The LAQN is operated and managed by the Environmental Research Group (ERG) at King’s College London. QA/QC audits are carried out by the National Physical Laboratory (NPL).

Based on the 2014 [LAQN report](http://www.londonair.org.uk/london/reports/2014_LAQN_Summary_Report.pdf), the air quality observations made are Carbon Monoxide (CO), Nitrogen Dioxide (NO2), Sulphur dioxide (SO2), Ozone (O3), Particles (PM10) and Particles (PM2.5) along with environmental observations like Wind Speed, Temperature, Rainfall, etc. in over 60 monitoring sites.

ACTION for Borkur: Add example.

### Environmental Sensors - QEOP
A number of environmental stations (3 weather stations) have been deployed in Queen Elizabeth Olympic Park (QEOP) measuring environmental conditions of the park like: temperature, rain levels, wind direction and intensity, humidity, barometric pressure and light intensity.

Moreover, there are recorded data from 10 distinct points in the city (Temperature, Humidity, Nitrogen Oxide, Nitrogen Dioxide, Carbon Dioxide) for year 2015.

ACTION for Borkur: Add example.

## Santander


