# OrganiCity Tester API Application
OrganiCity Tester API application is a Windows application which provides the basic functionality and C# code examples of OrganiCity platform APIs. By using this application, experimenters become familiar with: 
* Fundamental notions of Token, Client Id, Client Secret, Experimenter Id, Experiment Id, and Application Id. 
* Data structure of JSON objects. 
* Functionalities such as add, delete, update assets of a specific experiment. 
* Assets retrieval from OrganiCity sites by using the EaaS API.

## Run the application ##
The necessary file to execute the application are located into the OrganiCityTesterAPI folder. To run the application, just double click on "OrganiCityClient.exe" file.

## Using Tester ##
The following figures illustrates the functionalities of OrganiCity Tester API app. The application has three main screens/tabs: (a) post data to your experiment (tab1), (b) Learn OrganiCity data format, and (c) Get data from cities.

In the first tab, the user has to follow three main steps to post a new asset to a specific experiment. In the first step, the user is able to request and get an access token by providing Clientid, ClientSecret. Then, the user has to fill the details of the experiment (ExperimenterId, ExperimentId, ApplicationId). In the last step (i.e. step 3), the user can post a new asset to the specific experiment by pressing the “Post Random Asset” button.

![Alt text](/images/ota_screen1_functionality.png?raw=true "OrganiCity Tester API main functionality")

In the second tab, the user can generate random assets by pressing the “Generate Random Asset” button. The textbox below presents the structure of the attributes and the required information from the system.

![Alt text](/images/ota_screen2_example.png?raw=true "OrganiCity data structure")

The third tab illustrates the asset retrieval from EaaS API.

![Alt text](/images/ota_screen3.png?raw=true "OrganiCity EaaS API")

Note: This application provides only examples of the OrganiCity APIs and it cannot be used as a tool to fulfil the requirements of an experiment.
