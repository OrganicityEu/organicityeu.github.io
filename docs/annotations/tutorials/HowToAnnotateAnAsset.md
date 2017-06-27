
<style>
img[src$="centerme"] {
  display:block;
  margin: 0 auto;
}
</style>

# Tutorial: How to Annotate an Asset

<!--
## Using the Experimenter's Portal

Experimenters can create and manage the Tag Domains and Tags of their experiment using the Experimenter's portal `Annotation` interface.

![Annotations EP](../img/tutorial-1.png?style=centerme "Annotations EP")
-->

## Using the API

Users can interact with the *Annotation Service* using the provided Restful API. The full description of the API is available [here](https://annotations.Organicity.eu/swagger-ui.html). 

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
