# Dockerfile
FROM ubuntu:18.04

COPY . /server
ENV PORT 8080

RUN apt-get update && apt-get install -y sudo; \
    sudo apt-get update && sudo apt-get -y install curl unzip; \
    curl -fsSL https://deno.land/x/install/install.sh | sh;

WORKDIR /server

EXPOSE 8080

ENV DENO_INSTALL="/root/.deno"

ENV PATH="$DENO_INSTALL/bin:$PATH"

CMD deno run --unstable --allow-net --allow-read --allow-env --allow-write --allow-plugin --lock=lock.json --cached-only index.ts
