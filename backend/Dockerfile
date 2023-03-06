FROM node:14.17.0-alpine

# Install Chromium dependencies
RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  freetype-dev \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  nodejs \
  npm

# Set environment variable to skip puppeteer download
ENV PUPPETEER_SKIP_DOWNLOAD=true

WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]
