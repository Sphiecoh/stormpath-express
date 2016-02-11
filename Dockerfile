FROM kiasaki/alpine-nodejs

#install the app
ADD . /src
RUN npm install

EXPOSE 3000
CMD ["node","/src/index.js"]