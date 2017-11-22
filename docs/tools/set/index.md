# Smartphone Experimentation

##Experimenter Guide


###Introduction

This guide will help you understand the functionality provided by the Smartphone Experimentation OrganiCity
CoCreation tool, its capabilities and all the necessary steps to create, configure, monitor and manage your
experiment as well as retrieve the data collected.

###Experimentation as a Service

The Smartphone Experimentation is offered as an Experimentation As A Service tool that you can easily use over
via its cloud infrastructures and the provided Android Smartphone Application.

**Experimenter Portal**
The Smartphone Experimentation cloud interface is tightly integrated with the OrganiCity Experimenter's portal.
Most of the functionalities for managing the experimentation flow. In order to configure a new Experiment
Experimenters need to follow the steps presented bellow:

* Create an Account for OrganiCity and be accepted as an Experimenter.
* Register a new Experiment and fill in all the required information.
* Draw a number of regions of interest on the Map for the data collection to take place.
* Create an Application of type "Smartphone Application".
* Now your application is ready to be executed! (not realy :P)


There are *three operations that differentiate* the creation of a Smartphone Crowdsensing Experiment from
the rest
of the OrganiCity Experiments.

First, when the experimentation areas are defined, the experimenter need to specify more information including:

* the expected **number of samples** (minimum and expected) for collection by the experimenters,
* the **time spans** for the experimentation to be executed,
* the **importance** of the area in the whole experiment.

Secondly, the experimenter needs to select which sensors the experiment will use on the smartphone.
The experimenter can select any of the available sensor plugins without the need for uploading any piece of
code.
In the case that the experimenter needs to upload a new sensor plugin, the upload can be done from this link.
Any new sensor plugin can be either public or private based on the choice of the experimenter.

Finally, the experimenter needs to provide the jar file that contains the business logic of the experiment.
This is a specific jar file for the experiment and is responsible for preparing the data for upload to the
Smartphone Experimentation Storage Services.

**Development Environment**

Smartphone Experimentation is based on the Android platform. It manages and uses multiple background services
to communicate between the app and both the sensors and experiments running.

In the context of Smartphone Experimentation there are two types of Android plugins to be used:

* Sensors and
* Experiments

Sensors operate on an async call for a context update and provide data back to the SET wrapper for this request. (calls
to getPluginInfo ).
Experiments operate on an synchronous call for a context update and provide data back to the SET wrapper for this request. (calls
to getExperimentResult ).

Experiment Plugins can access data from all Sensor plugins and :

* either simply aggregate them to a single measurement to upload to the server or
* do internal calculations and format the results as the message to upload to the server.


Code templates and examples for sensor and experiment plugins are available in the following repositories:

* <a href="https://github.com/amaxilat/smartphone-sensors/tree/master/sensors">Sensor Plugins</a>
* <a href="https://github.com/amaxilat/smartphone-sensors/tree/master/experiments">Experiment Plugins</a>


All of them are available to use without the need for any development. If experimenters need to use any of them,
they simply need to select them during the creation of the experiment.



