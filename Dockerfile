from node:14.16.1-alpine

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]