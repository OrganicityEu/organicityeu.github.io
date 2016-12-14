![Organicity logo](../images/organicity_logo_pink_100.png)

[Back to the Guidelines Overview page](https://organicityeu.github.io/).

# Tutorial: How to update or delete an Assets to the Organicity Experimenter Site

**Precondition**:

* To be able to update/delete an asset to the Organicity Experimenter Site (OC-Exp. Site), you need the **experimenter** role. This will be assigned to you by the Organicity team.
* You should know [how to push an Asset to the Organicity Platform](HowToPushAnAsset.md).

## Update an asset

The update of an asset works similar to the creation (with some minor changes):

### HTTP headers

To update a new asset, please do an HTTP POST on `https://exp.orion.organicity.eu/v2/entities/<AssetID>/attrs` with the
*same HTTP headers* as in the creation step:

```
Authorization: Bearer <AccessToken>
X-Organicity-Application: <ApplicationID>
X-Organicity-Experiment: <ExperimentID>
Content-Type: application/json
Accept: application/json

<Asset in JSON>
```

*Hint*: Be aware of the `/attrs` while updating an asset!

### Asset ID

Important for the update is, that the *same Asset ID* is used as during the creation.

### HTTP body

The HTTP body is an asset in JSON format [as described here](AssetDataModel.md). To update an asset, you're not allowed to use the JSON attributes
`id` and `type`.

A simple valid asset for an update could be:

```
{
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  }
}
```

### Wiring everything together

Next, we wire everthing together: The HTTP headers and the asset:

```
POST https://exp.orion.organicity.eu/v2/entities/urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1/attrs

Authorization: Bearer <AccessToken>
Content-Type: application/json
Accept: application/json
X-Organicity-Application: 57e1285a10590cb31ca82aa7
X-Organicity-Experiment: 57e127c010590cb31ca82aa4

{
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  }
}
```

If the asset was created before, you get a `404 Not Found` which tells you, that the asset does not exixts. Please make sure, that you [pushed the Asset to the Organicity Platform](HowToPushAnAsset.md).

If the asset was created before, and everything else is correct, e.g, HTTP headers, asset format, etc., then the response is a `204 No Content`, which tells you that asset was updated:


```
Status Code: 204 No Content
...
Content-Length: 0
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Sep 2016 12:37:07 GMT
...
```

### Validate, that the asset was updated successfully with the Urban Data Obervatory

To verify, that the asset was updated in Organicity Central Site, you must use the [Asset Discovery Service](https://organicityeu.github.io/api/AssetDiscovery.html).
You can simply do an HTTP GET on the `location` header returnd by the creation:

```
GET http://discovery.organicity.eu/v0/assets/urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1
```

*Hint*: This only works, if the privacy level of your asset is public.

## Delete an asset

To delete the asset, you must do an HTTP **DELETE** to the OC-Exp. Site. You must add the `Authorization`,
`X-Organicity-Application` and `X-Organicity-Experiment` headers as well:

```
DELETE https://exp.orion.organicity.eu/v2/entities/urn:oc:entity:experimenters:cf2c1723-3369-4123-8b32-49abe71c0e57:57e127c010590cb31ca82aa4:1?type=urn:oc:entityType:demo

Authorization: Bearer <AccessToken>
Accept: application/json
X-Organicity-Application: 57e1285a10590cb31ca82aa7
X-Organicity-Experiment: 57e127c010590cb31ca82aa4
```

The response is a `204 No Content`, which tells you that asset was deleted:

```
Status Code: 204 No Content
...
Content-Length: 0
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Sep 2016 12:37:07 GMT
...

## Update/Delete as an Participant

This is not supported.