FROM node:16-alpine as app_common


ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL

WORKDIR /app
COPY ./package.json ./
RUN npm i --force
COPY . ./

EXPOSE 3000

FROM app_common AS app_prod

ENV NODE_ENV production

RUN npm run build --force



