echo "starting the app.." >> /var/log/deploy.log
cd /root/BoostMe
yarn install
pm2 delete "boostme-frontend"
pm2 start "yarn run dev" --name "boostme-frontend"
echo "deployment completed" >> /var/log/deploy.log
