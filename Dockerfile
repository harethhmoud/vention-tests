FROM mcr.microsoft.com/playwright:v1.49.0-jammy

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app

CMD ["npm", "run", "test"]
