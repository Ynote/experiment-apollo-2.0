# Experiment Apollo 2.0

> Experiment from 2017

This is a small project that intends to test [Apollo client 2.0](https://www.apollographql.com/).

The app shows the list of the last updated repositories you are following on [Github](https://github.com) and the list of the PRs that need your review.

## Results :memo:

- Apollo new `createHttpLink` and  `ApolloClient` setup are great separation of concerns.
- The Github GraphQL endpoint is AWESOME!
- It is a very bad idea to store configuration information in `LocalStorage`. Is is not convenient **at all** to work with the browser.

<img width="1459" alt="screen shot 2018-11-04 at 11 16 45" src="https://user-images.githubusercontent.com/548778/47962868-681cdf80-e023-11e8-99c0-091e4f1ed1f9.png">

## Steps

### Create the app

- Setup Apollo Client.
- Simple call on Github GraphQL endpoint.
- Display a list with fetched data.

### Use a wrapper component to handle query result and errors

- Create a wrapping component to handle list display depending on data loading.
- Update files architecture into queries and components.

### Future steps (not done):

**Read**:
- Store lists queries variables into configuration file.
- Generate lists components from configuration file.
- Display same resource into different components.
- Add style on list components.

**Write**:
- Add form to add queries variables into configuration file.
- Add simple mutation (add label? update title?)

## Requirements

- [Github personnal access token for this
  app](https://github.com/settings/tokens)

## Usage

- Clone the repository:
```
git clone git@github.com:Ynote/experiment-apollo-2.0.git
```
- Install the dependencies:
```
yarn
```
- Update the application namescope in `src/config/app.js`
- Start the app:
```
yarn start
```
- Open [http://localhost:3000/](http://localhost:3000/) to see the app. It won't work :)

- Set your app personal configuration in `localStorage` directly in the browser
  console:

```js
var config = { github: { token: 'your-github-token' } }

localStorage.setItem('your-app-namescope', JSON.stringify(config))
```
- Reload the page.

## Resources

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Apollo Client 2.0](https://www.apollographql.com/docs/react/index.html)
- [Use a Render
  Prop](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
- [Github GraphQL explorer](https://developer.github.com/v4/explorer/)
