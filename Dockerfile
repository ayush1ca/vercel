# FROM node:18-alpine3.17 as build
FROM node:18 as build

# Create app directory
RUN mkdir -p /home/app

# WORKDIR /var/www/
WORKDIR /home/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install app dependencies
RUN npm i

# Bundle app source
COPY . .
COPY .env_dev .env

# If you are building your code for production
RUN npm run build

# Stage 2 - the production environment
FROM nginx

COPY --from=build /home/app /var/www/app/
COPY ./conf/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /home/app/build /usr/share/nginx/html/public

EXPOSE 80

WORKDIR /var/www/app/

CMD ["nginx", "-g", "daemon off;"]