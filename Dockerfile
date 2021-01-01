FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:2.9.0

COPY ./public /usr/share/nginx/html
