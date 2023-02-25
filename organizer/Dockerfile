FROM node:18-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm install next@latest --legacy-peer-deps
# RUN npm run build
CMD ["npm","run", "dev"] 
# CMD ["npm","start"] 