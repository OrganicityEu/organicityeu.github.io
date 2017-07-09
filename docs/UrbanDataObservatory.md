# Urban Data Observatory

The [Urban Data Observatory](http://observatory.organicity.eu/) is the main entry point to the OrganiCity platform assets.

<aside class='notice'>
Please notice some features might be under development at the time.
</aside>

![UDO](../images/udo_4.png "Urban Data Observatory")

It provides data exploration functionalities across three main interface modules: the navigation modules, involving the spatial and filter views, the text search and the assets visualization. The three modules together are designed to perform as an integrated ecosystem, supporting users on the search and understanding of useful and valuable data assets

## Navigation

The map interface provides geographical exploration of assets at multiple scales. In order to maintain a low entry barrier the interface is modelled on other existing map services the users might be familiar as Google Maps. This includes the following key features:
- Manually navigating the map by standard zoom and pan actions.
- Browsing the map by clicking at specific assets.
- Incremental search featuring simple places search.
- Client geolocation in order to center the map on to the user location.

![UDO Navigation](../images/udo_2.png "Urban Data Observatory")

## Search

The top search bar allows to search for assets name and metadata with auto-complete features. Results are returned based on the recommendation engine. The search offers a simplified list of the available resources that users can quickly access without any intermediate process.

On the upcoming relases this will be completed by the **Advanced search**. This allowd using information related to assets metadata, such as provider, typology or update time. The result is then shown in a permanent list format allowing users to browser the obtained results in detail.

![UDO Navigation](../images/udo_5.png "Urban Data Observatory")

## Assets Visualization

The Assets Visualization is designed following a system of horizontal blocks. The anatomy of the assets views contains the following sections:

![UDO Navigation](../images/udo_1.png "Urban Data Observatory")

### [A] Data Location: 

This module shows the geographical location of a resource on the map as described on the previous section. OC Assets always include location information as a common metadata. This can come in the form of:

- **Point:** Assets specifically geolocated as a single spot. This is indicated on the map using traditional markers.
17
- **Region:** Assets geolocated as a closed collection of points defining an area. This is indicated by using an overlay shape.
- **Path:** Assets geolocated as an open collection of points. This is indicated as an open stroke connecting all the points.

### [B] and [C] Data Visualization: 

This module is designed to support users on assets data exploration:

- **Latest data module:** This is designed as a carousel view displaying the latests data values of multiple attributes. It can work in conjunction with other data views or on its own if just latest data is available for an asset.
- **Data insights module:** This module provides historical visualization of the data by using the Data Sources API. Different view modules are developed in order to fit the visualization requirements of each datasource.
	- **Series chart module:** This is designed as a chart view capable of dealing with numeric data representation over time as the one coming from many IoT resources. The module includes date navigation options as date pickers in order to access the historical data based on its time frame. It also features the possibility of comparing two metrics simultaneously.

	- **Static data module:** This is designed as a simple, more informative view capable of dealing with unstructured resources where data cannot be processed. It offers basic information about the asset and allows the user to download the original source as a file. The file type might vary depending on the asset and support for multiple formats is planned.
	
### [D] Assets details and metadata: 

This supplies a detailed insight on the asset metadata. It provides information about the resource such as the provider, the service or the asset type, and thus supports users in getting a clear understanding about the data they are seeing.

### [E] Provider details: 

This module provides in-depth information about the provider of the asset. It is designed to give advance users as experimenters a clearer understanding of what asset they are browsing..

### [F] Recommendations:

The recommendation section suggests four similar assets. Similarity is understood as: asset A and B are concidered similar if most users who previously viewed asset A also viewed asset B. a machine learning algorithm is handling this in the background, and the idea is that user will get suggestions on relevant alternative or supplementary assets to take into account when traversing available data sources in the OrganiCity facility.

#### Under the hood

The asset recommender is implemented leveraging Prediction.io (http://predictionio.incubator.apache.org), and we have used this recommender template (http://predictionio.incubator.apache.org/templates/similarproduct/quickstart/).

When an end user clicks on a specific assert in the UDO, a "view event" is send to the predition.io core machine learning platform. The event sends information on which user clickes on the asset (only the userid), what asset was clicked (only asset id), and a timestamp for when the event happened. This behavior is shown with the "Event Data" arrow in the diagram below.

![Prediction.io diagram](../images/udo_recommender.png)

As a parallel action we are asking the recommender engine for recommendations that relate to the clicked asset. This is illustrated with the two arrows "Query via REST" and "Predicted Result" in the above diagram. Since all communication is happening between the browser (client) and a remote server, these actions can be delayed a few seconds. A consequense is that the end user might not see recommendations until a few seconds after they clicked a specific assert in the UDO. This action is happening asynchroniously, so there will be no sensation of the website being slow.

Over time we will get a huge amount of usage data, which will only make the recommendations better. This is due to the fact that machine learning algorithms need to be trained regularly in order to interpret input and produce a relevant output. In the case of the recommender engine, we train it once every night (around midnight) in order to keep recommendations as update as possible without slowing the recommendation engine down, thereby keeping a good end user experiencing.

### [G] Comments: 

This module allows users to comment on an asset.
