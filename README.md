# React app standard setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has additional setup done.

- Folders structure
  - api - [react-query](https://react-query.tanstack.com/) setup and hooks used for fetching data from the backend
  - components - reusable components **not tied to specific place** of the application
  - constants - constant hardcoded values **not tied to specific place**
  - contexts - contexts for sharing data across the application
  - helpers - various non-hook helper functions
  - hooks - reusable hooks **not tied to specific place** of the application
  - pages - components **tied to routing** and all sub components appearing only in a specific page

## Notable packages used

- [react-query](https://react-query.tanstack.com/) and [axios](https://axios-http.com/) used for managing backend requests and cache
- [react-router-dom](https://reactrouter.com/docs/en/v6) provides routing for our SPA
- [tailwindcss](https://tailwindcss.com/) provides helper css classes
- [tailwindUI](https://tailwindui.com) provides ready-to-use html markup styled with tailwindcss classes
- [classnames](https://www.npmjs.com/package/classnames) provides nice syntax for assigning classes conditionally
- [eslint](https://www.npmjs.com/package/eslint) tool used for checking for code style & patterns with ability to automatically fix some of them
- [prettier](https://www.npmjs.com/package/prettier) opinionated code formatter enforcing consistent code style in the whole app

Some might spot that there is no Redux on the list, but that's because React-Query covers most of the cases that we used Redux for. This makes Redux not to be needed since day-1 on most applications. 

## Imports

Imports are being resolved, so when you are in `/src/pages/Navigation/Navigation.js` and want to import a function from `/src/api/exampleResource/index.js`

Normally you would have to

```js
import { useGetResourceList } from '../../api/exampleResource'
```

But because imports are being resolved you can just do

```js
import { useGetResourceList } from 'api/exampleResource'
```

All folders directly in `/src` are being resolved like that.

## Setup the App

### `npm install`

## Run the App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run the tests

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build the app

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
