FROM ghcr.io/socialgouv/docker/nginx4spa:6.16.0

COPY ./public /usr/share/nginx/html
