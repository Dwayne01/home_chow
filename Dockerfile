FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3003
CMD ["yarn", "dev"]
