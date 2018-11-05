FROM node:alpine
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
RUN npm install
COPY . .
RUN npm run build
RUN mv dist/ /public
