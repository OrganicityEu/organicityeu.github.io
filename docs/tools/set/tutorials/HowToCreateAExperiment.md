
<style>
img[src$="centerme"] {
  display:block;
  margin: 0 auto;
}
</style>

# Tutorial: How to create a new Sensing-on-the-Go Experiment

##Introduction

This guide will go throught the basic setup and development process for creating a new Experiment Plugin for
Sensing-on-the-Go app.

##OrganiCity Experiments

OrganiCity provides a set of common <a href="https://github.com/amaxilat/smartphone-sensors/tree/master/experiments">Experiment Plugins</a> to be used. You can find and install all provided 
Experiments from the *Experiments* tab.

1. Wifi Scanner Experiment
2. Noise Level Experiment
3. Ble Reader Experiment
4. Temperature Experiment

## Development Environement Setup

To setup a new Experiment Plugin you will need to follow these steps:

1.	Download and install <a href="https://developer.android.com/studio/index.html">Android Studio</a>
2.	Clone the Sensing-on-the-Go repository and especially the <a href="https://github.com/amaxilat/smartphone-sensors/tree/master/experiments/ExampleExperiment">ExampleExperiment located in the experiments directroy</a>
3.	Open the *ExampleExperiment* project with Android Studio and install any missing packages

### Setting up your own Experiment

When you open the ExampleExperiment project, navigate and open *ExampleExperiment*.

![ExampleExperiment.java](./tools/set/images/exampleexperiment.png?style=centerme)

As you can see there are multiple *TODO* comments through out the code.
Below are listed the key methods you need to pay attention during the development:

**getExperimentResult** is called when Sensing-on-the-Go app requests result from your experiment.
A description of the method's parameters is found below:

* bundle: a Bundle object containing data collected from all the Sensor Plugins running at that time.
* jsonMessage1: a JsonMessage object that will be used to report the Experiment result back to Sensing-on-the-Go app.

In the screenshot below you can see a simple example of getting GPS and Noise data from Location Sensor and Noise Level Sensor, respectively, and then add that data to a JSONObject to be used as payload to our **jsonMessage1** object. 

![Experiment result](./tools/set/images/experimentresult.png?style=centerme)

A list of the `CONTEXT_TYPE` provided by OrganiCity can be found below:

1. `eu.organicity.set.sensors.location.LocationSensorService`
2. `eu.organicity.set.sensors.noise.NoiseSensorService`
3. `eu.organicity.set.sensors.wifi.WifiSensorService`
4. `eu.organicity.set.sensors.temperature.TemperatureSensorService`
5. `eu.organicity.set.sensors.ble.BleReaderSensorService`

