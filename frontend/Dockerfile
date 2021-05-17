# following this tutorial: https://mherman.org/blog/dockerizing-a-react-app/
# don't know why it recommends a different base image from node:14

# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]


# tutorial uses this to run our built image
# -it - have to run as interactive when using CRA?
# -rm removes the container after it is stopped?
# docker run \
#     -it \
#     --rm \
#     -v ${PWD}:/app \
#     -v /app/node_modules \
#     -p 3001:3000 \
#     -e CHOKIDAR_USEPOLLING=true \
#     sample:dev