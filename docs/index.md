Welcome to the [OrganiCity](http://organicity.eu) GitHub account. This web page will give you a comprehensive view of all the tools and APIs made available within the facility.

# Experimentation as a Service Facility

OrganiCity project has built an Experimentation-as-a-Service (EaaS) framework that supports the co-creation and validation of a large set of smart city services and applications under real conditions in a powerful innovation ecosystem. It provides functionality to both advanced users/developers, as well as more "casual" end-users like citizens or even activists, decision makers or politicians (Organicitizens). The idea behind this objective is that any Organicitizen, might develop and deploy its own services (e.g., a website, a web service, a desktop application or a smartphone application) that interact with the platform through the different APIs exposed by Organicity facility.

## High level architecture of the facility

As it can be seen in the following figure, three different tiers can be distinguished within the OC facility architecture:

![OC Facility](./images/facility.png)  
**Figure 1\.** OrganiCity facility high level architecture

*   **OC Experimentation tier** The OrganiCity Experimentation tier consists of various components (deployed services and applications, template applications or libraries) that facilitate the building of applications and services for experimentation with them. At this level, any Organicitizen with the experimenter role might develop and deploy its own services (e.g., a website, a web service, a desktop application or a smartphone application) that interact with the platform through the different APIs.
*   **OC Platform tier** It is represented by the OC platform and its components that permits platform managers to adminstrate and control it. It exposed different services that can be used by the experimenters to interact with the platform exploring data assets, annotating them or even creating new ones within the scope of their experiment.
*   **OC Site tier** It consists of infrastructures belonging to different **OC City sites**, the infrastructures and resources of experimenters **(OC experimenters site)** and the infrastructure supporting the generation of crowdsourcing data into the platform **(OC Provider Site).**  
    It is important to note that experimenters aiming to feed data into the platform should rely on the OC experimenters site. It exposes several methods trough the Federation API that can create, delete or update assets within the facility under the scope of the experiment [(More info)](/HowToPushAnAsset).

## Users Accounts and registration

To ensure that all interactions with the facility are authenticated with valid user credentials and access rights, Authentication, Authorization and Accounting (AAA) mechanisms have been implemented. Users will be enforced to use their own credentials to interact with the different APIs and tools. To start experimenting on top of the OC facility, the experimenters are encouraged to register themselves in the platform. Click [here](https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=account&redirect_uri=https%3A%2F%2Faccounts.organicity.eu%2Frealms%2Forganicity%2Faccount%2Flogin-redirect&state=0%2Ffbef2e8c-5990-4caf-b4ee-26fe03f96ab4&response_type=code) to register yourself.  
Once experimenters get registered within the platform, they will be assigned with the OC user role. The OC facility managers will assign the experimenters the OC experimenter role upon the acceptation of the corresponding request. To this end, you should send an email to [helpdesk@organicity.eu](mailto:helpdesk@organicity.eu), indicating the mail that you have been registered with and the experiment that you belong to.

## Tools and enablers for experimentation in Organicity

Once the experimenters are registered in the facility, they will have access to a set of tools that will facilitate the experimentation and co-creation activities that they have planned within their experiment. Attending to their functionalities, they can be classified in three different types:

### Tools to Manage the experiment life-cycle 
To create, configure and run experiments within the OrganiCity facility, experimenters must use the Experimenter Portal, and other complementary components which will allow them to manage different experiments concurrently.

* **Experimenter Portal** It is the user interface to be used by the experimenters in order to define the scope of the experiments and manage them during their entire life cycle. From this portal, the experimenters will get access to the set of co-creation tools offered that they can use to build their experiments, the documentation and support channels. ([See further details about how to manage the experiment life cycle](/ExperimenterPortal))
    
* **Smartphone experimentation framework** It is a complementary framework that facilitates experimenter to gather and process data from the sensors and communication interfaces of the smartphones of volunteers and use them to run experiments. [(More)](https://organicityeu.github.io/set.html)

* **Community Management** Basic functionality for interacting with the different communities of _Organicitizens_ participating in each experiment, which has been integrated within the Experimenter Portal.

### Tools for discovering, exploring and annotating data assets.

*   **Urban Data Observatory UI** The UDO provides a UI that allows experimeters to develop a deeper understanding of the federated city data sources that can be used in your experiments. It is based on an Asset Directory that maintains entries for the federated urban assets registered at the facility from the city sites and also from the experiments. [More info](/UrbanDataObservatory)
*   **Data Annotation services** These services simplify the process of creating meaningful knowledge from urban data streams. The first phase of this tool will allow experimenters and citizens to use pre-defined tag sets for annotating existing data assets. ([More details](/AssetAnnotationService) )

### Co-creation tools
A set of innovative tools and enablers for the co-creation of urban infrastructure, knowledge and services has been developed and integrated within the EaaS facility infrastructure, extending it and facilitating experimental research for new services and innovative applications.

*   **SensiNact** aims at helping coders working with data streams from deployed data assets without the need to learn about the Organicity APIs. By using **it, experimenters can interact with information of different data assets available in** the different clusters, as well as within the scope of their experiments, and understand the data streams that they provide. The SensiNact IDE allows the creation of applications using a scripting tool (with Code Assist functionality). [See more...](https://organicityeu.github.io/tools/sensinact/)
*   **TSmarT** It is a modular wireless communications platform designed to facilitate the development and implementation of M2M, monitoring and remote control applications in different markets. TSmarT devices are integrated with OrganiCity facility and therefore able to feed data to the OC platform, connecting them to the OC experimenters site. [See more...](https://organicityeu.github.io/TSmarT/)
*   **TinkerSpace** Toolkit for creating mobile services - Apps - without the need for extensive software training or experience. Tinkerspace builds on the idea of Component-based software engineering and Visual programming, with LEGO™ as an inspiration – it should be as easy to build a mobile app as to build a LEGO™ model. [See more...](http://www.tinkerspace.eu)
*   **Web socket processing library** This library enables experimenters who have skills in the Processing programming language to easily connect to data streams from IoT devices in the OrganiCity facility. They may then actuate events in real-time as part of their Processing sketches. [See more...](https://github.com/OrganicityEu/Processing-Websocket-Library)
*   **DUL Radio and Event Bus** The DUL-Radio allows OrganiCity experimenters to make wirelessly connected sensors, starting with very little technical knowledge. The board features a built-in accelerometer, but also has analog and digital inputs which can be used to connect other sensors.  
    The DUL-radio transmits data back to the provided “EventBus” software which enables users with a limited knowledge of computer programming to easily create applications and data collection services. [See more...](https://organicityeu.github.io/EventBus/)

## Organicity APIs

*   **Asset Discovery** It facilitates exploration and inspection of available assets. [More info...](http://organicityeu.github.io/api/AssetDiscovery.html)
*   **Asset Federation** It provides access to asset creation and update services of Organicity. [More info...](/HowToPushAnAsset)
*   **Asset Annotation**  It provides access to asset annotation servives of Organicity. [More info...](http://organicityeu.github.io/api/Annotation.html)
*   **Permissions** It provides inspection, editing and updating of access permissions. [More info...](http://organicityeu.github.io/api/Permissions.html)

# Assets

Urban resources are modeled inside Organicity as Assets. These assets it's possible to model IoT devices, observations like temperature, information like social events etc. The description of the assets is following the NGSI9/10 information modelling specification ( [More details](/AssetDataModel))  
Currently in the Organicity platform, there are federated assets from the city sites: Aarhus (Denmark), London (UK) and Santander (Spain) ( [More details](/FederatedDataAssets))

# Support

For resolving technical questions, reporting specific issues/bugs and discussion possible extensions in the services and tools of Organicity, Slack and GitHub issue tracking is recommended for use.

*   **Generic questions**. Use the tech channel on slack to ask for generic questions. We will try to guide you and solve your doubts at [https://organicityexperiments.slack.com](https://organicityexperiments.slack.com)
*   **Generic issues**. If you find a generic issue, you can report it and keep track at [https://github.com/OrganicityEu/organicityeu.github.io/issues](https://github.com/OrganicityEu/organicityeu.github.io/issues)
*   **Specific issues related to a particular tool**. Browse the various repositories at [https://github.com/OrganicityEu/]( https://github.com/OrganicityEu/) and then report the issue in the proper one.