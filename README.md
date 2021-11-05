# fe-interview-backend

This repository contains a local mock backend server for the brightwheel frontend coding challenge as well as an empty React app using `create-react-app`, which you should use as a starting point.

## Getting started

Install project dependencies

```
yarn install
```

Start the frontend and the mock backend together

```
yarn start:mock
```

Or start the backend by itself

```
yarn start:api
```

This will create a locally hosted backend that you can access at `http://localhost:3001`

## Future improvements

- Refactor hook logic
- Refactor the styling of the app, using a proper color theme and design
- Improve the display of an item when it has no picture
- Implement a mobile-first design
- Implement the favorites page
- Cache the favorite items, so it wouldn't be necessary to query the items every time
