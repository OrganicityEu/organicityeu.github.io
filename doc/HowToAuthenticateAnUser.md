![Organicity logo](../images/organicity_logo_pink_100.png)

[Back to the Guidelines Overview page](https://organicityeu.github.io/).

# Tutorial: How to Authenticate a User for your Application

**Goal of this tutorial**:

* Authenticate a user for your own application with [*Organicity Accounts*](https://accounts.organicity.eu).

**Preconditions**:
* To be able to authenticate users for your application, you must have the role `experimenter` assigned.
* You created an experiment within the [Organicity Experimenter Portal](http://experimenters.organicity.eu/).
* The Experimenter Portal provides you a `client_id` and a `client_secret`, both is needed in this tutorial.

[Organicity Accounts](https://accounts.organicity.eu) provides unified user management to the whole Organicity platform. Of course, a unified experience requires all Organicity components to properly talk to Organicity Accounts. This document guides through the process of setting your component up.

## TODO

* Scopes
* Refresh_token

## OAuth2 Grants

[Organicity Accounts](https://accounts.organicity.eu/) is an [OAuth2 server](https://tools.ietf.org/html/rfc6749), which provides a Single Sign-On (SSO) service. Thus, you can login to
all Organicity Components by using one single account. In case of web-applications, you even just need to login once.
Probably you know this from Google: To use gmail, youtube or the calendar, you use the same account.

<!--
### Roles

To use Organicity Accounts, OAuth2 provides different Roles:

* Client: This is your application. Within OAuth2, it is called *Client*
* User: The user, who wants to login to your application
* Resource Server:
* Authorization Server
-->

### Client ID + Client Secret

After creating your experiment within the [Experimenter Portal](http://experimenters.organicity.eu/), you will receive a `client_id` and a `client_secret`:

* The `client_id` is public, so it can be added to the source code, which is uses it to build a login URL finally.
* The `client_secret` is private and must be kept confidential!

### Grant Types

[The OAuth2 specification](https://tools.ietf.org/html/rfc6749) provides several *Grant Types* for different types of applications:

* **Authorization Code Grant**: Used for web-applications with a server-side component, which can keep the `client_id` confidential.
* **Implicit Grant**: Used for browser-based applications (e.g., JavaScript-only applications without a server-side component) or mobile apps.

In this two grants, after a successful login, the applications will act **in name of the user**. There is one more important grant:

* **Client Credential Grant**: Only used for application, which **act on their own**.

Per default, this grant ist not enabled for experiments.

#### Endpoints

The following endpointd are needed by the grants described below:

* *Authorization Endpoint*: https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth
* *Token Endpoint*: https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/token


#### Authorization Code Grant

As said before, this grant is used for applications running on a web server. Thus, the source code of the web-application
keeps the `client_secret` confidential. This grant is divided in two flows:

For the *first flow*, you must extend the authorization endpoint with the following
query parameters:

* `client_id=<CLIENT_ID>`: Here, you must include your `client_id`, which is provided by the Experimenter Portal
* `response_type=code`: Here, the response type must be `code`
* `redirect_uri=<REDIRECT_URI>`: Within the Experimenter Portal, you can configure Redirect URIs. After a successful login, the user is redirected to that URI.

**HINT**: Make sure, that you're web-application, and thus the `redirect_uri`, runs on HTTPS. This ensures, that the exchanged data cannot be intercepted during the login process.

Thus, the full authorization URL looks as follows:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=<CLIENT_ID>&response_type=code&redirect_uri=<REDIRECT_URI>
```

An example:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=example&response_type=code&redirect_uri=https://example.com/callback
```

Calling this URL, the users must login with their credentials. If the login is successful, the user is redirected back to the configured redirect URI.
OAuth2 appends one parameter to the URL:

* `code`: This is the so called **authorization_code**, which is needed in the next step.

Thus, the full callback URL looks as follows:

```
<REDIRECT_URI>?code=<CODE>
```

An example:

```
https://example.com/callback?code=0123456789
```

Now, the *second flow* starts. You're web-application takes this `code` and must send an HTTP POST request to the
*token endpoint*, with the following parameters:

* `client_id=<CLIENT_ID>`: Here, you must include your `client_id`, which is provided by the Experimenter Portal
* `grant_type=authorization_code`: The `grant_type` must be `authorization_code`. Here you see, where the name comes from.
* `redirect_uri=<REDIRECT_URI>`: The same URI as before
* `code=<CODE>`: The code from the callback URL
* `client_secret=<CLIENT_SECRET>`: Here, you must include your `client_secret`, which is provided by the Experimenter Portal

**HINT**: Make sure, that this call is done from the web-application in the background, thus the `client_secret` stays confidential!

An example:

```
TODO
```

Calling this URL, the server verifies your credentials and the code. If successful, the server returns a JSON, which contains the following attributes:

* `token_type`: This is usually `Bearer`
* `access_token`: this is the **Access Token** in JSON
* `expires_in`: a number in seconds, how long the Access Token is valid

An example:

```
{
    "access_token": "<ACCESS_TOKEN>",
    "token_type": "bearer",
    "expires_in": 300,
}
```

[See here for further details on the Access Tokens](HowToAccessToken.md).

#### Implicit Grant

**HINT**:

This grant is used for browser-based applications (e.g., JavaScript-only applications without a server-side component) or mobile apps.
These kind of applications cannot keep the `client_secret` confidential. The Implicit Grant has just one flow, which returns
the Access Token directly. The Grant is called *implicit*, as no intermediate credentials (such as an authorization code) are issued.


For this grant, you must extend the authorization endpoint with the following query parameters:

* `client_id=<CLIENT_ID>`: Here, you must include your `client_id`, which is provided by the Experimenter Portal
* `response_type=token`: Here, the response type must be `token` (becaue you'll get an Access Token immediately)
* `redirect_uri=<REDIRECT_URI>`: Within the Experimenter Portal, you can configure Redirect URIs. After a successful login, the user is redirected to that URI.

**HINT**: Make sure, that you're web-application, and thus the `redirect_uri`, runs on HTTPS. This ensures, that the exchanged data cannot be intercepted during the login process.

Thus, the full authorization URL looks as follows:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=<CLIENT_ID>&response_type=token&redirect_uri=<REDIRECT_URI>
```

An example:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=example&response_type=token&redirect_uri=https://example.com/callback
```

Calling this URL, the users must login with their credentials. If the login is successful, the user is redirected back to the configured redirect URI.
OAuth2 appends one parameter to the URL:

* `token`: This is the Access Token in JSON

The JSON contains the following attributes (similar to the *Authorization Code Flow*):

* `token_type`: This is usually `Bearer`
* `access_token`: this is the **Access Token** itself
* `expires_in`: a number in seconds, how long the Access Token is valid

An example:

```
{
    "access_token": "<ACCESS_TOKEN>",
    "token_type": "bearer",
    "expires_in": 300,
}
```

[See here for further details on the Access Tokens](HowToAccessToken.md).

#### Client Credential Grant

**HINT:** Per default, this grant ist not enabled for experiments.

The **Client Credential Grant** is used for applications, which **act on their own**. For this, the *Service Account* of the Client must be enabled.

Service Accounts usually apply for Organicity Accounts, but can also be used by e.g. experiments. To use a Service Account, you perform a simple HTTPS with your `client_id` and `client_secret` call, which will return a suitable Access Token:

```
POST /realms/organicity/protocol/openid-connect/token HTTP/1.1
Host: accounts.organicity.eu
Authorization: Basic <BASE64_ENCODE(client_id:client_secret)>
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
```

The Authorization header contains your `client_id` and `client_secret` encoded with HTTP basic authentication. For details on how to create this field, [see here](https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side).

The call returns a JSON record, which contains the following attributes:

* `token_type`: This is usually `Bearer`
* `access_token`: this is the **Access Token** itself
* `expires_in`: a number in seconds, how long the Access Token is valid

An example:

```
{
    "access_token": "<ACCESS_TOKEN>",
    "token_type": "bearer",
    "expires_in": 300,
}
```

[See here for further details on the Access Tokens](HowToAccessToken.md).

# Libraries

Of course, you do not have to write you're own OAuth2 adapter. You can use well-tested existing librabries, like the following:

* Node.js with Passport: [passport-oauth2](https://github.com/jaredhanson/passport-oauth2)
* PHP: [oauth2-client](https://github.com/thephpleague/oauth2-client)

For these two, we created two minimal working examples:

* Node.js with Passport:  [accounts-demo-passport](https://github.com/OrganicityEu/accounts-demo-passport)
* PHP: [accounts-demo-php](https://github.com/OrganicityEu/accounts-demo-php)

In order to talk to Organicity Accounts, your component needs to talk to the Accounts Server using any of the above mentioned grants.

# Sources on OAuth2

* https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
* https://alexbilbie.com/guide-to-oauth-2-grants/
* https://aaronparecki.com/2012/07/29/2/oauth2-simplified