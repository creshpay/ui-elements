FROM node:16-alpine

ARG CI_JOB_TOKEN
ENV CI_JOB_TOKEN=${CI_JOB_TOKEN}
ARG CI_PROJECT_ID
ENV CI_PROJECT_ID=${CI_PROJECT_ID}

ARG COMMON_PACKAGES="\
  sed \
  g++ \
  gcc \
  libgcc \
  libstdc++ \
  linux-headers \
  make \
  python3 \
  alpine-sdk \
"

RUN apk update && \
  apk upgrade && \
  apk add ${COMMON_PACKAGES} && \
  rm -rf /var/cache/apk/*

USER node

WORKDIR /build

RUN mkdir node_modules dist

COPY package*.json /build/

RUN npm ci

COPY . /build/
