# Tutorial: How to push an Assets to the Organicity Experimenter Site

#### Precondition

To be able to push an asset to the Organicity Experimenter Site (OC-Exp. Site), you need the **experimenter** role. This will be assigned to you by the Organicity team.

#### Postman

We created a postman file, which contains all steps from this guide:

https://github.com/OrganicityEu/postman/blob/master/Asset-CRUD.json


## Create an Experiment and an Application

First of all, you must create an experiment within the [Experimenter Portal](http://experimenters.organicity.eu). 
Please log in and click on **[NEW EXPERIMENT]** and follow the instructions.
After you created an experiment, select the experiment and click on **[Experiment Credentials]**. You will find two parts, for example:

* Client ID: `experiment-59f9d6a7a58622c52afcd885`
* Client Secret: `96a4bddf-25e6-49b0-b47b-37f9dc0c9eea`

Afterwards you must create an application. Please select the experiment and click on **[applications]**.
After you created the application, please select that application. On top, you will find three IDs, for example:

* **Experimenter ID**: `cf2c1723-3369-4123-8b32-49abe71c0e57`
* **Experiment ID**: `57e127c010590cb31ca82aa4`
* **Application ID**: `57e1285a10590cb31ca82aa7`

Go back to the overview and makre sure, that the experiment shows the state `RUNNING`. 
You can stop it, by clicking on `RUNNING` in the state column. The state is `STOPPED` afterwards.
If an experiment is not running, you're not able to push assets.

## Authorizaton

All HTTP requests require the `Authorization` header. Please [follow the 'Client Credential Grant'](HowToAuthenticateAnUser#client-credential-grant) to get an Access Token.

## Push a new asset

The Asset endpoint is located under [https://exp.orion.organicity.eu/v2/entities](https://exp.orion.organicity.eu/v2/entities).

### HTTP headers

To create a new asset, please do an HTTP POST on https://exp.orion.organicity.eu/v2/entities with the following HTTP headers:

```shell
Authorization: Bearer <AccessToken>
X-Organicity-Application: <ApplicationID>
X-Organicity-Experiment: <ExperimentID>
Content-Type: application/json
Accept: application/json

<Asset in JSON>
```

Here, you must use an [Access Token](/HowToAuthenticateAnUser) which is [issued for you](/HowToAuthenticateAnUser).

For the above IDs it looks like this:

```shell
POST https://exp.orion.organicity.eu/v2/entities

Authorization: Bearer <AccessToken>
Content-Type: application/json
Accept: application/json
X-Organicity-Application: 57e1285a10590cb31ca82aa7
X-Organicity-Experiment: 57e127c010590cb31ca82aa4

<Asset in JSON>
```

### HTTP body

The HTTP body is an asset in JSON format [as described here](/AssetDataModel). Important for the creation is the correct Asset ID. An Asset ID has the form:

```json
urn:oc:entity:experimenters:<ExperimenterId>:<ExperimentId>:<AssetId>
```

The `<ExperimenterId>` and `<ExpeirmentID>` are the one from above. The `<assetID>` is application specifc. Thus, you decide how they look like. In our example, we wil just use an `1` as the Asset ID. In our example, it looks as follows:

```json
urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1
```

A simple valid asset could be:

```json
{
	"id": "urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1",
	"type": "urn:oc:entityType:demo",
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  },
 "location": {
 	"type": "geo:point",
 	"value": "53.83404, 10.704197"
 }
}
```

Hint: the attribute `TimeInstant` is required. 
The locaion attribute is optional, but needed if the assets should be shown in the [Urban Data Observatory](/UrbanDataObservatory).

Further infomations about the attributes can be found in the [Asset Data Model](/AssetDataModel).

### Wiring everything together

Next, we wire everthing together: The HTTP headers and the asset:

```shell
POST https://exp.orion.organicity.eu/v2/entities

Authorization: Bearer <AccessToken>
Content-Type: application/json
Accept: application/json
X-Organicity-Application: 57e1285a10590cb31ca82aa7
X-Organicity-Experiment: 57e127c010590cb31ca82aa4

{
	"id": "urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1",
	"type": "urn:oc:entityType:demo",
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  },
 "location": {
 	"type": "geo:point",
 	"value": "53.83404, 10.704197"
 }
}
```

The response is a `201 Created`, which includes a `location` and a `X-remainingQuota` header:

```shell
Status Code: 201 Created
...
Content-Length: 0
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Sep 2016 12:37:07 GMT
...
Location: /v2/entities/urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1?type=urn:oc:entityType:demo
X-remainingQuota: 999946
...
```

The URL in the `location` header always links to the [Assets Discovery API](https://organicityeu.github.io/api/AssetDiscovery.html).
The `X-remainingQuota` header tells you, how many assets you can push until the quota is reached.

### Validate, that the asset was created successfully with the Asset Discovery API

To verify, that the asset was created in the Organicity Central Site, you must use the [Asset Discovery API](https://organicityeu.github.io/api/AssetDiscovery.html).
You can simply do an HTTP GET on the `location` header returnd by the creation:

```shell
GET https://discovery.organicity.eu/v0/assets/urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1
```

### Validate, that the asset was created successfully with the Urban Data Obervatory

To validate , that the asset was created successfully with the Urban Data Obervatory, just use your `assetID` and open the follwoing URL in the browser:

```shell
GET https://observatory.organicity.eu/assets/{assetID}
```

That means for the above `assetID`:

```shell
GET https://observatory.organicity.eu/assets/urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1
```
*Hint*: Your assets needs the `location` attribute to be usable in the Urban Data Obervatory

## Push as an Participant

To push an asset as an participant, the participant must be part of you experiment. A participant can be invited
with the [Experimenter Portal](http://experimenters.organicity.eu/). If a participant logs in to your application,
the `participant` role will be assigned. The pushing itself works as abobe.

**HINTS**:
* In the Asset ID, you keep the `<ExperimenterId>`!
* A participant can just create or read assets. Update and delete is not supported for participants.

## Delete and update assets

See How to [Delete or Update an asset](/HowToUpdateDeteleAnAsset).

## Demo

### Push a new asset

An XMLHTTPRequest-based example can be found here: https://organicityeu.github.io/demo/pushAsset.html

## TODO in this documentation

* Public/Private
