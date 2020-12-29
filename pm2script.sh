pm2 delete next-blog:9001
git pull
npm i
git build
pm2 start --name=next-blog:9001 npm -- start
