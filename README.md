
# Trello Replica Web App

This project perfectly replicates the Trello web app from an existing page using React and react-beautiful dnd. The app lets users to: 
- Create new list
- Create new card
- Drag-n-drop cards between lists

There are no API requests instead data is persisited in local storage.

![Screenshot](docs/trello.gif)

[Live Link](https://trello-replica-hen.herokuapp.com/)

## Built With

- `React` | `React-DOM` | `React-Create-App` 
- `npm` | `ES6` | `react-beautiful-dnd`

# Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## SetUp 
- Clone the repository 
`git clone https://github.com/henatan99/trello-replica-web-app.git`

- cd to the project directory 
`trello-replica-web-app`

- Install dependancies 
`npm install`

In case there is dependencies conflict use the legacy-peer-deps flag
`npm install --legacy-peer-deps`

- And follow the App Usage instructions in the next section

## Available Scripts for App Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### linters
- `npx stylelint "**/*.{css,scss}" --fix`
- `npx eslint . --fix`

### Prerequisites

- Node.JS

## Authors

👤 **Henok Mossissa**

- GitHub: [@henatan99](https://github.com/henatan99)
- Twitter: [@henatan99](https://twitter.com/henatan99)
- LinkedIn: [Henok Mossissa](https://www.linkedin.com/in/henok-mekonnen-2a251613/)

## :handshake: Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a :star:️ if you like this project!

## Acknowledgment 

- Facebook team who created creat-react-app API 
- Trello 
- [TrueFoundry](https://www.truefoundry.com/)

## :memo: License

This project is [MIT](./LICENSE) licensed.