# express-planets
Dockerizing Node.js Express application framework while providing comparision between [Flask](https://github.com/aaronhmiller/planets-workspace) and Express implementations.

## Running

`node index.js`
Alternatively, use its more portable form and run it as a Docker Container:
`docker run -d --rm --name planets -p 3000:3000 saltaaron/express-planets`

## Build

To build, clone this repo and:

`docker buildx create --use` (for multi-platform usage)

`docker buildx build --platform linux/amd64,linux/arm64 -t <your_docker_hub_account>/express-planets --push .`
