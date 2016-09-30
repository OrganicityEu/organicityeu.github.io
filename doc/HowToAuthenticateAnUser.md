![Organicity logo](../images/organicity_logo_pink_100.png)

[Back to the Guidlines Overview page](https://organicityeu.github.io/).

# Tutorial: How to Authenticate a User for your Application

**Goal of this tutorial**: Authenticate a user for your own application with [*Organicity Accounts*](TODO).

**Preconditions**: To be able to authenticate users for your application, you must have the role `experimenter` assigned.
Additionally, you created an experimen within the [Organicity Experimenter Portal](TODO). The Experimenter Portal
provides you a `client_id` and a `client_secret`, both is needed in this tutorial.

## TODO

* Scopes
* Refresh_token
* Implicit flow

## OAuth2 Grants

[Organicity Accounts](https://accounts.organicity.eu/) is an [OAuth2 server](https://tools.ietf.org/html/rfc6749), which provides a Single Sign-On (SSO) service. Thus, you can login to
all Organicity Components by using one single account. In case of web-applications, you even just need to login once.
Orobably you know this from Google: To use gmail, youtube or the calendar, you use the same account.

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

OAuth2 provides several *Grant Types* for different types of applications:

* **Authorization Code Grant**: Used for applications running on a web server (e.g., web-applications) , which can keep the `client_id` confidential.
* **Implicit Grant**: Used for browser-based applications (e.g., JavaScript-only applications without a backend) or mobile apps.

In this two grants, after a successful login, the applications will act **in name of the user**. There is one more important grant:

* **Client Credential Grant**: Only used for application, which **act on their own**.

Per default, this grant ist not enabled for experiments. Thus, we will cover the first two grants:

#### Authorization Endpoint

The *authorization endpoint* for all grants is the following:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth
```

#### Authorization Code Grant

As said before, this grant is used for applications running on a web server. Thus, the source code of the web-application
keeps the `client_secret` confidential. This grant is divided in two flows:

For the *first flow*, you must extend the authorization endpoint with the following
query parameters:

* `client_id=<CLIENT_ID>`: Here, you must include your `client_id`, which is provided by the Experimenter Portal
* `response_type=code`: Here, the response type must be `code`
* `redirect_uri=<REDIRECT_URI>`: Within the Experimenter Portal, you can configure Redirect URIs. After a successful login, the user is redirecte to that URI.

**HINT**: Make sure, that you're web-application, and thus the `redirect_uri`, runs on HTTPS. This ensures, that the exchanged data cannot be intercepted during the login process.

Thus, the full authorization URL looks as follows:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=<CLIENT_ID>&response_type=code&redirect_uri=<REDIRECT_URI>
```

An example:

```
https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth?client_id=example&response_type=code&redirect_uri=https://example.com/callback
```

Calling this URL, the user must login with their credentials. If the login is successful, the user is redirected back to the configured redirect URI.
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
*authorization endpoint*, with the following parameters:

* `client_id=<CLIENT_ID>`: Here, you must include your `client_id`, which is provided by the Experimenter Portal
* `grant_type=authrotization_code`: The `grant_type` must be `authrotization_code`. Here you see, where the name comes from.
* `redirect_uri=<REDIRECT_URI>`: The same URI as before
* `code=<CODE>`: The code from the callback URL
* `client_secret=<CLIENT_SECRET>`: Here, you must include your `client_secret`, which is provided by the Experimenter Portal

**HINT**: Make sure, that this call is done from the web-application in the background, thus the `client_secret` stays confidential!

Calling this URL, the server verifies your credentials and the code. If successful, the server returns a JSON, contiantins the following attributes:

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

#### Implicit Grant

* TODO

# Sources on OAuth2

* https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
* https://aaronparecki.com/2012/07/29/2/oauth2-simplified
* https://alexbilbie.com/guide-to-oauth-2-grants/
* https://openid.net/specs/openid-connect-core-1_0.html