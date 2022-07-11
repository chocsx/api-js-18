curl --silent localhost:3000/heroes

curl \
  --silent -X POST \
  -d '{"name": "flash", "age": 99, "power": "speed"}' \
  localhost:3000/heroes