# Taking Notes

## Overview

This is a note takin application. Implemented features are

-   Create a note
-   Edit and save notes
-   Delete notes

All notes are being persited in a database.

### Architecture

The application consist of a React application and a [GraphQl backend API](https://github.com/FilipStenbeck/note-app-api).
The API is needed for the application to start, so make sure this is up before starting this application.
This repo also includes a node server that can be used for servering the application.

### Dependencies (major)

List of major libraries and tools:

-   React (and creaste-react-app)
-   Apollo
-   Material-Ui
-   Express

## How to use

Install it and run in dev mode:

```sh
yarn
yarn dev
```

**Important** The app requires that the backend API is up and running to work. Before starting make sure that the API is up.

## Configuration

For convinience, all needed environment variables is commited in a _.env_ file (I would not do that in a real project)

## Production

Below is the detail to build and run the application in production mode

## Build

To make a production optimized build:

```sh
yarn build
```

## Run

To run the application using the production ready build and serve in using the included node.js express server:

```sh
yarn start
```

## Docker

Build a docker image from the _Dockerfile_ included.
To start both the app and the needed api. First make sure you have built both docker images then run:

The following command can be used to make a docker image

```sh
yarn docker:build
```
To start both the *app* and *api* run:

```sh
docker-conpose up
```


