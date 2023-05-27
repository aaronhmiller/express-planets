FROM alpine
#WORKDIR /app
COPY package.json .
RUN apk add --update npm && \
    npm install express
COPY . ./
EXPOSE 80
CMD ["node", "index.js"]
