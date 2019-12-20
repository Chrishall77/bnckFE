TEAM 3 - Documentation

BNCK Fest 

IDEA
A festival app for BNCK Fest music festival, displaying useful information such as times of performances and which artists are playing.

OBJECTIVES
	▪	To create an easy to use app showing information about BNCK Fest
	▪	Create components in React and getting them to output the information from the Laravel database
	▪	Display all artists, stages, individual stages and artist biography from database
	▪	Create a mobile first responsive layout
	▪	Link all the pages to one another using the sitemap as a guide

PLANNING
We created a sitemap first that sets out how each page will connect to each other
We also created a wireframe of the layout for each main page.
We created a colour pallet that reflected the vibe of the festival

CONTENT
	▪	An inviting landing page that reflects the vibe of the festival
	▪	A list of all four stages at the festival
	▪	A page for each of the four stages, detailing which artists are playing there and when
	▪	A list of all the artists performing at the festival
	▪	An artist biography page for each performing artist showing a picture and a paragraph of text about them

INSTALLATION
Cd into desired location
Git clone git@github.com:Chrishall77/bnckFE.git {foldername}
Cd {foldername}
Npm install axis
Npm install react
Npm install react-redux
Npm install react-router-dom
Npm install react-scripts
Npm install redux
Npm install redux-thunk
Npm install rect-dom
Npm start

Download and follow instructions for back end:
https://github.com/NicJr1110/BNCK-laravel 

COMPONENTS
Header
Landing page
List of all stages
Stage info
List of all artists
Artist Bio

STYLING
The components were styled using SASS. We created an scss file for each component which outputs everything into a main css file, which is then imported in index.js. 

DESCRIPTION
The app is aimed at mobile devices first and foremost, but the app is responsive to the size of the device. The header displays a potato icon that routes you back to the landing page, and a burger menu - although not finished, the aim of this would be to open a menu of all pages you can navigate to.
The design of each page is clean and simple for user friendliness purposes, and each page has a large button with text in a complimentary colour for readability.

STRETCH GOALS - for the future
	▪	Create interactive menu for the burger
	▪	Ability to POST and PUT items in the database
	▪	Create a page displaying venue information, such as address, contact info
	▪	Create a map page
	▪	Create a FAQ
	

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
