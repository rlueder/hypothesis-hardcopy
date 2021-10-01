[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?display=inline-block)](https://github.com/rlueder/tidytweets/blob/main/LICENSE)

# hypothesis-hardcopy

> Annotate your physical books through the Hypothesis service.

`hypothesis-hardcopy` allows a reader of a physical book to add persistent 
annotations through the Hypothesis service by entering a book's ISBN.

Annotations created by other users will also be displayed as 
`hypothesis-hardcopy` relies on the [ISBN-A standard](https://www.doi.org/factsheets/ISBN-A.html).

For example, a book with a ISBN of `0201547775` (an older ISBN-10) will have 
a persistent ISBN-A as `10.978.0201/547771` and the following DOI url: 
[https://dx.doi.org/doi:10.978.0201/547771](https://dx.doi.org/doi:10.978.0201/547771)

The fact that the URL is not "registered" by the publisher (and probably 
never will) doesn't stop a client application from using it as a query 
parameter, in this case the Hypothesis API when requesting existing 
annotations or creating new ones.

I'd like to implement a few other features that are listed on the [project 
board](https://github.com/rlueder/hypothesis-hardcopy/projects/1), to name a 
few:

1. support scanning of ISBN from the book instead of manual entry;
2. support persistent hash URLs of a specific book;
3. support the `RangeSelector`, `TextPositionSelector` and 
   `TextQuoteSelector` from Hypothesis when creating an annotation;  
4. use OCR to scan a passage from a book making adding a new annotation much 
   easier (more of a nice-to-have).

## Table of Contents

- [1. Getting Started](#1-getting-started)
  - [1.1 Prerequisites](#1.1-prerequisites)
  - [1.2 Installing](#1.2-installing)
  - [1.3 Running Locally](#1.3-running-locally)
- [2. Testing](#2-testing)
- [3. Deployment](#3-deployment)
- [4. Built With](#4-built-with)
- [5. Credits and Community](#5-credits-and-community)
- [6. License](#6-license)

## 1. Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 1.1 Prerequisites

You'll need Node installed on your machine, the best way to install/manage Node versions is to use NVM.

- [NVM](https://github.com/nvm-sh/nvm) - manage multiple node.js versions

### 1.2 Installing

```
$ npm install
```

### 1.3 Running Locally

Requests for fetching/saving annotations are sent directly to the Hypothesis 
API.

**NOTE You'll need a Hypothesis API token for the project to run locally.**

You can access your [personal token here](https://hypothes.is/account/developer) Save it to a `.env` file as

`REACT_APP_HYPOTHESIS_TOKEN=token_value`

Once the token is in place start the application with:

```
$ npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 3. Testing

Unit and integration tests use Jest, you can run the interactive test monitor with the following command:

```
$ npm test
```

You can read more about testing here:

- [CRA Running Tests](https://create-react-app.dev/docs/running-tests)

- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)

- [Static Type Checking](https://reactjs.org/docs/static-type-checking.html)

## 4. Deployment

This project uses CircleCI as a deployment tool, commits to `develop` or `main` 
branches trigger a build which runs all tests and deploys to prod in case of a commit to `main`.

You can read more about Netlify site deploys and SemVer here:

- [Netlify deploys](https://docs.netlify.com/site-deploys/overview/)

- [Semantic Versioning](https://semver.org/)

## 5. Built With

- [create-react-app](https://github.com/facebook/create-react-app) - create React apps with no build configuration.

- [date-fns](https://github.com/date-fns/date-fns) - modern JavaScript date utility library.

- [react-router](https://github.com/ReactTraining/react-router/) -
  declarative routing for React.

- [quaggaJS](https://github.com/serratus/quaggaJS) - an advanced 
  barcode-scanner written in JavaScript.

- [beautify-isbn](https://github.com/iceyouth/beautify-isbn) - a small 
  package to make ISBN human-readable.

- [Google Books APIs](https://developers.google.com/books/docs/v1/using#q) - 
  for querying book information from the ISBN 

## 6. Credits and Community

This project exists thanks to all the <a href="https://github.com/rlueder/tidytweets/graphs/contributors">people who contribute</a>.

- [Rafael Lüder](https://github.com/rlueder)

## 7. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
