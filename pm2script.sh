git pull
yarn
yarn build
pm2 restart next-blog:9001 || pm2 start --name=next-blog:9001 npm -- start
