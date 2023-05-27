FROM alpine
#WORKDIR /app
COPY package.json .
RUN apk add --update npm && \
    npm install express
COPY . ./
ARG PORT
ENV PORT=$PORT
EXPOSE PORT
CMD ["node", "index.js"]
