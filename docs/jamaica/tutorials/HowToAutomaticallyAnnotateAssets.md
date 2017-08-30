
<style>
img[src$="centerme"] {
  display:block;
  margin: 0 auto;
}
</style>

# Tutorial: How to automatically annotate Assets

JAMAiCA is an OrganiCity tool that can automatically annotate data that arrive to the OrganiCity facility based on a predefined training data set and a given Annotation Tag Domain.

In this tutorial we are going to present how we can setup a Classification Job using JAMAiCA.


## Step 1: Login to JAMAiCA using OrganiCity

Visit [JAMAiCA](https://jamaica.organicity.eu/web/home) to loging to jamaica.

![Login](../img/login.png?style=centerme "Login")


## Step 2: Create a new Classification Job

Select the `Add New` option from the tool's sidebar and fill in the details needed for the classification job.

1. `typePat`: the OrganiCity Asset type we are interested in. For this example we will use `urn:oc:entityType:iotdevice`.
1. `idPat`: the OrganiCity Asset id pattern. Usually a prefix of all the assets we are interested in. For this example we will use `urn:oc:entity:patras:greenmind:`.
1. `attribute`: the attribute of the OrganiCity Asset that is going to be classified. For this example we will use `relativeHumidity`. Keep in mind that this is the name and not the full urn of the attribute.
1. `tags`: select from the dropdown on of the available TagDomains from the OrganiCity Annotation Service. For this example we will use the one that `Describes Indoor Humidity Levels`.

Once all parameters are added the grey boxes under the options are populated with a sample of the existing assets that verify the criteria added and the list of tags available for the selected Tag Domain.

Click Add and the job will be created. Once this is complete we will be redirected to the Job View. The Job will also appear in the sidebar of the Tool for easy access.

![addNew](../img/addnew.png?style=centerme "addNew")

## Step 3: Add Training Data

The next screen shows us all the parameters of the Classification Job, including the ones we set in the `Add new` page and the controls to `Enable/Disable`, `Train`, and `Re-Subscribe` the Classification Job.
Also in the botton of the screen we can see the Training Data available for the Classification Job. In the right hand of the page there is an form to add Training Data to the job.

Lets add some in the following format: 
1. add the value `0` for the tag `urn:oc:tagDomain:IndoorHumidityLevels:dry` 
1. add the value `40` for the tag `urn:oc:tagDomain:IndoorHumidityLevels:normal` 
1. add the value `60` for the tag `urn:oc:tagDomain:IndoorHumidityLevels:high` 

![addTrain](../img/addTrain.png?style=centerme "addTrain")

Once this is done the Training data will appear in the table on the left side of the page.

To add more training data we can use the API of the tool.

![withData](../img/withData.png?style=centerme "withData")



## Step 4: Enable and Subscribe the Job

In this step we need to `Enable` the Classification Job so that the service accepts data for classification.

Also since it is the first time that we are going to enable this job we can click on the `Subscribe` button to enable the service to receive updates from the OrganiCity Facility.
This needs to be done only once, as JAMAiCA will update the subscriptions automatically as the job runs.

## Step 5: Monitor the Results

The results are available via the `View Results` link  on the top of the page.
All Annotations are listed on the table with the `value` received the `time` of the data point and the resulting `tag`.

![results](../img/results.png?style=centerme "results")
