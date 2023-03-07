FROM node:17-alpine

# set the working directory to organizer
WORKDIR /organizer

# copy package.json to organizer folder to avoid reinstalling dependencies on every change
COPY package.json .

RUN npm install

# copy the code into organizer folder
COPY . .

CMD ["npm", "run", "dev"]