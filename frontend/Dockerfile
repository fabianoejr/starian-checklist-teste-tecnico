FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200 49153

ENV NG_CLI_ANALYTICS false

CMD ["npm", "run", "start", "--", "--host=0.0.0.0", "--poll=2000"]
