FROM ghcr.io/socialgouv/docker/nginx4spa:6.43.0

COPY ./public /usr/share/nginx/html
