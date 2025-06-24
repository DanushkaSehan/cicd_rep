FROM node:18-alpine

WORKDIR /usr/src/app
COPY app/ .
EXPOSE 80

CMD ["node", "index.js"]
