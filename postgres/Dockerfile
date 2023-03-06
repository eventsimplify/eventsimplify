FROM postgres

COPY init.sql /docker-entrypoint-initdb.d/
RUN apt-get update && apt-get install -y postgresql-client
