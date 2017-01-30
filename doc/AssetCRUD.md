![Organicity logo](../images/organicity_logo_pink_100.png)

[Back to the Guidelines Overview page](https://organicityeu.github.io/).

# CRUD of Assets

This is just an overview of how to CRUD assets.

## CREATE (HTTP POST)

To [create an asset](HowToPushAnAsset.md), you must do an HTTP **POST** to the OC-Exp. Site:

```
POST https://exp.orion.organicity.eu/v2/entities

Authorization: Bearer <AccessToken>
Content-Type: application/json
Accept: application/json
X-Organicity-Application: <ApplicationId>
X-Organicity-Experiment: <ExperimentId>

{
  "id": "urn:oc:entity:experimenters:<MainExperimenterId>:<ExperimentId>:<AssetId>",
  "type": "urn:oc:entityType:demo",
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  }
}
```

The response is a `201 Created`, which includes a `location` header:

```
Status Code: 201 Created
...
Content-Length: 0
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Sep 2016 12:37:07 GMT
...
Location: http://discovery.organicity.eu/v0/assets/urn:oc:entity:experimenters:<MainExperimenterId>:<ExperimentId>:<AssetId>
...
```

## READ (HTTP GET)

To read an asset, you must use the [Asset Discovery Service](https://organicityeu.github.io/api/AssetDiscovery.html).
You can simply do an HTTP GET on the `location` header returnd by the creation:

```
GET http://discovery.organicity.eu/v0/assets/urn:oc:entity:experimenters:<MainExperimenterId>:<ExperimentId>:<AssetId>
```

## UPDATE (HTTP UPDATE)

To [update an asset](HowToUpdateDeteleAnAsset.md#update-an-asset), you must do an HTTP **POST** to the OC-Exp. Site.
JSON attributes `id` and `type` are not allowed! Be aware of the `/attrs` in the URL:

```
POST https://exp.orion.organicity.eu/v2/entities/urn:oc:entity:experimenters:<MainExperimenterId>:<ExperimentId>:<AssetId>/attrs

Authorization: Bearer <AccessToken>
Content-Type: application/json
Accept: application/json
X-Organicity-Application: <ApplicationId>
X-Organicity-Experiment: <ExperimentId>

{
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  }
}
```

The response is a `204 No Content`:

```
Status Code: 204 No Content
...
Content-Length: 0
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Sep 2016 12:37:07 GMT
```

## DELETE (HTTP DELETE)

To [delete an asset](HowToUpdateDeteleAnAsset.md#delete-an-asset), you must do an HTTP **DELETE** to the OC-Exp. Site:

```
DELETE  https://exp.orion.organicity.eu/v2/entities/urn:oc:entity:experimenters:<MainExperimenterId>:<ExperimentId>:<AssetId>

Authorization: Bearer <AccessToken>
Accept: application/json
X-Organicity-Application: <ApplicationId>
X-Organicity-Experiment: <ExperimentId>
```

The response is a `204 No Content`, which tells you that assed was deleted.
