#!/bin/sh

until node wait.js; do
echo "Mysql is unavailable - sleeping"
  sleep 1
done

echo "Mysql is up - executing command"

./node_modules/.bin/sequelize db:migrate 
./node_modules/.bin/sequelize db:seed:all

if [ "$1" = "test" ]; then
  npm rum test
  npm run test-acceptance
  shutdown -h now
else
  npm run start-dev
fi
