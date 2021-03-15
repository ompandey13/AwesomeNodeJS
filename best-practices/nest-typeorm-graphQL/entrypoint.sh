#! /bin/sh

# Check if .env file is available or not.
if [ -f .env ]; then
    
    # Export .env file contents as environment variables
    export $(grep -v '^#' .env | xargs)

    # Wait for postgres
    until nc -z -v -w30 $TYPEORM_HOST $DB_PORT; do
    echo 'Waiting for postgres...'
    sleep 1
    done
    echo "postgres is up and running!"

    # Unset .env file contents as environment variables
    unset $(grep -v '^#' .env | sed -E 's/(.*)=.*/\1/' | xargs)

    # Migrate the db schema
    yarn typeorm migration:run 
    echo "Done!"

    # Start the application
    pm2 start /app/dist/main.js --name ntg && tail -f /dev/null

else

    echo ".env file is not available. Please look for .env file."

fi