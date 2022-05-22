FROM node:14-alpine

WORKDIR /usr/src/app
COPY . ./

RUN ["npm", "ci"]
COPY . .

EXPOSE 3000

RUN ["npm", "install", "react-scripts"]
CMD ["npm", "start"]