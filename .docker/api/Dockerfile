FROM node:18 as build

LABEL authors="cheolmin"
LABEL tag=boilerplate-backend-ts/api

WORKDIR /usr/src/app
COPY . .

RUN npm install -g nx
RUN npm install

RUN npm run api:build

# multi-stage-build
FROM node:18

ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist/apps/api ./
RUN npm install

CMD [ "node", "main.js" ]
