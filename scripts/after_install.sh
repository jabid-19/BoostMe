echo "starting the app.." >> /var/log/deploy.log
cd /root/BoostMe
npm install
# Temporarily running this way, will be modified later. 
npm run dev &
