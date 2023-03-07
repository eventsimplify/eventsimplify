FROM node:17-alpine

# fix for puppeteer
RUN apk add chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# set the working directory to backend
WORKDIR /backend

# copy package.json to backend folder to avoid reinstalling dependencies on every change
COPY package.json .

RUN npm install

# copy the code into backend folder
COPY . .

CMD ["npm", "run", "dev"]