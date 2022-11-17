### Docker ###

=> Container - Way to Package application with all neccessary dependencies and config.It is portable.Dev and deployment more efficient.

=> Container lives in Container Repository(Private Repos/DockerHub)

=> Container mein seedha install required software(Redis/PostGres/ActiveMq) not neccessary kaunsa OS + hardware hai.Similar for deployment miscommunication in case of config/dependency.Devs and Devops work together to package app in a container.

=> A container is an instance of an image

=> Containers is layers of images.Mostly Linux Base Image
-- docker run postgres:9.6
-- Example -> Docker image will have an Operating System layer, a JVM, and our Hello World application.


### Kuber ###

**Problem**
=> Web App in Spring & React containerize this.
=> We deploy docker container in nodes (1 node mein 1 container only) // Not efficient
=> In Kubernetes node could be filled with multiple pods which is equilvalent to container. 

**K8**
=> K8s orchestrate the clusters(node with multiple pods).
=> Deploy and manage applications , scale up and down according demand
=> Zero Downtime Deployments & Rollbacks

**Cluster**
=> Set of nodes (VM or Physical Machine) 
=> This could be running on clouds such as aws azure google cloud.

**K8s Cluster**
=> Master node
	Brains 

=> Worker node (Multiple)
	Heavylifting
	
=> Kublet helps communication btw master & worker nodes.
/////////////////

=> Install Docker & Minikube & kubectl

=> KUBECTL 
	- K8s command line tool
	- Run commands gains your cluster
		- Deploy , Inspect , Edit Resources, Debug

=> minikube start --nodes=2 // Creating Nodes
=> minikube status 
=> docker ps (shows containers)

=> kubectl get nodes
=> kubectl get pods -A 

**Pods**

=> Smallest Deployable unit
=> Pod will have
	- Main Container (Js application)
	- Init Container (Executed B4 main container, May or maynot)
	- Side Car Condtainer (Supports Main Container, May or Maynot, Could be many)
	- Volumes (Communication btw containers)
	- Each pod have a unique ip address
	
=> deployment.yaml

**Operators**

=> Used for stateful applciations
=> all replicas are different , oiwn state and identity , order is important.

Operators take manual work from devops team & make it into a automatated process/software/program. Tasks like -
	- how to deploy
	- how to create cluster
	- how to recover
=> Operator is like custom control loop, makes use of CRD's
=> Piece of software that run your app & add operational steps.

=> Quarkus Extension

