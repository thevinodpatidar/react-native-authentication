# React-Native Authentication Boilerplate

# Getting Started with React-Native

## Installation:

[Setting up the development environment · React Native](https://reactnative.dev/docs/environment-setup)

## Setup:

```bash
npm install react-native-cli -g
```

### Clone the project:

```bash
git clone https://github.com/vinodpatidar123/react-native-authentication.git APP_NAME
```

Change the directory:

```bash
cd APP_NAME
```

Install dependencies using yarn or npm:

```bash
yarn
```

Rename the entire boilerplate to your project name:
```bash
yarn run rename -- PROJECT_NAME
```

Remove current git instance and re-initailse:
```bash
rm -rf .git/ && git init
```

Link the Icons pack to the project:
```bash
react-native link react-native-vector-icons
```

Install the app to your AVD or mobile (connected thru USB):

```bash
yarn android
```

Start Metro server and make these server running while development. (metro is a bundler for react-native):

```bash
yarn start
```