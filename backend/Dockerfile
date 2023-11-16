FROM node:18.16.0-alpine3.17 AS base
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

FROM base AS build
WORKDIR /opt/
COPY --chown=node:node package* .
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g
RUN npm install --only=production
WORKDIR /opt/app
COPY --chown=node:node . .
RUN npm run build
USER node

FROM base AS app
WORKDIR /opt/
COPY --chown=node:node --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --chown=node:node --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH
EXPOSE 1337
USER node
CMD [ "npm", "run", "start" ]