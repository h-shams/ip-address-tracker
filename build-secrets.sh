#!/bin/sh

echo '{' > ./build/secrets.json
echo '  "apiKey": "'$API_KEY'"' >> ./build/secrets.json
echo '}' >> ./build/secrets.json
