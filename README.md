# DIGIT

Developed on Windows 11 OS
* Node v18.16.0
* NPM  v9.5.1

## DB
Running postgres DB via docker-compose container.

### Initial Setup
```
cd db-setup
docker-compose up -d
# exec into container
docker exec -it digit psql -U dbuser digit
```

## Client
Bootstrapped from create-react-app.

```
cd client
npm install
npm run start
```

## Server
Bootstrapped from express.

```
cd server
npm install
npm run start
```