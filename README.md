# express-planets
Dockerizing Node.js Express application framework while providing comparision between [Flask](https://github.com/aaronhmiller/planets-workspace) and Express implementations.

## Running

`node index.js`
Alternatively, use its more portable form and run it as a Docker Container:
`docker run -d --rm --name planets -p 3000:3000 kongaaron/express-planets`

## Building your own

To build and tag a new image, clone this repo and:

```
docker build -t <your_docker_hub_account>/express-planets:1.0 -t <your_docker_hub_account>/express-planets:latest .
```

Once you tag and build, upload to `hub.docker.com`: `docker push <your_docker_hub_account>/express-planets`
