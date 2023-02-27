## description
<p>
	Microservice which receives message from public HTTP POST endpoint and sends it to RMQ queue. Also listens another RMQ queue and prints messages from here
	So if we run two such microservices we can exchange messages between them like so
[Insomnia, postman, ...] -(HTTP)-> [MS1] -(RMQ)-> [MS2] ---> console.log
and 
[Insomnia, postman, ...] -(HTTP)-> [MS2] -(RMQ)-> [MS1] ---> console.log
</p>


## start

<p>
	You need running RabbitMQ on port 5672
	To start use
</p>
```bash
# unit tests
$ npm run startTwoMs
```
<p>
	this will run MS1 on port 3001 and MS2 on port 3002
	To check that services are running, you can send simple get requenst http://localhost:3001/ and http://localhost:3001/ from browser
</p>

