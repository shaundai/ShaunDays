## Project Name & Description

#### ShaunDays 

A React application used to find today's weather and 5-day forecast in any US city using API Connections to Google Maps and Dark Sky Weather.  App built using React and styled with Styled Components and CSS.

## Project Status

This project is currently in development. Complete UI and API connections.  "Best case scenarios" are complete.
Still remaining to complete: App will ultimately be able to handle wider range of possibilities for errors.  For example, alerts for when a user inputs a city name that the google api does not recognize or a location outside of the US.

## Project Screen Shots
![Main screen screenshot](./public/screenshot1.png?raw=true "Main Screen")
![Search for weather screenshot](./public/screenshot2.png?raw=true "Search for misspelled city")


## Reflection

This was a week-long side project built to help me practice the fundamentals of connecting an API with the front-end and the back-end of an app.  I also wanted to try different methods of calling an API (async/await vs promises) and see which I liked better.  I found that promises look nicer when there is only ONE thing an API call needs to do, but in most cases async/await looks cleaner and is much easier to work with.

This app can accept misspelled US city names and return the closest match found in Google Maps.

Some key learnings:

    * Async/await
    * Promises/Promise.all
    * Familiarizing myself with API Documentation
    * How (and why) to safely protect my API key either using a .gitignore or .env file
    * Using GET to pull back information from an API
    * Rendering the information from an API call in the front end
    * Try and catch: the why and the how
    * Error handling with APIs - how to debug the errors in the console and resolve them

One of the main challenges that I ran into came when I tried to call the Dark Sky API from the client side.  Dark Sky disabled CORS on their server for security purposes, so every time I tried to call the API from React I got an error that said No "Access-Control-Allow-Origin" header was present.  There are different ways to resolve this (including setting up a proxy).  Since I don't know how to set up a proxy yet, I found a temporary solution: downloading and activating the CORS Unblock Chrome Extension.  Once I've learned more about Node.js and setting up a proxy, I will go back and set up a proxy for this project.
