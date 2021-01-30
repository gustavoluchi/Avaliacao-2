FROM node:14.15.4-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run-script build
EXPOSE 3000
CMD [ "npm", "run-script", "start" ]

# Build locally
# docker build . -t nextapp
# Run locally
# docker run -it -p 8080:3000 nextapp