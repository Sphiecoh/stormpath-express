FROM kiasaki/alpine-nodejs

#install the app
COPY . /data
RUN npm install

EXPOSE 3000
CMD []
ENTRYPOINT["npm start"]