
<style>
img[src$="centerme"] {
  display:block;
  margin: 0 auto;
}
</style>

# Tutorial: How to Create Annotation Tags

## Using the Experimenter's Portal

Experimenters can create and manage the Tag Domains and Tags of their experiment using the Experimenter's portal `Annotation` interface.

![Annotations EP](../img/tutorial-1.png?style=centerme "Annotations EP")


In more detail, each experiment created using the Experimenter's Portal automatically owns and is associated with a single *TagDomain* named after the Experiment. 

![Annotations EP](../img/tutorial-2.png?style=centerme "Annotations EP")

Using this interface, experimenters can select and add more *TagDomains* to their experiment if needed, by clicking on the list of "Predefined tag domains" available.

![Annotations EP](../img/tutorial-3.png?style=centerme "Annotations EP")

Also it is possible for experimenters to create new *TagDomains* and add/remove *Tags* to them using the following interface.

![Annotations EP](../img/tutorial-4.png?style=centerme "Annotations EP")


## Using the API

Alternatively, users can interact with the *Annotation Service* using the provided Restful API. The full description of the API is available [here](https://annotations.Organicity.eu/swagger-ui.html). 
 
### Creation of a TagDomain

To create a *TagDomain* experimenters need to use the [domainCreate](https://annotations.organicity.eu/swagger-ui.html#!/tag-domain-manager/domainCreate) API call.
 
```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "description": "a tag domain for faulty noise level",
  "tags": [
    {
      "id": 123,
      "name": "faulty",
      "urn": "urn:tag:faulty"
    },
    {
          "id": 132,
          "name": "normal",
          "urn": "urn:tag:normal"
    }
  ],
  "urn": "urn:tagDomain:86d7edce-5092-44c0-bed8-da4beaa3fbc6:malfunctioning"
}' 'https://annotations.organicity.eu/admin/tagDomains'
```
### Retrieval of a TagDomain

To retrieve the information of a *TagDomain* experimenters need to use the [domainFindByUrn](https://annotations.organicity.eu/swagger-ui.html#!/tag-domain-browser/domainFindByUrn) API call.

```shell
curl -X GET --header 'Accept: application/json' 'https://annotations.organicity.eu/tagDomains/urn%3AtagDomain%3A86d7edce-5092-44c0-bed8-da4beaa3fbc6%3Amalfunctioning'
```

### Listing of Tags of TagDomain

To retrieve the tags of a *TagDomain* experimenters need to use the [domainGetTags](https://annotations.organicity.eu/swagger-ui.html#!/tag-domain-browser/domainGetTags) API call.

```shell
curl -X GET --header 'Accept: application/json' 'https://annotations.organicity.eu/tagDomains/urn%3AtagDomain%3A86d7edce-5092-44c0-bed8-da4beaa3fbc6%3Amalfunctioning/tags'
```

### Associate Experiment with an Tag Domain

To add a *TagDomain* to the list of selected *TagDomains* of an *Experiment* experimenters need to use the [experimentAddTagDomains](https://annotations.organicity.eu/swagger-ui.html#!/tag-domain-manager/experimentAddTagDomains) API call.

```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'https://annotations.organicity.eu/admin/applications/urn%3Aapplication%3A86d7edce-5092-44c0-bed8-da4beaa3fbc6/tagDomains?tagDomainUrn=urn%3AtagDomain%3A86d7edce-5092-44c0-bed8-da4beaa3fbc6%3Amalfunctioning'
```


### Post an Annotation

To retrieve the tags of a *TagDomain* experimenters need to use [createAnnotation](https://annotations.organicity.eu/swagger-ui.html#!/annotation-controller/createAnnotation) API call.

This api call requires the following json object to be provided in the post request's body:

```json
{
  "application": "nameOftheApplication",
  "assetUrn": "urn:oc:entity:patras:easybike:bikestation:293:301",
  "numericValue": 0,
  "tagUrn": "urn:oc:tagDomain:IndoorHumidityLevels:high",
  "textValue": "",
  "user": "organcity sub of the user if available"
}
```

```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "application": "nameOftheApplication",
  "assetUrn": "urn:oc:entity:patras:easybike:bikestation:293:301",
  "numericValue": 0,
  "tagUrn": "urn:oc:tagDomain:IndoorHumidityLevels:high",
  "textValue": "",
  "user": "organcity sub of the user if available"
}' 'https://annotations.organicity.eu/annotations/urn%3Aoc%3Aentity%3Apatras%3Aeasybike%3Abikestation%3A293%3A301'
```



### Listing All Annotations

To retrieve the list of *Annotations* experimenters need to use [getAnnotations_1](https://annotations.organicity.eu/swagger-ui.html#!/annotation-controller/getAnnotations_1) API call.


```shell
curl -X GET --header 'Accept: application/json' 'https://annotations.organicity.eu/annotations/all'
```

## Using the Java Client

Also, users can interact with the *Annotation Service* using the available JAVA and Android client for the *Annotation Service*. The code of the Annotation Service Clients is available [here](https://github.com/OrganicityEu-Platform/Asset-Annotation-Service). 
 
### Using in Maven
To use the *Annotation Service Client* in Java project you need to add the following dependency in you `pom.xml`.

```shell
<repositories>
	<repository>
		<id>organicity</id>
		<url>https://maven.organicity.eu/content/repositories/snapshots</url>
	</repository>
</repositories>

<dependencies>
	<dependency>
		<groupId>eu.organicity</groupId>
		<artifactId>annotations-client</artifactId>
		<version>1.0-SNAPSHOT</version>
	</dependency> 
</dependencies> 
```
### Using in Gradle for Android
To use the *Annotation Service Android Client* in Android application you need to add the following dependency in you `build.gradle`.

```shell
repositories {
	mavenLocal()
	mavenCentral()
	maven { url 'https://maven.organicity.eu/content/repositories/snapshots' }
}

dependencies {
	compile('eu.organicity:annotations-android-client:1.0-SNAPSHOT') {
		exclude module: 'spring-boot-starter'
		exclude module: 'spring-web'
		exclude module: 'jackson-annotations'
		exclude module: 'jackson-databind'
		exclude module: 'spring-boot-starter-logging'
		exclude module: 'jackson-mapper-asl'
		exclude module: 'commons-logging'
	}
}
```

### Creation of a TagDomain
```java
final AnnotationServiceClient client =  new AnnotationServiceClient("client_id", "client_secret", "username", "password");
final String TAG_DOMAIN = "urn:oc:tagDomain:EmptyStation";
client.addTagDomain(TAG_DOMAIN, "Describes Emptiness");
client.addTag(TAG_DOMAIN, "urn:oc:tagDomain:EmptyStation:empty", "Empty");
client.addTag(TAG_DOMAIN, "urn:oc:tagDomain:EmptyStation:nonempty", "Non Empty");
```
### Retrieval of a TagDomain
```java
final AnnotationServiceClient client =  new AnnotationServiceClient("client_id", "client_secret", "username", "password");
TagDomainDTO dto = client.getTagDomain("urn:oc:tagDomain:AnomalyDetection");
System.out.println(dto);
```
### Listing of Tags of TagDomain
```java
final AnnotationServiceClient client =  new AnnotationServiceClient("client_id", "client_secret", "username", "password");
TagDTO[] tags = client.getTags("urn:oc:tagDomain:AnomalyDetection");
for (TagDTO tag : tags) {
	System.out.println(tag);
}
```

### Associate Experiment with an Tag Domain
```java
final AnnotationServiceClient client =  new AnnotationServiceClient("client_id", "client_secret", "username", "password");
ExperimentDTO dto = client.experimentAddTagDomains("expeirment", "urn:oc:tagDomain:AnomalyDetection");
System.out.println(dto);
```
### Post an Annotation
```java
final AnnotationServiceClient client =  new AnnotationServiceClient("client_id", "client_secret", "username", "password");
AnnotationDTO dto = new AnnotationDTO();
dto.setApplication("nameOftheApplication");
dto.setAssetUrn("urn:oc:entity:patras:easybike:bikestation:293:301");
dto.setUser("organcity sub of the user if available");
dto.setNumericValue(0.0);
dto.setTagUrn("urn:oc:tagDomain:IndoorHumidityLevels:high");
dto.setTextValue("");
dto = client.postAnnotation(dto);
System.out.println(dto);
```
### Listing All Annotations
```java
final AnnotationServiceClient client =  new AnnotationServiceClient("client_id", "client_secret", "username", "password");
AnnotationDTO[] annotations = client.getAnnotations();
for (AnnotationDTO annotation : annotations) {
	System.out.println(annotation);
}
```


<!---


```javascript
userId = 86d7edce-5092-44c0-bed8-da4beaa3fbc6
experimentId = 57eab2c2ad0302ad0b5c92c6
assetUrn = urn:oc:entity:experimenters:62afc265-af9a-47e7-afb5-caab21ed09b4:57f210e59324fdd11103d93c:14
tagUrn = urn:oc:tagDomain:WindSpeedLevel:calm
	
function createAnnotation(){
        var annotationJson = {
                "annotationId": null,
                "application": experimentId,
                "assetUrn": assetUrn,
                "datetime": null,
                "numericValue": 0,
                "tagUrn": tagUrn,
                "textValue": "textValue",
                "user": userId,
        };

          $.ajax({
             url: "https://annotations.organicity.eu/annotations/"+ assetUrn.name,
             data: JSON.stringify(annotationJson),
             type: "POST",
             beforeSend: function(xhr){
                 xhr.setRequestHeader('Accept', 'application/json');
                 xhr.setRequestHeader('Accept', 'application/json');
                 xhr.setRequestHeader('Content-Type', 'application/json');

                 
             },
             success: function() {
                $.ajax({
                    url: "https://annotations.organicity.eu/annotations/" + assetUrn +"/all",
                                   
                    type: "GET",
                    beforeSend: function(xhr){
                        xhr.setRequestHeader('Accept', 'application/json');
                        xhr.setRequestHeader('Accept', 'application/json');
                        xhr.setRequestHeader('Content-Type', 'application/json');

                    },
                    success: function(response) {
                        alert(response);
                    }
                 });
             },
             error: function(){
                alert('an error occurred.');
              }
          });
    } 
```
--->