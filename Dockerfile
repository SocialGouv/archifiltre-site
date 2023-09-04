FROM node:14-alpine as builder

RUN apk add automake autoconf libtool dpkg pkgconfig nasm libpng libpng-dev g++ make

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY . .

RUN yarn build

FROM ghcr.io/socialgouv/docker/nginx:7.0.1

COPY --from=builder --chown=nginx:nginx ./public /usr/share/nginx/html
