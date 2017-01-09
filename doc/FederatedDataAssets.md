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
	"location": {
		"type": "geo:point",
		"value": "-0.22078893731921054,51.49501040208028",
		"metadata": {}
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

```json
{
	"id": "urn:oc:entity:london:aqn:CD9",
	"type": "urn:oc:entityType:iotdevice",
	"location": {
		"type": "geo:point",
		"value": "-0.129053205282516,51.5277066194645",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "http://www.londonair.org.uk/LondonAir/API/",
		"metadata": {
			"unit": {
				"type": "NOT_APPLIED",
				"value": "NOT_APPLIED"
			}
		}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://london.site.organicity.eu:8081/api/v1/entities/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:datatype:boolean",
				"value": "true"
			}
		}
	},
	"description": {
		"type": "urn:oc:attributeType:description",
		"value": "CD9",
		"metadata": {}
	},
	"chemicalAgentAtmosphericConcentration:NO": {
		"type": "urn:oc:attributeType:chemicalAgentAtmosphericConcentration:NO",
		"value": "46.2",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:microgramPerCubicMetre",
				"value": "microgramPerCubicMetre"
			},
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"chemicalAgentAtmosphericConcentration:airParticlesPM10": {
		"type": "urn:oc:attributeType:chemicalAgentAtmosphericConcentration:airParticlesPM10",
		"value": "25.8",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:miligramPerCubicMetre",
				"value": "miligramPerCubicMetre"
			},
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"chemicalAgentAtmosphericConcentration:airParticlesPM25": {
		"type": "urn:oc:attributeType:chemicalAgentAtmosphericConcentration:airParticlesPM25",
		"value": "17.5",
		"metadata": {
			"unit": {
				"type": "urn:oc:uom:miligramPerCubicMetre",
				"value": "miligramPerCubicMetre"
			},
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	}
}
```

### Environmental Sensors - QEOP
A number of environmental stations (3 weather stations) have been deployed in Queen Elizabeth Olympic Park (QEOP) measuring environmental conditions of the park like: temperature, rain levels, wind direction and intensity, humidity, barometric pressure and light intensity.

Moreover, there are recorded data from 10 distinct points in the city (Temperature, Humidity, Nitrogen Oxide, Nitrogen Dioxide, Carbon Dioxide) for year 2015.

```json
{
	"id": "urn:oc:entity:london:enableiot:fixed:ICRI-QEOP-0002",
	"type": "urn:oc:entityType:iotdevice",
	"location": {
		"type": "geo:point",
		"value": "-0.014934,51.547581",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "Intel QeoP Deployments",
		"metadata": {
			"unit": {
				"type": "NOT_APPLIED",
				"value": "NOT_APPLIED"
			}
		}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://london.site.organicity.eu:8081/api/v1/entities",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:datatype:boolean",
				"value": "true"
			}
		}
	},
	"description": {
		"type": "urn:oc:attributeType:description",
		"value": "ICRI-QEOP-0002active",
		"metadata": {}
	},
	"10_Min_Avg_Wind_Speed": {
		"type": "urn:oc:attributeType:windSpeed",
		"value": "4.83",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Barometer": {
		"type": "urn:oc:attributeType:atmosphericPressure",
		"value": "771.9568",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Day_ET": {
		"type": "urn:oc:attributeType:rainfall",
		"value": "0.0",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Day_Rain": {
		"type": "urn:oc:attributeType:rainfall",
		"value": "0.0",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Inside_Humidity": {
		"type": "urn:oc:attributeType:relativeHumidity",
		"value": "0.34",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Inside_Temperature": {
		"type": "urn:oc:attributeType:temperature:ambient",
		"value": "28.72222",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Month_ET": {
		"type": "urn:oc:attributeType:rainfall",
		"value": "0.0",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Month_Rain": {
		"type": "urn:oc:attributeType:rainfall",
		"value": "1.05",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Outside_Humidity": {
		"type": "urn:oc:attributeType:relativeHumidity",
		"value": "0.71",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Outside_Temperature": {
		"type": "urn:oc:attributeType:temperature:ambient",
		"value": "13.61111",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Wind_Direction": {
		"type": "urn:oc:attributeType:windDirection",
		"value": "37.0",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Wind_Speed": {
		"type": "urn:oc:attributeType:windSpeed",
		"value": "11.27",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Year_ET": {
		"type": "urn:oc:attributeType:rainfall",
		"value": "0.0",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	},
	"Year_Rain": {
		"type": "urn:oc:attributeType:rainfall",
		"value": "110.8",
		"metadata": {
			"datatype": {
				"type": "urn:oc:datatype:numeric",
				"value": "numeric"
			}
		}
	}
}
```

## Santander

### Traffic
#### Traffic cameras. 
Four traffic cameras in the city provide real time images about the status of the traffic in different areas of the city.
```json
{
	"id": "urn:oc:entity:santander:traffic:camera:02",
	"type": "urn:oc:entityType:camera",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2017-01-09T11:17:33.000Z",
		"metadata": {}
	},
	"image": {
		"type": "urn:oc:attributeType:image",
		"value": "http://datos.santander.es/files/camara_castilla/castilla_20170109121732.jpg",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "Castilla Hermida",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "Santander City",
		"metadata": {}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": "-1",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	}
}
```
#### Vehicle count sensors
Placed at the main entrance of the city, they provide information about the occupancy and traffic intensity in the different lanes of the main roads.
```json
{
	"id": "urn:oc:entity:santander:traffic:fixed:3306",
	"type": "urn:oc:entityType:vehicleCounter",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T06:08:08.000Z",
		"metadata": {}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://mu.tlmat.unican.es:8098/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:dataType:boolean",
				"value": "boolean"
			}
		}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.82782,43.45135",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "SmartSantander",
		"metadata": {}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": "-1",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	},
	"roadOccupancy": {
		"type": "urn:oc:attributeType:speed:roadOccupancy",
		"value": "44",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:vehiclesPerMinute"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "Measurements calculated in the last minute"
			}
		}
	},
	"trafficIntensity": {
		"type": "urn:oc:attributeType:trafficIntensity",
		"value": "14",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:vehiclesPerMinute"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "Measurements calculated in the last minute"
			}
		}
	}
}

```
#### Vehicle speed sensors 
Placed at the main entrance of the city, they provide information about the occupancy, the count of vehicles, the median and average speed in the different lanes of the main roads.
```json
{
	"id": "urn:oc:entity:santander:traffic:fixed:3337",
	"type": "urn:oc:entityType:vehicleSpeed",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T06:08:08.000Z",
		"metadata": {}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://mu.tlmat.unican.es:8098/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:dataType:boolean",
				"value": "boolean"
			}
		}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.83322,43.46699",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "SmartSantander",
		"metadata": {}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": "-1",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	},
	"roadOccupancy": {
		"type": "urn:oc:attributeType:speed:roadOccupancy",
		"value": "56",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:vehiclesPerMinute"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "Measurements calculated in the last minute"
			}
		}
	},
	"speed:average": {
		"type": "urn:oc:attributeType:speed:average",
		"value": "53",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:kilometrePerHour"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "Measurements calculated in the last minute"
			}
		}
	},
	"speed:median": {
		"type": "urn:oc:attributeType:speed:median",
		"value": "46",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:kilometrePerHour"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "Measurements calculated in the last minute"
			}
		}
	},
	"trafficIntensity": {
		"type": "urn:oc:attributeType:trafficIntensity",
		"value": "14",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:vehiclesPerMinute"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "Measurements calculated in the last minute"
			}
		}
	}
}
```
#### Magnetic Loops 
It provides real time information about the traffic intensity, the occupancy of the roads and the load, based on the measurements gathered by magnetic loops deployed along the city.

```json
{
	"id": "urn:oc:entity:santander:traffic:magneticLoop:3030",
	"type": "urn:oc:entityType:magneticLoop",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2017-01-09T12:28:00.000Z",
		"metadata": {}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://mu.tlmat.unican.es:8098/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:dataType:boolean",
				"value": "boolean"
			}
		}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.8005109,43.4709885",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "SICE",
		"metadata": {}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": "-1",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	},
	"roadLoad": {
		"type": "urn:oc:attributeType:roadLoad",
		"value": "10",
		"metadata": {}
	},
	"roadOccupancy": {
		"type": "urn:oc:attributeType:roadOccupancy",
		"value": "2",
		"metadata": {}
	},
	"trafficIntensity": {
		"type": "urn:oc:attributeType:trafficIntensity",
		"value": "240",
		"metadata": {}
	}
}
```

### Parking
Real time information of available parking spots within zone 30. A set of 400 ferromagnetic sensors are placed under the asphalt in zone 30 of the Santander city centre, providing real time information about the status of occupancy of the different parking spots.
```json
{
	"id": "urn:oc:entity:santander:parking:np3922",
	"type": "parkingSensor",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T12:00:32.000Z",
		"metadata": {}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://mu.tlmat.unican.es:8098/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:dataType:boolean",
				"value": "boolean"
			}
		}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.799430501,43.463917645",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "SmartSantander",
		"metadata": {}
	},
	"presenceStatus:parking": {
		"type": "urn:oc:attributeType:presenceStatus:parking",
		"value": "true",
		"metadata": {
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "True means that the parking spot is occupied while false it is available"
			}
		}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": "-1",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	}
}
```

#### Parking reserved for people with dissabilities.
It provides information about the parking spots reserved for people with disabilities. 
```json
{
	"id": "urn:oc:entity:santander:parking:disabledpeople:24189",
	"type": "parkingSpot:disabledPeople",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-09-05T22:35:01.000Z",
		"metadata": {}
	},
	"coordinates:utmx": {
		"type": "urn:oc:attributeType:coordinates:utmx",
		"value": "434340.745908154",
		"metadata": {}
	},
	"coordinates:utmy": {
		"type": "urn:oc::attributeType:coordinates:utmy",
		"value": "4811961.04121813",
		"metadata": {}
	},
	"parkingspots:angled": {
		"type": "urn:oc:attributeType:parkingspots:angled",
		"value": "",
		"metadata": {}
	},
	"parkingspots:inline": {
		"type": "urn:oc:attributeType:parkingspots:inline",
		"value": "1",
		"metadata": {}
	},
	"street:name": {
		"type": "urn:oc::attributeType:street:name",
		"value": "CL/ FEDERICO VIAL",
		"metadata": {}
	}
}
```

### Transport

#### Bus stops. 
A set of 415 assets, one per bus stop in the city, have been created. Those assets provide real time information about next buses reaching the bus stop, including the distance to reach the bus stop as well as the estimated time of arrival for the first and second bus coming.
```json
{
	"id": "urn:oc:entity:santander:publictransport:bus:stop:103",
	"type": "urn:oc:entityType:busStop",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-04T22:20:00.000Z",
		"metadata": {}
	},
	"address": {
		"type": "urn:oc:attributeType:address",
		"value": "Plaza de las Estaciones S/N",
		"metadata": {}
	},
	"bus:direction": {
		"type": "urn:oc:attributeType:bus:direction",
		"value": "Bº Pesquero",
		"metadata": {}
	},
	"bus:stopName": {
		"type": "urn:oc:attributeType:bus:stopName",
		"value": "Las Estaciones",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.8107700513716405,43.45908154114637",
		"metadata": {}
	}
}
```
#### Taxi stops. 
These assets provide real time information about taxi availability in each particular stop, based on the information provided by the fleet management systems deployed by the two taxi associations.
```json
{
	"id": "urn:oc:entity:santander:transport:taxis:stop:1",
	"type": "urn:oc:entityType:taxis:stop",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T00:01:01.000Z",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.7886569,43.463448",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:taxis:stops:name",
		"value": "SAN MARTIN",
		"metadata": {}
	}
}
```
#### Bike stops. 
A set of 16 assets has been created, providing information about the number of available public-hire bikes and also the number of places to return such bikes.
```json
{
	"id": "urn:oc:entity:santander:transport:bikestation:12",
	"type": "urn:oc:entityType:bikeStop",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2017-01-09T09:26:13.000Z",
		"metadata": {}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://mu.tlmat.unican.es:8098/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:dataType:boolean",
				"value": "boolean"
			}
		}
	},
	"feeSpaces": {
		"type": "urn:oc:attributeType:freeSpaces",
		"value": 9,
		"metadata": {}
	},
	"freeBikes": {
		"type": "urn:oc:attributeType:freeBikes",
		"value": 6,
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.8248012423,43.4579662522",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "012_CALLE ALTA",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "TusBic",
		"metadata": {}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": -1,
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	}
}
```


### Districts and sections 
#### Districts
```json
{
	"id": "urn:oc:entity:santander:districts:D03",
	"type": "urn:oc:entityType:district",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2017-01-04T11:16:41.000Z",
		"metadata": {}
	},
	"location": {
		"type": "geo:json",
		"value": {
			"type": "Polygon",
			"coordinates": [
				[
					[-3.79124, 43.4685],
					[-3.79199, 43.4686],
					[-3.79221, 43.4686],
					[-3.79238, 43.4686],
					[-3.79255, 43.4686],
					[-3.79263, 43.4686],
					[-3.79294, 43.4685],
					[-3.79343, 43.4685],
					[-3.79366, 43.4685],
					[-3.79414, 43.4685],
					[-3.79476, 43.4684],
					[-3.79521, 43.4684],
					[-3.79543, 43.4684],
					[-3.7956, 43.4684],
					[-3.7958, 43.4684],
					[-3.79623, 43.4685],
					[-3.79653, 43.4685],
					[-3.79665, 43.4685],
					[-3.79679, 43.4685],
					[-3.79701, 43.4685],
					[-3.79723, 43.4685],
					[-3.79752, 43.4685],
					[-3.79795, 43.4684],
					[-3.79886, 43.4684],
					[-3.79928, 43.4683],
					[-3.79947, 43.4683],
					[-3.79966, 43.4683],
					[-3.79994, 43.4682],
					[-3.80002, 43.4681],
					[-3.80114, 43.4678],
					[-3.80134, 43.4678],
					[-3.80174, 43.4677],
					[-3.80205, 43.4676],
					[-3.80219, 43.4676],
					[-3.80233, 43.4675],
					[-3.80265, 43.4675],
					[-3.80307, 43.4675],
					[-3.80348, 43.4675],
					[-3.80393, 43.4675],
					[-3.80426, 43.4675],
					[-3.80437, 43.4675],
					[-3.80476, 43.4675],
					[-3.80507, 43.4674],
					[-3.80528, 43.4674],
					[-3.80539, 43.4674],
					[-3.80571, 43.4674],
					[-3.80598, 43.4674],
					[-3.80612, 43.4673],
					[-3.80624, 43.4673],
					[-3.80653, 43.4673],
					[-3.80678, 43.4672],
					[-3.80692, 43.4672],
					[-3.80706, 43.4672],
					[-3.80719, 43.4672],
					[-3.80732, 43.4672],
					[-3.80794, 43.4673],
					[-3.80799, 43.4673],
					[-3.80818, 43.4674],
					[-3.80833, 43.4674],
					[-3.80909, 43.4675],
					[-3.80947, 43.4676],
					[-3.80973, 43.4676],
					[-3.80992, 43.4676],
					[-3.80995, 43.4676],
					[-3.81028, 43.4676],
					[-3.81341, 43.4676],
					[-3.81353, 43.4676],
					[-3.81377, 43.4676],
					[-3.81385, 43.4676],
					[-3.81372, 43.4675],
					[-3.81347, 43.4674],
					[-3.812, 43.4666],
					[-3.81198, 43.4666],
					[-3.81197, 43.4666],
					[-3.81197, 43.4665],
					[-3.81199, 43.4665],
					[-3.81202, 43.4665],
					[-3.81206, 43.4665],
					[-3.8121, 43.4665],
					[-3.81278, 43.4667],
					[-3.81284, 43.4667],
					[-3.81291, 43.4667],
					[-3.81296, 43.4666],
					[-3.813, 43.4666],
					[-3.81303, 43.4666],
					[-3.81303, 43.4665],
					[-3.81301, 43.4664],
					[-3.81297, 43.4664],
					[-3.81294, 43.4664],
					[-3.8129, 43.4664],
					[-3.8128, 43.4663],
					[-3.81222, 43.4662],
					[-3.81213, 43.4662],
					[-3.81204, 43.4662],
					[-3.81195, 43.4662],
					[-3.81185, 43.4662],
					[-3.81169, 43.4662],
					[-3.81162, 43.4662],
					[-3.81156, 43.4662],
					[-3.81153, 43.4661],
					[-3.81153, 43.4661],
					[-3.81156, 43.466],
					[-3.8116, 43.466],
					[-3.81166, 43.466],
					[-3.8119, 43.466],
					[-3.81195, 43.466],
					[-3.81199, 43.466],
					[-3.81202, 43.4659],
					[-3.81203, 43.4659],
					[-3.81202, 43.4659],
					[-3.812, 43.4658],
					[-3.81177, 43.4654],
					[-3.81161, 43.4652],
					[-3.81151, 43.465],
					[-3.81148, 43.465],
					[-3.81141, 43.4649],
					[-3.81126, 43.4647],
					[-3.81112, 43.4646],
					[-3.81106, 43.4645],
					[-3.811, 43.4644],
					[-3.81098, 43.4644],
					[-3.81101, 43.4643],
					[-3.81133, 43.4632],
					[-3.81133, 43.4632],
					[-3.81063, 43.4632],
					[-3.81069, 43.4637],
					[-3.81007, 43.4637],
					[-3.81005, 43.464],
					[-3.81002, 43.464],
					[-3.80997, 43.464],
					[-3.80877, 43.464],
					[-3.80875, 43.4637],
					[-3.80828, 43.4637],
					[-3.8078, 43.4637],
					[-3.80769, 43.4637],
					[-3.80621, 43.4637],
					[-3.80548, 43.4638],
					[-3.80546, 43.4638],
					[-3.80446, 43.4638],
					[-3.80418, 43.4639],
					[-3.804, 43.4639],
					[-3.80381, 43.4639],
					[-3.80375, 43.4639],
					[-3.80347, 43.464],
					[-3.80314, 43.4641],
					[-3.80287, 43.4641],
					[-3.80269, 43.4642],
					[-3.80265, 43.4642],
					[-3.80246, 43.4642],
					[-3.80235, 43.4642],
					[-3.80211, 43.4642],
					[-3.80185, 43.4643],
					[-3.80166, 43.4643],
					[-3.80133, 43.4643],
					[-3.80115, 43.4643],
					[-3.80103, 43.4643],
					[-3.80087, 43.4643],
					[-3.80073, 43.4643],
					[-3.8007, 43.4643],
					[-3.80025, 43.4643],
					[-3.79985, 43.4643],
					[-3.79958, 43.4644],
					[-3.79912, 43.4644],
					[-3.79861, 43.4644],
					[-3.79818, 43.4645],
					[-3.79791, 43.4645],
					[-3.79768, 43.4646],
					[-3.79738, 43.4646],
					[-3.7971, 43.4647],
					[-3.79683, 43.4647],
					[-3.79688, 43.4652],
					[-3.79682, 43.4653],
					[-3.79671, 43.4654],
					[-3.79646, 43.4654],
					[-3.796, 43.4654],
					[-3.79584, 43.4655],
					[-3.79571, 43.4655],
					[-3.79553, 43.4656],
					[-3.79536, 43.4656],
					[-3.79494, 43.4657],
					[-3.79473, 43.4658],
					[-3.79459, 43.4659],
					[-3.79435, 43.4659],
					[-3.79362, 43.466],
					[-3.79269, 43.4661],
					[-3.79255, 43.4661],
					[-3.7917, 43.4662],
					[-3.79167, 43.4662],
					[-3.79078, 43.4663],
					[-3.78731, 43.4665],
					[-3.7871, 43.4665],
					[-3.78709, 43.4666],
					[-3.78715, 43.467],
					[-3.78722, 43.4672],
					[-3.78734, 43.4674],
					[-3.78754, 43.4677],
					[-3.78776, 43.4679],
					[-3.78798, 43.468],
					[-3.7904, 43.4683],
					[-3.79124, 43.4685]
				]
			]
		},
		"metadata": {}
	}
}
```
#### Sections
```json
{
	"id": "urn:oc:entity:santander:sections:D07:S22",
	"type": "section",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T13:21:07.000Z",
		"metadata": {}
	},
	"location": {
		"type": "geo:json",
		"value": {
			"type": "Polygon",
			"coordinates": [
				[
					[-3.81032, 43.4696],
					[-3.81078, 43.4695],
					[-3.81128, 43.4694],
					[-3.81175, 43.4694],
					[-3.81226, 43.4693],
					[-3.81301, 43.4691],
					[-3.81383, 43.4689],
					[-3.81385, 43.4689],
					[-3.81385, 43.4689],
					[-3.81387, 43.4689],
					[-3.81353, 43.4686],
					[-3.81347, 43.4686],
					[-3.81342, 43.4685],
					[-3.8134, 43.4685],
					[-3.81339, 43.4685],
					[-3.81339, 43.4684],
					[-3.81341, 43.4679],
					[-3.8134, 43.4677],
					[-3.81341, 43.4676],
					[-3.81028, 43.4676],
					[-3.80995, 43.4676],
					[-3.80992, 43.4676],
					[-3.8102, 43.4684],
					[-3.81022, 43.4685],
					[-3.81021, 43.4686],
					[-3.81017, 43.4687],
					[-3.81011, 43.4688],
					[-3.80993, 43.4689],
					[-3.8098, 43.4691],
					[-3.80972, 43.4691],
					[-3.80967, 43.4692],
					[-3.80964, 43.4692],
					[-3.80964, 43.4692],
					[-3.80965, 43.4692],
					[-3.80966, 43.4692],
					[-3.80973, 43.4693],
					[-3.80983, 43.4694],
					[-3.80989, 43.4695],
					[-3.80991, 43.4696],
					[-3.81002, 43.4696],
					[-3.81032, 43.4696]
				]
			]
		},
		"metadata": {}
	}
}
```
### Pace of the city events
Events happening in the city that have been generated by citizens using the apps to report them. Mainly, PulsodelaCiudad and Cuida Santander Apps
```json
{
	"id": "urn:oc:entity:santander:paceofthecity:event:7975",
	"type": "city:event",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-22T08:59:59.000Z",
		"metadata": {}
	},
	"eventText": {
		"type": "urn:oc:attributeType:event:description",
		"value": "Faltan dos bolardos que se han partido.  han quedado trozos por encima del raso de la acera,  con lo cual puede haber cortadas en los pies.",
		"metadata": {}
	},
	"eventTitle": {
		"type": "urn:oc:attributeType:event:name",
		"value": null,
		"metadata": {}
	},
	"eventType": {
		"type": "urn:oc:attributeType:event:type",
		"value": "VIA_PUBLICA",
		"metadata": {}
	},
	"imageURL": {
		"type": "urn:oc:attributeType:imageURL",
		"value": "http://farm9.staticflickr.com/8268/29711271953_c1b018c526.jpg",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.7963962,43.4701798",
		"metadata": {}
	}
}
```
### Tourism:Points of Interest

#### Beaches 
```json
{
	"id": "urn:oc:santander:tourism:poi:beach:6",
	"type": "poi:park",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T13:13:51.000Z",
		"metadata": {}
	},
	"description:long": {
		"type": "urn:oc:attributeType:description",
		"value": "",
		"metadata": {}
	},
	"description:short": {
		"type": "urn:oc:attributeType:description",
		"value": "Debe su nombre a la roca con esta forma que hay en la orilla",
		"metadata": {}
	},
	"imageURL": {
		"type": "urn:oc:attributeType:imageURL",
		"value": "http://ra.smartsantander.eu/images/playas/camello.jpg",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.7752789259,43.4694983127",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "Playa de El Camello",
		"metadata": {}
	}
}
```
#### Park and gardens
```json
{
	"id": "urn:oc:santander:tourism:poi:park:9",
	"type": "poi:park",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T13:13:51.000Z",
		"metadata": {}
	},
	"description:short": {
		"type": "urn:oc:attributeType:description",
		"value": "175.000 m2 de parque con ejemplares arbóreos destacados ",
		"metadata": {}
	},
	"imageURL": {
		"type": "urn:oc:attributeType:imageURL",
		"value": "http://ra.smartsantander.eu/images/parques/ParqueMorales.jpg",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.8407950000,43.4557850000",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "Parque Dr Morales",
		"metadata": {}
	}
}
```
### Shops
More than 2000 assets have been created based on the information registered at Comercio Santander initiative. The list of assets is updated every day, so that, it can change during the experimentation period. 
```json
{
	"id": "urn:oc:santander:commerce:shops:2844",
	"type": "poi:shop",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2017-01-02T11:49:32.000Z",
		"metadata": {}
	},
	"description": {
		"type": "urn:oc:attributeType:description",
		"value": "Moda y complementos marca propia para mujer joven.",
		"metadata": {}
	},
	"description:other": {
		"type": "urn:oc:attributeType:description",
		"value": "",
		"metadata": {}
	},
	"imageURL": {
		"type": "urn:oc:attributeType:imageURL",
		"value": "http://www.comerciosantander.com/imagenes/Comercios/ED407B6E-AB2E-E9B4-BD50-FC012F619733.jpg/resize/480/640/",
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.812214499999982,43.4620188",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "SHIMAI",
		"metadata": {}
	}
}
```
### Cultural agenda events
Real time information to Santander Auna Events. 
```json
{
	"id": "urn:oc:entity:santander:culture:auna:23269",
	"type": "agenda:event",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2017-01-02T01:50:41.000Z",
		"metadata": {}
	},
	"category": {
		"type": "urn:oc:attributeType:decription",
		"value": "Formación/Talleres",
		"metadata": {}
	},
	"date": {
		"type": "urn:oc:attributeType:event:date",
		"value": "Lunes 02/01/2017, todo el día. ",
		"metadata": {}
	},
	"description": {
		"type": "urn:oc:attributeType:description",
		"value": "Festival de cine independiente dirigidoÂ por el cÃ¡ntabro Luis Bezeta con videocreaciÃ³n, ficciÃ³n,Â animaciÃ³n, performance y conciertos",
		"metadata": {}
	},
	"imageURL": {
		"type": "urn:oc:attributeType:url",
		"value": "http://www.fundacionsantandercreativa.com/ekh2983gd29837gt_uploads/web_2/eventos_images/final/23269.jpg",
		"metadata": {}
	},
	"link": {
		"type": "urn:oc:attributeType:url",
		"value": "http://www.fundacionsantandercreativa.com/mobile/index.php?evento%3Dinscripciones-para-el-curso-de-modelado-en-3d-con-blender",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "Inscripciones para el curso de Modelado en 3D con Blender",
		"metadata": {}
	},
	"subname": {
		"type": "urn:oc:attributeType:name",
		"value": "IV Picnick Festival",
		"metadata": {}
	}
}
```

### News in the city
News generated by the different areas of governance within the municipality. 
```json
{
	"id": "urn:oc:entity:santander:news:c35672836c31190ad2badb057cee6ad4",
	"type": "urn:oc:entityType:news",
	"date": {
		"type": "urn:oc:attributeType:date",
		"value": "08-09-2016 15:41",
		"metadata": {}
	},
	"description": {
		"type": "urn:oc:attributeType:description",
		"value": "La imagen más icónica de la nueva exposición del centro es la fotografía que se hicieron un grupo de artistas españoles en Roma con motivo de la visita que les hizo el escritor Pedro Antonio de Alarcón en las Navidades de 1860",
		"metadata": {}
	},
	"news:title": {
		"type": "urn:oc:attributeType:title",
		"value": "El CDIS recorre el proceso de formación del artista a través de la figura de Dióscoro Puebla",
		"metadata": {}
	},
	"url": {
		"type": "urn:oc:attributeType:url",
		"value": "http://santander.es/noticia/cultura/cdis-recorre-proceso-formacion-del-artista-traves-figura-diascoro-puebla",
		"metadata": {}
	}
}
```
### Environmental sensors
#### Noise repeaters
```json
{
 	"id": "urn:oc:entity:santander:environmental:fixed:737",
 	"type": "urn:oc:entityType:repeater:noise",
 	"TimeInstant": {
 		"type": "ISO8601",
 		"value": "2017-01-02T11:01:06.000Z",
 		"metadata": {}
 	},
 	"datasource": {
 		"type": "urn:oc:attributeType:datasource",
 		"value": "http://mu.tlmat.unican.es:8098/",
 		"metadata": {
 			"datasourceInternal": {
 				"type": "urn:oc:dataType:boolean",
 				"value": "boolean"
 			}
 		}
 	},
 	"location": {
 		"type": "geo:point",
 		"value": "-3.81289,43.45487",
 		"metadata": {}
 	},
 	"origin": {
 		"type": "urn:oc:attributeType:origin",
 		"value": "SmartSantander",
 		"metadata": {}
 	},
 	"reputation": {
 		"type": "urn:oc:attributeType:reputation",
 		"value": "-1",
 		"metadata": {
 			"unit": {
 				"type": "urn:oc:dataType:string",
 				"value": "urn:oc:uom:index"
 			},
 			"description": {
 				"type": "urn:oc:dataType:string",
 				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
 			}
 		}
 	},
 	"soundPressureLevel:ambient": {
 		"type": "urn:oc:attributeType:soundPressureLevel:ambient",
 		"value": "50.50",
 		"metadata": {}
 	}
 }
```
#### luminosity repeaters
```json
{
	"id": "urn:oc:entity:santander:environmental:fixed:680",
	"type": "urn:oc:entityType:repeater:luminosity",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2013-04-05T11:20:19.000Z",
		"metadata": {}
	},
	"datasource": {
		"type": "urn:oc:attributeType:datasource",
		"value": "http://mu.tlmat.unican.es:8098/",
		"metadata": {
			"datasourceInternal": {
				"type": "urn:oc:dataType:boolean",
				"value": "boolean"
			}
		}
	},
	"illuminance": {
		"type": "urn:oc:attributeType:illuminance",
		"value": 3,
		"metadata": {}
	},
	"location": {
		"type": "geo:point",
		"value": "-3.82052,43.46023",
		"metadata": {}
	},
	"origin": {
		"type": "urn:oc:attributeType:origin",
		"value": "SmartSantander",
		"metadata": {}
	},
	"reputation": {
		"type": "urn:oc:attributeType:reputation",
		"value": "-1",
		"metadata": {
			"unit": {
				"type": "urn:oc:dataType:string",
				"value": "urn:oc:uom:index"
			},
			"description": {
				"type": "urn:oc:dataType:string",
				"value": "The reputation scores vary from 0 to 1. -1 means that there is not scores already calculated"
			}
		}
	},
	"temperature:ambient": {
		"type": "urn:oc:attributeType:temperature:ambient",
		"value": 4,
		"metadata": {}
	}
}
```
