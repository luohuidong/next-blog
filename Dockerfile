FROM node
COPY . /app
WORKDIR /app
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]