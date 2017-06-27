# Asset Annotation Service

<style>
img[src$="centerme"] {
  display:block;
  margin: 0 auto;
}
</style>

The *Asset Annotation Service* (*AS*) allows experimenters, site managers and users of the OrganiCity facility to add annotations on top of all assets of the platform. The annotation process follows the *tagging* scheme used in many social networks to indicate the characteristics of the assets identified. To do this, users can use either one of the available web interfaces available in the context of OrganiCity or the API of the service. The annotations added to all assets of OrganiCity are available through the API of the service for experimenters to use and through the interfaces of OrganiCity for the users to browse. 

Aiming at enhancing the urban data sources with useful information, OrganiCity developed this service to enable collaborative data annotation in the smart city context. The utilized data model and annotation services are flexible enough to enable various types of labels from online resources on the Web, social media and references to rich multimedia content online (images, video, etc.)  to free-text labels or numeric values. A set of methods has been created for maintaining dynamic label categories, labels, and labeling of data.

Since the UDO is the main view of OrganiCity it provides a starting point for exploration of urban data across different city environments based on their *Annotations* and a perfect starting point for the generation of knowledge from the raw data streams.

Accessing data stored in the *AS* can be limited to the OrganiCity Experiment level if needed. Additionally, OrganiCity Experimenters can access the generated annotations that are part of their experiment or all the data stored in the OrganiCity facility.

<!--
Along with the crowdsourcing annotation process, experimenters can utilize machine learning algorithms that enable more autonomous learning, semi-supervised learning or reinforcement learning techniques, exploiting the acquired annotations as training sets. It is possible in this way to use the created models as classifiers for automatic labelling of urban resources, events or anomaly detection. Furthermore, as users are constantly contributing with annotations, experimenters are possible to perform verification, cross-validation on the extracted models and create adaptive models using reinforcement learning methodologies.
-->

References to the specification of the *AS*:

- [Annotation Service Endpoint](https://annotations.Organicity.eu/)
- [Annotation Service API Swagger](https://annotations.Organicity.eu/swagger-ui.html)

## Data Model

In the rest of this section, we are going to present and describe the models used for annotating *Assets* in the context of OrganiCity.

The entities that are in involved in the creation of annotations are the following:

- **Assets** are the assets of the OrganiCity facility that can be annotated. **All Assets must exist beforehand in OrganiCity to be annotated using the *AS*.**
- **TagDomains** represent collections of *Tags*. Usually a *TagDomain* is associated with one or more *Services* or an *Experiment* to specify which *TagDomains* are used in their context.
- **Tags** represent the actual labels to be used by end-user to annotate an *Asset*
- **Services** represent utilities or urban services deployed by the OrganiCity sites. An example of a service might be `Garbage Collection` as site *Service* or `Noise Monitoring` as a general context in the scope of OrganiCity. The basic usage of service entities is the organization and discovery of *Tag* collections (e.g. what tags are usually used for characterizing the `noise level sensors`)
- **Experiments** represent the *TagDomain* collections created by users during their OrganiCity *Experiments*. They can be used to limit access to the created *TagDomains*. *Experiments* are created automatically by the *AS* when *Experiments* are created from the *Experimenter's Portal* 

![Annotation Model](./img/tags.png?style=centerme "Annotation Model")

The above image shows how 2 *Assets* of the OrganiCity facility are *annotated* with 2 *Tags* of a single *TagDomain* describing traffic in an OrganiCity site. 

![Experiment Model](./img/exp.png?style=centerme "Experiment Model")

Similarly, this image shows how a single *Experiment* uses a *TagDomain* provided by the OrganiCity facility that provides a simple and generic 3 level categorization `high`,`medium` and `low`.

![Tag Domain Model](./img/td.png?style=centerme "Tag Domain Model")

Finally, this image shows how a single *TagDomain* is used by two Sites in their basic Annotation Services (`Patras` and `London`). The *TagDomain* presented has 3 *Tags* to describe the `sun light levels` in the city.

Based on the roles of users in the OrganiCity facility a set of restrictions on accessing and using the *AS* apply and can be summed up in the following list:

- OC Admins (OC-A):
    - can create, read, update and delete (CRUD) *Service*, *TagDomain*, *Tag*, *Experiments* and *Annotations* 
- OC Experimenter (OC-E):
    - can only Read  *Services*, *TagDomains*, *Tags* and *Annotations* that are public
    - CRUD the *TagDomains*, and *Tags* that are involved in their experiment
    - can CRUD all annotations of the experiments managed
- OC Participant (OC-P):
    - can only Read *Service*, *TagDomain*,  *Tag* entities and *Annotations* that are public
    - can CRUD the annotations created using their credentials
- OC Anonymous (OC-AN)
    - can only Read  *Services*, *TagDomains*, *Tags* and *Annotations* that are public
    - can only Create public *Annotations*

### Entity Descriptions

The parameters of the entities described above are presented in the following subsections:

#### Tag

```json
{
    "id": 0,
    "name": "string",
    "urn": "string"
}
```
Example:
```json
{
    id: 106,
    urn: "urn:tag:faulty",
    name: "faulty reading"
}
```

#### TagDomain

```json
{
"description": "string",
"id": 0,
"urn": "string",
"services": [
    {
        "description": "string",
        "id": 0,
        "urn": "string",
		      "user":"string"
    }
 ],
 "tags": [
    {
    "id": 0,
       "name": "string",
       "urn": "string"
    }
 ]
}
```

Example:
```json
  {
  id: 104,
  urn: "urn:tagDomain:faultyReadings",
  description: "This is tag domain to classify readings into faulty or normal",
  tags: [
      {
          id: 106,
          urn: "urn:tag:faulty",
          name: faulty reading
      },
      {
          id: 105,
          urn: "urn:tag:normal",
          name: "normal reading"
      }
   ],
  services: [
      {
          id: 107,
          urn: "urn:service:environmentalMonitoring",
          description: "environmental monitoring",
          user:"372f3a46-0596-41cf-a038-a2845f06eb24"
      }
   ]
  }
```
#### Service
```json
{
    "description": "string",
    "id": 0,
    "urn": "string",
    "user":"string"
}
```
Example:
```json
{
    id: 107,
    urn: "urn:service:environmentalMonitoring",
    description: "environmental monitoring",
    user:"372f3a46-0596-41cf-a038-a2845f06eb24"
}
```

#### Experiment
```json
{
    "description": "string",
    "id": 0,
    "tagDomains": [
        {
          "description": "string",
          "id": 0,
          "services": [
            {
              "description": "string",
              "id": 0,
              "urn": "string",
              "user": "string"
            }
          ],
          "tags": [
            {
              "id": 0,
              "name": "string",
              "urn": "string",
              "user": "string"
            }
          ],
          "urn": "string",
          "user": "string"
        }
      ],
    "urn": "string",
    "user": "string"
}
```

#### Annotation

```json
{
    "annotationId": 0,
    "application": "string",
    "assetUrn": "string",
    "datetime": "string",
    "numericValue": 0,
    "tagUrn": "string",
    "textValue": "string",
    "user": "string"
}
```
Example:
```json
{
    "annotationId": 0,
    "application": "57eab2c2ad0302ad0b5c92c6",
    "assetUrn": "urn:oc:entity:london:enableiot:fixed:98-4F-EE-00-0F-76",
    "datetime": "2016-10-21 09:01:12:123",
    "numericValue": 0,
    "tagUrn": "urn:tag:faulty",
    "textValue": "string",
    "user": "86d7edce-5092-44c0-bed8-da4beaa3fbc6"
}
```

## Tutorials

For more information about how to interact with the *Asset Annotation Service* you can check out the following tutorials:

- [How to Create Annotation Tags](/annotations/tutorials/HowToCreateAnnotationTags/)
- [How To Annotate An Asset](/annotations/tutorials/HowToAnnotateAnAsset/)
