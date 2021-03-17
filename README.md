# search-album
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Project Setup](#project-setup)
## General Info
The present project corresponds to the resolution of a search content exercise. The main aim is to create a web page where the user could type any artist or music group in a search field to look for their albums. To achieve this goal and make things easier the search requests are made to the iTunes Store API. The search results are shown as card components. The information displayed in the cards contains the album image cover, the name of the album, the album artist, and the album price.

The project is composed of three components: App, Home, and Index. The first one contains the app bar where we can find the search field and a button that appears only if the user types something in the search field. The second component is just de default component that the user sees when loading the page at first, it displays the message: "Type something in the search field to find the albums of your favorite artist/group". The last component is where the magic occurs, the page redirects us here after we click the search button from the App component.

In the index component, initially, we retrieve information from the iTunes Store API specifying the parameters of our search such as the artist or group name and the type of media and entity that we want as a response. Then we populate the cards with the necessary information of the albums and display them to the user. The cards are grouped in sets of nine, at the bottom we have arrows to navigate through the different pages of grouped cards. In this component, we also made the respective validations and conversions to achieve the proper result.

Additionally, the project has some Unit Tests to prove the correct rendering of UI components and to test the proper functionality
of some of the methods in the Index component.
### Screenshot
In the next screenshot we can see the look of the UI:
![screenshot](https://user-images.githubusercontent.com/37459095/111549290-4fc04200-8752-11eb-886d-821bcd49a1fb.png)
## Technologies
We develop this project using the JavaScript framework Vue.js combined with Vuetify. We chose Vue.js due to the different benefits that it offers, it has virtual DOM and rendering which help us to develop interfaces faster as we do not need to reload our page after each change that we perform, it is also lightweight and easy to learn. Vuetify helps us to develop good-looking interfaces thanks to its huge library of components that are ready to use.

To perform the search HTTP request to the iTunes Store API we use Axios. This is a powerful JavaScript library that allows us to make simple operations as an HTTP client, we can configure and make requests to a server, receive the responses that we need, and process them as we want.

For the unit tests, we use Mocha and Chai. Mocha is a JavaScript test framework that runs in Node.js, it also offers browser support and asynchronous tests, Mocha tests run serially. Chai is an assertion library that facilitates testing using assertions to validate or compare things, these assertions are easy to understand and learn.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
