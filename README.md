## Description
<br />Microservice which receives message from public HTTP POST endpoint and sends it to RMQ queue. 
<br />Also listens another RMQ queue and prints messages from here
<br />So if we run two such microservices we can exchange messages between them like so
<br />[Insomnia, postman, ...] -(HTTP)-> [MS1] -(RMQ)-> [MS2] ---> console.log
<br />and 
<br />[Insomnia, postman, ...] -(HTTP)-> [MS2] -(RMQ)-> [MS1] ---> console.log


## Start
<br />You need running RabbitMQ on port 5672
<br />To start use
```bash
# unit tests
$ npm run startTwoMs
```

<br />This will run MS1 on port 3001 and MS2 on port 3002

## Usage
<br /> Post request expected body: 
```
{
	"message": "Msg"
}
```

<br />To check that services are running, you can send simple get requenst to http://localhost:3001/ and http://localhost:3001/ from browser
