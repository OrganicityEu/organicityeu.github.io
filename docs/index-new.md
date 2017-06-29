Welcome to the <a href="http://organicity.eu/" target="_blank">Organicity</a> technical documentation. This web site will provide you detailed information about the services and tools provided by the Organicity EaaS (Experimentation as a Service) facility.

# Overview of the technical environment

## Architecture

As it can be seen in the following figure, three different tiers can be distinguished within the OC facility architecture:

![Facility](images/facility.png)

**Figure 1\.** OrganiCity facility high level architecture

*   **OC Experimentation tier** The OrganiCity Experimentation tier consists of various components (APIs, services and tools) that enable and facilitate building applications and services for experimenters. If you are an experimenter, you will interact with Organicity through the APIs, services and tools of this layer.
*   **OC Platform tier** It embraces the core of the technical facility. Among others, this layer implements data storage, accounting and security. Besides, this layer interacts with the other through APIs.
*   **OC Site tier** It consists of a number of distributed storing entities, the so called OC sites. Among these sites, we can differentiate sites that belong to the Organicity infraestructure (providers and experimenters), and those provided by cities federating data into Organicity. If you are an experimenter, the interaction with the sites will to totally transparent, so that you will only rely on the components at the experimentation tier. If you want to become a new Organcity, this is the entry point for your federation, as will be commented later


## Accounts and registration

To ensure that all interactions with and within the facility are authenticated with valid user credentials and access rights, Authentication, Authorization and Accounting (AAA) mechanisms have been implemented. Users will be enforced to use their own credentials to interact with the different APIs, services and tools. To start experimenting on top of the OC facility, the experimenters are encouraged to register themselves in the platform.

<a  href="https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=account&redirect_uri=https%3A%2F%2Faccounts.organicity.eu%2Frealms%2Forganicity%2Faccount%2Flogin-redirect&state=0%2Ffbef2e8c-5990-4caf-b4ee-26fe03f96ab4&response_type=code">
<button style="width:120px" class="oc-button" >Register</button>
</a>  

Once experimenters get registered within the platform, they will be assigned with the OC user role. The OC facility managers will assign the experimenters the OC experimenter role upon the acceptation of the corresponding request. To this end, you should send an email to [helpdesk@organicity.eu](mailto:helpdesk@organicity.eu), indicating the mail that you have been registered with and the experiment that you belong to. 

Likewise, if you are federating a new Organicity (namely a new OC site), you will also have to contact the OC facility managers to obtanin permissions to manage your site. Again, you should send an email to [helpdesk@organicity.eu](mailto:helpdesk@organicity.eu), indicating the mail that you have been registered with and the OC site you are federating. 

## APIs

In general, the interaction with the whole technical environment is performed by using the a number of APIs aiming different purposes.

*   **Asset Discovery** It facilitates exploration and inspection of available assets. In order to use this API and integrate it in your applications, take a look to the [Asset Discovery API](http://organicityeu.github.io/api/AssetDiscovery.html) and the [Asset Discovery Service](/AssetDiscoveryService).
*   **Asset Annotation**  As you create assets, you might want to annotate them with meaningful tags. The [Annotaions API](http://organicityeu.github.io/api/Annotation.html) will allow you to do so.
*   **Permissions** As mentioned before, the interactions with Organicity are required to be safe. Use the [Permissions API](http://organicityeu.github.io/api/Permissions.html) in you applications and devices to interact with Organicity in a safe way. 
*   **Datasource** While experimenting you can require that Organicity stores some of the information you are generating to et historical values of it, send en email to [helpdesk@organicity.eu](mailto:helpdesk@organicity.eu) for more information. Once the data is recorded, you can use the [Datasource API](http://organicityeu.github.io/api/DataSource.html) to retrieve it.

In general the interaction with the different APIs will require authentication, what is perfomed by sending appropriate access tokens. Under the *Tutorials* tab you will find insightful explanations about how to obtain and work with these tokens: [How To Access Token](/HowToAccessToken), [How To Refresh A Token](/HowToRefreshToken) and [How To Authenticate A User](/HowToAuthenticateAnUser).

In order to test the different APIs, you may find the [Tester API Application](/OrganiCityTesterAPI) useful.

## Services

Living on top of the APIs, a number of services will help you during your interaction with the facility, either if you are an experimenter or manager of an Organicity. You can find them under the *Services* tab:

*   **Urban Data Observatory - UDO** The UDO provides a UI that allows experimeters and users in general to develop a deeper understanding of the federated city data sources that can be used in your experiments. It makes use of the [Asset Discovery API](http://organicityeu.github.io/api/AssetDiscovery.html) enabling graphical search and exploration. Go to the [Urban Data Observatory](/UrbanDataObservatory) to see what it offers.
*   **Data Annotation services** These services simplify the process of creating meaningful knowledge from urban data assets by annotating them. Find more about [Asset Annotations](/AssetAnnotationService) in the *Services* tabs. Besides you may find practice information about how to use it in the *Tutorials*: [How To Create Annotation Tags](/annotations/tutorials/HowToCreateAnnotationTags), [How To Annotate An Assets](/annotations/tutorials/HowToAnnotateAnAsset) and [How To Annotate An Asset Using Machine Larning](jamaica/tutorials/HowToAutomaticallyAnnotateAssets)

*	**Experimenter Portal** It is the entry to start the experimentation. From this portal, experimenters will be able to manage their experiments and to start interacting with other services. Go to the [Experimenter Portal](/ExperimenterPortal) to see more.

*	**Community Management** This potal will allow to find people within the Organicity community according to their preferences and characteristics. Then you will be able to contact them to participate in your experiments, find in the [Community Management](/CommunityManagement) more information and how it interacts with the [Experimenter Portal](/ExperimenterPortal).

*	**Facility Manager** Through this portal you will be able to manage advances features of the Organicity facility. It is not intended for experimenters, but if you are managing a new city, you will need the [Facility Manager](/services/facility-manager/index)

## Tools
Organicity tools are a set of developments aiming to cover experimentation needs from different perspectives. In this sense, while the Organicity facility is aiming general purpose, the tools are devoted to rather specific needs. You can find them under *Tools* tab:

*   **Scenarios** This portal allows citizens to create, discuss and evaluate solutions for the city. [See more...](https://organicityeu.github.io/scenarios/)      
*   **TSmarT** It is a modular wireless communications platform designed to facilitate the development and implementation of M2M, monitoring and remote control applications in different markets. TSmarT devices are integrated with OrganiCity facility and therefore able to feed data to the OC platform, connecting them to the OC experimenters site. [See more...](https://organicityeu.github.io/TSmarT/)
*   **TinkerSpace** Toolkit for creating mobile services - Apps - without the need for extensive software training or experience. Tinkerspace builds on the idea of Component-based software engineering and Visual programming, with LEGO™ as an inspiration – it should be as easy to build a mobile app as to build a LEGO™ model. [See more...](http://www.tinkerspace.eu)
* **Smartphone experimentation framework** It is a complementary framework that facilitates experimenter to gather and process data from the sensors and communication interfaces of the smartphones of volunteers and use them to run experiments. [See more...](https://organicityeu.github.io/set.html)
*   **SensiNact** aims at helping coders working with data streams from deployed data assets without the need to learn about the Organicity APIs. By using **it, experimenters can interact with information of different data assets available in** the different clusters, as well as within the scope of their experiments, and understand the data streams that they provide. The SensiNact IDE allows the creation of applications using a scripting tool (with Code Assist functionality). [See more...](https://organicityeu.github.io/tools/sensinact/)
*   **Web socket processing library** This library enables experimenters who have skills in the Processing programming language to easily connect to data streams from IoT devices in the OrganiCity facility. They may then actuate events in real-time as part of their Processing sketches. [See more...](https://github.com/OrganicityEu/Processing-Websocket-Library)

## Data assets 

Urban data, embracing from IoT devices to social events, are modeled inside Organicity as assets. In order to cover a large range of different urban data, OC assets are defined in a generic way following NGSI9/10 specification. Either if you are an experiment or want to federate data into he facility as a new Organicity, you will have to model your resources as assets. [Here](/AssetDataModel) you will find a thorough description of the data model along with meaningful examples that will help you to model your data.

Currently there are federated assets from the city sites: Aarhus (Denmark), London (UK) and Santander (Spain) ( [More details](/FederatedDataAssets))

If you are an experimenter, you will have to knwo how to manage your assets. Go to the *Tutorials* to learn: [How To Push An Asset To The Experimenters Site](/HowToPushAnAssetToTheExperimenterSite) and [How To Update And Delete An Asset](/HowToUpdateDeteleAnAsset).

If you are managing a new city the tutorial [How To Oc Site](/HowToOcSite) explains the steps to get your data federated into Organicity.


# Experimentation overview

In order to avoid getting lost among the different APIs, services and tools, here we present minimal guidelines to follow to start the experiment: 

* Go to the [Experimenter Portal](/ExperimenterPortal) and create one experiment and one applications as indicated in the documentation. As you will see, the portal offers more functionalities and interactions with other services, we encourage you to check them.
* Once you have an experiment, it is time to generate urban data by creating assets. This can be done directly through the portal in a graphical way, but in general you will prefer to do it programatically. To do so, go to [How To Push An Asset To The Experimenter Site](/HowToPushAnAssetToTheExperimenterSite) and follow the instrauctions therein. If properly generated, you will be able to see your assets in the [Urban Data Observatory](/UrbanDataObservatory)
* During your experiment your applications may require retrieving data assets, either created by your experiment of other urban data available. Use the [Asset Discovery API](http://organicityeu.github.io/api/AssetDiscovery.html) and the [Asset Discovery Service](/AssetDiscoveryService) to build your application. 
* Besides, you can enrich the information of your assets by using the [Annotation Service](/annotations/AssetAnnotationService) or modify your assets as described in [How To Update And Delete An Asset](/HowToUpdateDeteleAnAsset)

Apart from these steps, you can find much more in the *Tutorials* and use the *Tools* for tailored solutions. 

# New Organicities (OC sites)

If you are going to federate a new OC site, you should follow the intructions provided in [How To Oc Site](/HowToOcSite). It is worth highlighting that you need to host a server (your OC site) that will feed data into the Organicity facility core.

Site managers will be given special rights to manage their sites and data for different urban services within their sites. This will be done through the [Facility Manager](/services/facility-manager/index).

# Support

For resolving technical questions, reporting specific issues/bugs and discussion possible extensions in the APIs, services and tools of Organicity, you have different alternatives: 

*   **Generic questions**. Use the [Public Forum](http://dev.qa.organicity.eu/) for generic questions.
*   **Generic issues**. If you find a generic issue, you can report it and keep track at [organicityeu.github.io/issues](https://github.com/OrganicityEu/organicityeu.github.io/issues)
*   **Specific issues related to a particular tool**. Browse the various repositories at [https://github.com/OrganicityEu/]( https://github.com/OrganicityEu/) and then report the issue in the proper one.



<!--
# Overview of the technical environment


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

To ensure that all interactions with the facility are authenticated with valid user credentials and access rights, Authentication, Authorization and Accounting (AAA) mechanisms have been implemented. Users will be enforced to use their own credentials to interact with the different APIs and tools. To start experimenting on top of the OC facility, the experimenters are encouraged to register themselves in the platform.

<a href="https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=account&redirect_uri=https%3A%2F%2Faccounts.organicity.eu%2Frealms%2Forganicity%2Faccount%2Flogin-redirect&state=0%2Ffbef2e8c-5990-4caf-b4ee-26fe03f96ab4&response_type=code">
<button class="oc-button" >Register</button>
</a>  

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

**OrganiCity API Tester** application provides a number of examples to familiarize the new experimenters with the OrganiCity APIs. [More info...](http://docs.organicity.eu/OrganiCityTesterAPI/)

# Assets

Urban resources are modeled inside Organicity as Assets. These assets it's possible to model IoT devices, observations like temperature, information like social events etc. The description of the assets is following the NGSI9/10 information modelling specification ( [More details](/AssetDataModel))  
Currently in the Organicity platform, there are federated assets from the city sites: Aarhus (Denmark), London (UK) and Santander (Spain) ( [More details](/FederatedDataAssets))

# Support

For resolving technical questions, reporting specific issues/bugs and discussion possible extensions in the services and tools of Organicity, Slack and GitHub issue tracking is recommended for use.

*   **Generic questions**. Use the tech channel on slack to ask for generic questions. We will try to guide you and solve your doubts at [https://organicityexperiments.slack.com](https://organicityexperiments.slack.com)
*   **Generic issues**. If you find a generic issue, you can report it and keep track at [organicityeu.github.io/issues](https://github.com/OrganicityEu/organicityeu.github.io/issues)
*   **Specific issues related to a particular tool**. Browse the various repositories at [https://github.com/OrganicityEu/]( https://github.com/OrganicityEu/) and then report the issue in the proper one.
-->
