
<style>
img[src$="centerme"] {
  display:block;
  margin: 0 auto;
}
</style>

# Tutorial: How to create a new Sensing-on-the-Go Sensor

##Introduction

This guide will go throught the basic setup and development process for creating a new Sensor Plugin for
Sensing-on-the-Go app.

##OrganiCity Sensors

OrganiCity provides a set of common <a href="https://github.com/amaxilat/smartphone-sensors/tree/master/sensors">Sensor Plugins</a> to be used. You can find and install all provided 
Sensors from the *Sensors* tab or when installing an experiment.

1. Location Sensor
2. Wifi Sensor
3. Noise Sensor
4. Ble Reader Sensor
5. Temperature Sensor

## Development Environement Setup

To setup a new Sensor Plugin you will need to follow these steps:

1.	Download and install <a href="https://developer.android.com/studio/index.html">Android Studio</a>
2.	Clone the Sensing-on-the-Go repository and especially the <a href="https://github.com/amaxilat/smartphone-sensors/tree/master/sensors/ExampleSensor">ExampleSensor located in the sensors directroy</a>
3.	Open the *ExampleSensor* project with Android Studio and install any missing packages

### Setting up your own Sensor

When you open the Example Plugin project, navigate and open *ExampleSensorService*.

![ExampleSensorService.java](./tools/set/images/examplesensorservice.png?style=centerme)

As you can see there are multiple *TODO* comments through out the code.
Below are listed the key methods you need to pay attention during the development:

**onCreate** is called when your background service is first created (first call of *startService()*). 
Initialize your variables and request permissions here. An example is shown below in comments

![Request permissions](./tools/set/images/oncreate.png?style=centerme)

**onDestroy** is called when your background service is going to be destroyed (call of *stopService()*). 
This is the place to unregister receivers, disconnect from services, stop and destroy threads and callbacks.
*If any object that is references elsewere is not destroyed the services may become a zombie service*.

![onDestroy](./tools/set/images/ondestroy.png?style=centerme)

**handleMessage** is called whenever Sensing-on-the-Go app requested info from your Sensor Plugin.
This is the place to add your data to the dataJson and as shown in the example.
For example the Gps Plugin adds lontitude and latutide values:

```java
dataJson.put(CONTEXT_TYPE + ".Latitude", location.getLatitude());
dataJson.put(CONTEXT_TYPE + ".Longitude", location.getLongitude());
```

Where `CONTEXT_TYPE = eu.organicity.set.sensors.location`.




