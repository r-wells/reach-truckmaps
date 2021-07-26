FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN npx tsc -p ./tsconfig.json

CMD ["npm", "run", "dev"]