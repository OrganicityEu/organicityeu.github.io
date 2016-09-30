### Access Token

Access Tokens issued by Organicity Accounts are valid for 5 minutes. It can be used in the backend or in the frontend of the web-application.
The Access Token is not just a random token, Organicity Accounts returns **OpenID Connect Tokens**.
[OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) is an extention for OAuth2.

#### OpenID Connect Tokens

OpenID Connect Tokens are represented as [JSON Web Tokens](https://tools.ietf.org/html/rfc7519) (JWT).
A JWT is represented as a sequence of BASE64-encoded parts, separated by a dot. An example:

```
<PART_1>.<PART_2>.<PART_3>
```

* `<PART_1>` is the MAC in JSON, which is used by the server to sign the JWT (usually SHA-256)
* `<PART_2>` contains a set of claims in JSON
* `<PART_3>` contains the signature as [JSON WebSignature](https://tools.ietf.org/html/rfc7515) (JWS)

We will focus on the `<PART_2>`: contains a set of claims in JSON, as they are specified by the
[Open ID connect specification](https://openid.net/specs/openid-connect-core-1_0.html#IDToken). Some examples:

* `sub`: The `Subject Identifier`, which is the unique ID of the user
* `aud`: The `Audience`, that this ID Token is intended for (e.g., your `client_id`)
* `exp`: Expiration time on or after which the ID Token MUST NOT be accepted for processing

Additonally, it contains the `roles` of the user, and some informations about the user.

An example:

```
{
  "jti": "01c68b6a-e3ec-4472-9a80-9f53ba266104",
  "exp": 1475225200,
  ...
  "iss": "https://accounts.organicity.eu/realms/organicity",
  "aud": "example",
  "sub": "cf2c1723-3369-4123-8b32-49abe71c0e57",
  "typ": "Bearer",
  ...
  "realm_access": {
    "roles": [
      "offline_access",
      "experimenter"
    ]
  },
  ...
  "name": "Dennis Boldt",
  "preferred_username": "boldt",
  "given_name": "Dennis",
  "family_name": "Boldt",
  "email": "boldt@itm.uni-luebeck.de"
}
```

You're application can decode and verify the JWT and use that informations.

This **Access Token** can be used to call different [Organicity APIs](https://organicityeu.github.io/api/).
