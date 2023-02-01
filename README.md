# sns-consumer-service
A simple service that processes Amazon SNS payloads from a publisher.

## prerequisites

1. Have [Docker](https://www.docker.com/) installed
2. Have an [ngrok](https://ngrok.com/) account 
3. Saving your ngrok token in an environment variable called `NGROK_AUTHTOKEN`. Run following command
```bash
export NGROK_AUTHTOKEN='paste_your_ngrok_token_here'
```
## How to run
 Just run `docker compose up`.
 This will create 2 containers running in the same network. One will be a container running our service built with Node.js and Express.js. The other is running the ngrok agent and establishes an https tunnel that forwards traffic into the Node.js service.
 The logs of the ngrok container will show the public endpoint through which you can access the service.