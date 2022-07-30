#!/usr/bin/env bash

#stopping the current application
fuser -k 3000/tcp

# Cleaning the existing directory.
echo "Cleaning release folder.." >> /var/log/deploy.log

if [ -d /root/BoostMe ]; then
    rm -rf /root/BoostMe
fi
mkdir -vp /root/BoostMe

echo "Cleaning release finished.." >> /var/log/deploy.log