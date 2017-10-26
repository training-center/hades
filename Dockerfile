FROM node
RUN npm install -g nodemon
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app 
EXPOSE 3000
CMD npm start
