FROM node:14.17.0-alpine
WORKDIR '/app'

RUN apk update && \
  apk upgrade && \
  apk add chromium

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
