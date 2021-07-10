# Truck Viewer

An App to view and save all the current truck location data.

**Note** this is just for the development build. Production build is on Heroku (see link for details, to be added)

## Requirements

Please make sure you have [Node installed](https://nodejs.org/en/) as well as local mongodb running on localhost port 27107 [Install Mongo](https://docs.mongodb.com/guides/server/install/)

To access the mongodb instance, you'll need to add a config folder as well as a .env file to the backend-service root directory, as well as a .env file to the map-service root directory.

You can get these assets from the dropbox link sent to hiring@atob.com, they are organized into the appropriate folders there.

## Installation

Download to the code your local device. Navigate to all the directories (backend-service, map-service) and run `npm install`.

In backend service, also run `tsc` after you run `npm install`

## Usage

navigate to backend-service and run `tsc && npm run dev`

navigate to map-service and run `npm start`

You'll have a browser window open automatically to http://localhost:3000/login

There you can login with the following credentials.

```
email: mom@gmail.com
password: Yolo1234
```

You'll be redirected to the maps page. Every 10 seconds the server is called to get, save and display the truck locations.

To logout and stop the continuous server refreshes, just click "logout"
