# Tutorial: How to Refresh Tokens

**Goal of this tutorial**:

* Refresh the token of a user for your own application with [*Organicity Accounts*](https://accounts.organicity.eu) (Offline Tokens).

**Preconditions**:

* You created an experiment within the [Organicity Experimenter Portal](http://experimenters.organicity.eu/).
* The Experimenter Portal provides you a `client_id` and a `client_secret`, both is needed in this tutorial.
* Additionally, you're experiment needs the role `offline_access` to get Refresh Tokens. This will be assigned to your experiment by the Organicity team.

Authentication in Organicity is activity-centere: Users acquire [Access Tokens](/HowToAccessToken) to perform an action with them in the next minutes. Access Tokens invalidate after 5 minutes, and have to be renewed with Refresh Tokens.

While this is good for security, it is unusable for long-term applications that run without supervision, like environmentally deployed sensor nodes.
As these nodes still need to contact Organicity, for example to post measured data, they need a way to authenticate. This is facilitated by Refresh Tokens.

**Please note**: In order to generate Offline Tokens, a user needs to have the required role `offline_access`. Usually, every user gets this role when they sign up.

## Acquire Refresh Tokens

To acquire Refresh Tokens, you just need to append the additional query parameter `scope=offline_access` to your Authorization Endpoint.

### Authorization Code Grant

The flow is the same as [described here](/HowToAuthenticateAnUser), just with the additional query parameter `scope=offline_access`.

The full authorization URL looks as follows:

```shell
 https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?response_type=code&client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URI>&scope=offline_access
```

As in the Authorization Code Grant, it returns an *Authorization Code* which must be converted into an Access Token.

If successful, the server returns a JSON, which contains the following attributes:

* `token_type`: This is usually `Bearer`
* `access_token`: this is the **Access Token** in JSON
* `expires_in`: a number in seconds, how long the Access Token is valid
* `refresh_token`: this is the **Refresh Token**
* `typ`: The type is àlways `Offline`
* `refresh_expires_in`: this is usually `0`, because the Refresh Token never exipres

An example:

```json
{
    "access_token": "<ACCESS_TOKEN>",
    "token_type": "bearer",
    "expires_in": 300,
    "refresh_token": <REFRESH_TOKEN>,
    "typ": Offline",
    "refresh_expires_in": 0
}
```

### Implicit Grant

This grant cannot return a refresh token, because the application cannot keep the `client_secret` confidential (see below).

### Client Credential Grant

This grant cannot return a refresh token, because this grant directly returns the Access Token.

## Refresh Token Grant

To use a the *Refresh Token Grant*, you perform a simple HTTPS call, which will return a new suitable Access Token.

Option A (`client_id` and `client_secret` in the header):

```shell
POST /realms/organicity/protocol/openid-connect/token HTTP/1.1
Host: accounts.organicity.eu
Authorization: Basic <BASE64_ENCODE(<CLIENT_ID>:<CLIENT_SECRET>)> 
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=<REFRESH_TOKEN>
```

The Authorization header contains your `client_id` and `client_secret` encoded with HTTP basic authentication. For details on how to create this field, [see here](https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side).

Option B (`client_id` and `client_secret` in the body):

```shell
POST /realms/organicity/protocol/openid-connect/token HTTP/1.1
Host: accounts.organicity.eu
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=<REFRESH_TOKEN>&client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>
```

Please note, that the same `client_id` and `client_secret` is needed to refresh the token.

The server verifies your credentials and the refresh token.
If successful, the server returns a JSON record as described above.

## Please note

* Refresh Tokens are valid indefinitely, thus Refresh Tokens will remain valid from call to call, so each renewal can be performed with **the same initial Refresh Token**! This means, there is no reason to store the refresh Token from the response. Thus, Offline-Tokens can be used by embedded devices like IoT devices.
* [This is normal **Access Token**, which can be used a Bearer Token for all Organicity APIs](/HowToAccessToken)
* The **Access Token is valid for 5 Minutes**, thus a refresh is needed after 5 minutes.
* An Access Token needs to be refreshed at least **every 30 days**, as otherwise the Refresh Token will invalidate, and a new Refresh Token needs to be generated.

## Code Sample

Next we will describe a way, how you get Offline Tokens with the node.js tool [accounts-demo-passport](https://github.com/OrganicityEu/accounts-demo-passport).

To get the initial Refresh Token, please install the tool as described in the README. Change the file `server/auth/oauth2.js` by adding your `client_id` and `client_secret` and run the application. The application runs on port 3000 by default. Set the environment variable PORT to another if needed (e.g., `PORT=4000`). Make sure, that you configure the following callback URL in the [Experimenter Portal](http://experimenters.organicity.eu/):

* http://localhost:3000/auth/oauth2/callback

Afterwards, open the application within your browser:

* http://localhost:3000

Please login with your username and password (or social login) and open the profile page. There you find two tokens: an Access Token and a Refresh Token.
