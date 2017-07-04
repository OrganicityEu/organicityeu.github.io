# Reputation Service
An important job of the Urban Data Observatory Services is helping users navigate the many assets available from the OrganiCity platform. The Assets Reputation Service is responsible for calculating the reputation of the various assets available on the OrganiCity platform. Reputation (what is generally said or believed about an asset’s reliability) captures a combined measure of reliability inferred from feedback by a community of end-users. In a stricter and personalized way, reputation can be conceived as trust, by modeling the degree the trust an end-user assigns to each specific assets they used. In our case, we focus on the generic notion of reputation that is public and combined and not on the personal and subjective one. By modelling reputation of assets, OrganiCity enables users and asset/service providers to differentiate among the assets based on how well these assets behaved in the history. This facilitates end-users and decision makers to distinguish good assets from bad ones based on user's feedbacks.

## Architecture ##
The Reputation is embedded to Urban Discovery Observatory while uses statistical data from Data Annotation Service.

Initially, the reputation score for new assets is unavailable. In order to initiate the scoring for an asset, a user has to either create an annotation for the specific asset or to rate it. This information is sent from Urban Data Observatory to Data Annotation Service, which updates the statistics accordingly. Then, the next time a user selects an asset, Urban Data Observatory requests the statistics from Data Annotation Service and calculates the reputation score based on the algorithm in the “Reputation Model” section. 
This architecture is more efficient than the existence of a stand-alone service that periodically retrieves all the assets and their annotations and then calculates the reputation score. Furthermore, the overhead due to the update and retrieval of the statistics is negligible because Urban Data Observatory communicates with Data Annotation Service to create or retrieve annotations at the same time respectively. Therefore, this process is piggy-backed to the normal operation of the system.

## Reputation Model ##
For modelling the reputation of OC Assets, we rely on techniques for modelling reputation on internet and especially for web services. There is a quite exhaustive literature background in this field tackling the problem with various alternative techniques: feedback only based models, statistical models, fuzzy-logic models, data mining models or game theoretic models. In our case, we employ a statistical based model due to its simplicity, small computational requirements and the extendibility by easily integrating new parameters.  The reputation model is be based on a statistical model that integrates both subjective and objective parameters of assets, such as:
* Direct opinion in the form of 5-star rating.
* Usage of Statistics/Popularity, like:
**	How many times an Asset has been annotated by OC users
**	How many times an Asset has been rated by different OC users
*	Time of the most recent action, like:
**	What was the last time that an Asset has been annotated
Based on the aforementioned sources, the final trust value is calculated as the weighted average of the various metrics.

## Challenges ##
There are several challenges in defining an integrated reputation model that we investigated:
Include multiple Quality metrics (a set of asset characteristics that express how bad or well the asset performs e.g. how accurate are the data): The OC Asset data model can be flexible enough to integrate various assets types like IoT devices, Smartphone devices, city boroughs, traffic and congestion, transportation lines. Due to the fact that different asset types have different quality characteristics makes the comparison challenging.
Subjective/Objective perspectives: Integrate both subjective (feedbacks from users) and objective (Quality metrics monitored by OC platform) perspectives for quality metrics.
Time domain: Taking into account the time of the last action, the reputation of the assets is dynamic by allowing freshly created asset to compete with already existed ones.
Credibility of raters: Incorporate credibility of users to avoid dishonest ratings.

