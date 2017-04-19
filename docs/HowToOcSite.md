# Tutorial: OC Site Federation - How to be an OC Site

**Goal of this tutorial**:

* Push an asset (as OC Site) to the Organicity Central Orion.

**Precondition**:

* To be able to push assets to the *Organicity Central Orion* you need a `client_id` and a `client_secret`, which has the `ocsite` role assigned.

The core component of the federation is the [Asset-Subscription-Proxy](https://github.com/OrganicityEu/Asset-Subscription-Proxy), which subscribes itself at an Orion. Thus, the Orion notifies the Asset-Subscription-Proxy about new Assets. As soon the Asset-Subscription-Proxy gets notified, it forwards the asset to the Organicity Central Orion in am authorized way. This architecture can be seen below:

![Architecture: OC Site + OC Central Orion](../images/oc-site-central.png)


# Setup

## Docker

Using docker, it installs MongoDB, Orion and the Asset-Subscription-Proxy. We're using `docker-compose`, thus install it first:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /opt/docker-compose
sudo chmod 755 /opt/docker-compose
```

Next, get the config files

```
sudo curl -L "https://raw.githubusercontent.com/OrganicityEu/docker/master/mongo%2Borion%2Basset-subscription-proxy.yml" -o /opt/mongo+orion+asset-subscription-proxy.yml
sudo curl -L "https://raw.githubusercontent.com/OrganicityEu-Platform/Asset-Subscription-Proxy/master/config.js.docker" -o /opt/organicity-asset-subscription-proxy-config.js
```

Add your credentials (e.g., client-id and client secret) to the `/opt/organicity-asset-subscription-proxy-config.js` and run the following:

```
/opt/docker-compose -f /opt/mongo+orion+asset-subscription-proxy.yml up
```

This installs and starts MongoDB, Orion and the Asset-Subscription-Proxy. If it was successful, you will see the subscription of the
Asset-Subscription-Proxy at the Orion:

```
Successful: /v2/subscriptions/57ea49394735cf79905858c0
```

## Manually


### Install the Asset-Subscription-Proxy


To push assets to the Organicity Central Orion, please clone the repository of the Asset-Subscription-Proxy
 and configure it:

```shell
git clone https://github.com/OrganicityEu-Platform/Asset-Subscription-Proxy.git
cd Asset-Subscription-Proxy
cp config.js.example config.js
```

Next, install the Dependencies:

```shell
npm install
```

### Configure the Asset-Subscription-Proxy

Edit the `config.js` by applying your `client_id` and `client_secret`.

For the **Dev-Server**, make sure the following configuration is used:

```javascript
config.asset_directory_host = 'dev.orion.organicity.eu';
config.asset_directory_port = '443';
config.asset_directory_protocol = 'https'
```

For the **Production Server**, make sure the following configuration is used:

* TODO

Afterwards, you can start the proxy:

```shell
node server
```

### Add Subscription to your local Orion

Edit the `config.js` by applying your Orion configuration. In this tutorial we assume, that the Orion runs on `localhost:1026`:


Thus, use the following configuration:

```javascript
config.orion_host = 'localhost';
config.orion_port = 1026;
config.orion_protocol = 'http';
```

The default `subscription_url` is `http://localhost:9999`. If this is wrong (e.g., Orion and Asset-Subscription-Proxy run on different machines), please modify the `config.subscription_url`.

Afterwards, you can initiate the subscription:

```shell
node subscribe
```

If it was successful, you will see the subscription of the
Asset-Subscription-Proxy at the Orion:

```shell
Successful: /v2/subscriptions/57ea49394735cf79905858c0
```

 +**Hint**: You can run this only once. Otherwise, you have multiple subscriptions.
 
To unsubscribe, run:

```shell
node unsubscribe
```

# Verify subscription at your local Orion

Now you can verify your subscription:

```shell
GET http://localhost:1026/v2/subscriptions/57ea49394735cf79905858c0
Accept: application/json
Fiware-Service: organicity
```

# Push an Asset to your local Orion

Test the federation. Keep the log of the Asset-Subscription-Proxy (or the docker log) open. Create an asset at your local orion, with:

* HTTP header `Fiware-Service: organicity`
* The AssetID must correspond to your Site, e.g., `urn:oc:entity:ocsite-<SiteName>:<AssetID>`

An example (client ID `ocsite-test`):

```shell
POST http://{IP}:1026/v2/entities
Accept: application/json
Content-Type: application/json
Fiware-Service: organicity

{
  "id": "urn:oc:entity:test:1",
  "type": "urn:oc:entityType:demo",
  "TimeInstant": {
    "type": "urn:oc:attributeType:ISO8601",
    "value": "2016-10-04T13:45:00.000Z"
  }
}
```
 

The local Orion should send a notification to the Asset-Subscription-Proxy, which pushes the asset to the Organicity Central Orion. You should see messages like

```shell
2017-04-18 15:11:43.547  - DEBUG: Organicity-subscription-proxy - ### Try to update asset
2017-04-18 15:11:43.547  - INFO: Organicity-subscription-proxy - Asset updating: urn:oc:entity:test:1
2017-04-18 15:11:44.231  - DEBUG: Organicity-subscription-proxy - Update failed.
2017-04-18 15:11:44.231  - DEBUG: Organicity-subscription-proxy - ### Try to create asset
2017-04-18 15:11:44.231  - INFO: Organicity-subscription-proxy - Asset creating: urn:oc:entity:test:1
2017-04-18 15:11:44.907  - INFO: Organicity-subscription-proxy - Asset created: urn:oc:entity:test:1
2017-04-18 15:11:44.907  - DEBUG: Organicity-subscription-proxy - All assets handled!
```

*Hint*: There are always two steps (update and create) required to create an asset.