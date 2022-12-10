# MUSICALLE

Musicalle is a music controller web application that allows users to enter a live room and control the music playing via a voting system. Music is being controlled via a series of API calls to Spotify.

> This project is strongly inspired by TechWithTim's tutorial.

## Setup Instructions

### Install Required Python Modules

```bash
pip install -r requirements.txt
```
### Start Web Server

To start the web server you need to run the following sequence of commands.

First cd into musicalle folder
```bash
cd musicalle
```
Next run the django web server.
```bash
python manage.py runserver
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```


