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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
				"type": "ISO8601",
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
	"id": "urn:oc:entity:santander:traffic:camera:01",
	"type": "urn:oc:entityType:camera",
	"TimeInstant": {
		"type": "ISO8601",
		"value": "2016-10-05T12:57:29.000Z",
		"metadata": {}
	},
	"image": {
		"type": "urn:oc:attributeType:image",
		"value": "http://datos.santander.es/files/camara_cuatro_caminos/cuatro_caminos_20161005145728.jpg",
		"metadata": {}
	},
	"name": {
		"type": "urn:oc:attributeType:name",
		"value": "Cuatro Caminos",
		"metadata": {}
	}
}
```
#### Vehicle count sensors
Placed at the main entrance of the city, a set of 48 sensors, provides information about the occupancy, the count of vehicles, the median and average speed in the different lanes of these main roads.
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
#### Traffic congestion information in the city.  
Based on the deployment of the inductive loops existing in the city of Santander, real time information about the traffic congestion in the city is provided. To this end, the streets of the city are represented by different polylines, including information on how congested this particular path is.
```json
```
#### 30 zone areas. 
Within the city, different areas have been limited to a maximum speed of 30km/h. Assets for each zone have been created, defined by the polygon of the particular areas.
```json
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
#### Indoor parking. 
Along the city of Santander, 12 indoor public parking facilities managed by private companies can be found. For every parking facility, a singular asset is created, including information about the occupancy of parking spots and also other extra information.
```json
```
#### Load and unload areas. 
```json
```

### Transport
#### Bus lines. 
It provides information about the existing buses lines in the city, a set of 20 assets, one for each bus line have been integrated.
#### Bus stops. 
A set of 415 assets, one per bus stop in the city, have been created. Those assets provide real time information about next buses reaching the bus stop, including the distance to reach the bus stop as well as the estimated time of arrival for the first and second bus coming.
```json
```
#### Bus routes. 
For each one of the bus lines, different routes are implemented. These assets provide information related to the routes of a particular line.
```json
```

#### Taxi stops. 
These assets provide real time information about taxi availability in each particular stop, based on the information provided by the fleet management systems deployed by the two taxi associations.
```json
```
#### Bike stops. 
A set of 16 assets has been created, providing information about the number of available public-hire bikes and also the number of places to return such bikes.
```json
```
### Environmental 
#### Noise repeaters
```json
```
#### Temperature repeaters
```json
```
#### Luminosity repeaters
```json
```
#### Air repeaters
```json
```
#### Mobile nodes
```json
```

### Districts and sections 
#### Districts
```json
```
#### Sections
```json
```
### Pace of the city events
```json
```
### Points of Interest

#### Beaches 
```json
```
#### Park and gardens
```json
```
### Shops
```json
```
### Cultural agenda events 
```json
```

### News in the city
```json
```



