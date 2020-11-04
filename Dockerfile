FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.60.0

COPY ./public /usr/share/nginx/html
