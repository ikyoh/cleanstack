#README

docker exec -it cohealth-api bash

docker exec -it cohealth-app npm run build --force

composer dump-env prod

docker-compose exec -w /etc/caddy caddy caddy reload
