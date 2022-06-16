FROM node:14-alpine as builder

COPY . .

RUN apk add automake autoconf libtool dpkg pkgconfig nasm libpng libpng-dev g++ make

RUN yarn --frozen-lockfile --prefer-offline && yarn cache clean
RUN yarn build

FROM ghcr.io/socialgouv/docker/nginx:7.0.1

COPY --from=builder --chown=nginx:nginx ./public /usr/share/nginx/html
