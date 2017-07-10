# Experimenter Portal

The Experimenter Portal provides a common interface for the experimenters to carry out experiment management and to start the interaction of your experiment with different services (e.g. annotations, authorization, etc.). An experiment can be seen as a entity that allows you to interact with the Organicity facility. Besides, within an experiment you can defined a number of applications, also entities, so that when you create assets you have to indicate which application of which experiment has created it. It is worth highlighting that an Organicity application refers just to the entity (an identifier), that will be afterwards used in *real* applications (such as smartphone applications) to enable the interaction with Organicity,

In the following the features of the Experimenter Portal are desbried in a comprehensive way.

First you need to log into the the portal (http://experimenters.organicity.eu/). In case you do not manage to perform the login, contact the facility managers through [helpdesk@organicity.eu](mailto:helpdesk@organicity.eu) to obtain proper credentials.

When you enter the portal for the same time, you will find an empty table and a button to create a new experiment. Besides, from the header you may navigate to different services and tools of Organicity; we do not detail each service and tool here, go [Home](/index) for more information. Once you have created experiments, you will see something similar to Figure 1, when the experiment name, descriptions and current state is indicated.


![alt text](images/ep1.PNG)
**Figure 1:** Main view of the Experimenter Portal

Before going step-by-step for the creation of experiments, we are listing the different features of the experiment that can be managed through the experimenter portal, that will be afterwards explained in detail in the following sections. When you enter the experiement, by clicking it, you will see something similar to Figure 2. First you can see a set of identifiers:

* Main experiment ID: it is the identifier of the experimenter who created the experiment. You will need it to create assets as described in [How To Push An Asset To The Experimenters Site](/HowToPushAnAssetToTheExperimenterSite)
* Current experimenter ID: it is your ID as experimenter, if you created the experiment is will be the same as the previous one
* Experiment ID: it is the identifier of your experiment. Again, you will need it to create assets, see [How To Push An Asset To The Experimenters Site](/HowToPushAnAssetToTheExperimenterSite)

Afterwards, you can see your experiment name, description and the options to make the experiment assets public, more about this in section _**Create and edit experiments**_. Finally you can see the list of features to be managed: 

![alt text](images/ep2.PNG)
**Figure 2:** Overall experiment view: experiment features managed through the Experimenter Portal

* Experiment Credentials: this allows to get the experiment to obtain and manage permissions to interact with Organicity from your experiment.
* Applications: as mentioned before, Organicity applications are entities (identifiers) that map onto real applications, so that you can identifify how the applications interact with Organicity.
* Assets: these are the pieces of information created by your experiment (by their applications)
* Annotations: you annotate you assets, by defining tags, in order to enrich their information
* Experiment Team: you can add other experimenters to your experiment, so that they will see the same as you.
* Participants: this feature allows you to contact people registered within Organicity to engage them into your experiment

## Create and edit experiments

As can be seen in the figure below, an experiment can be created by just defining:
* Name: Name of the experiment to be shows afterwards
* Description: meaningful and catchy description of the experiment. This description will be used if you decide to invite people to participate in your experiment
* Assets privacy: choose whether or not you want your asstes to be public or private. Note that by doing them private only your experiment will be able to access their data.

Besides, if it is necessary you may also define the experiment area, by clinking **EXPERIMENT AREA**. The area is made of regions, that in turn is defined as a polygon with a name, as depicted belor. You can define as many regions you want for your experiment.

Once you are done, click **FINISH** to complete the experiment creation.

## Experiment Credentials

When an experiment is created a new *client* is created for that experiment. You may use that client to implement authorization in the applications within the experiment, see [How To Authenticate An User](/HowToAuthenticateAnUser).

![alt text](images/ep3.PNG)
**Figure 3:** Experiment credentials view

From that client you can define and edit *redirect_uris* as you need.

## Create and edit applications

As mentioned before, to create assets the experiment does not suffice, but you need to do it through applications within the experiment. To create an applciation just go to the **Applications** section of you experiment **NEW APPLICATION**. To be completed

![alt text](images/ep4.PNG)
**Figure 4:** Main view of experiment applications

## Manage assets

Based on the interface provided by the [AssetDiscoveryService](/AssetDiscoveryService), through Experimenter Portal you can see the list of assets created within your experiment. You can also create new assets using its graphical editor or even modify existing ones.

![alt text](images/ep5.PNG)
**Figure 1:** Main view of assets management

## Annotations

Experimenter Portal interacts with Annotation Service to simplify the creation of tags. The explanation of this feature can be found [here](/annotations/tutorials/HowToCreateAnnotationTags/) 

![alt text](images/ep6.PNG)
**Figure 1:** Main view of assets annotations

## Experiment area
At any time, you can define or edit the area of your experiment by adding, deleting or modifying the experiment regions.

![alt text](images/ep8.PNG)
**Figure 1:** Main view of the Experimenter Portal

## Experiment team

As simple as it looks, you can add experimenter to your experiment team by selecting them and clicking **UPDATE TEAM**. The table will show the user names of all the experimenters registered in Organicity. Note that once an experimenter is part of the experiment team they get access so identifiers and credentials, so ensure that you are inviting the right person.

![alt text](images/ep7.PNG)
**Figure 1:** Main view of the Experimenter Portal

## Participants
To be completed.