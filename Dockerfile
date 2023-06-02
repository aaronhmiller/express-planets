FROM node:12-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ARG PORT
ENV PORT=$PORT
#EXPOSE 3000
CMD ["node", "index.js"]
