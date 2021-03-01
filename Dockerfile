FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:4.6.1

COPY ./public /usr/share/nginx/html
