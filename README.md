# react-native-typescript-setup

This application is basic setup of type script with react-native, having feature signup, login and show images in swiper card.

## Preview
![signup](https://user-images.githubusercontent.com/37612566/52701303-ed5b4d00-2f9f-11e9-9005-43ecac491688.png)
![loginpreview](https://user-images.githubusercontent.com/37612566/52701310-f1876a80-2f9f-11e9-851e-0dc9282ad201.png)
![dashboard](https://user-images.githubusercontent.com/37612566/52701326-fe0bc300-2f9f-11e9-8c5b-7bd02a5225f0.png)


## Main technologies used

- [React Native](https://github.com/facebook/react-native)
- [Type Script](https://www.typescriptlang.org/docs/home.html)

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html) globally on your computer
```
yarn global add react-native-cli
```

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:
```
react-native run-android
```

 ### IOS steps
- [Download Xcode](https://developer.apple.com/xcode/) on your Mac.

- Open Project on Mac by double click on <yourproject/ios/.xcodeproj> file
-Project can directly run from xCode or run following command.

- Run project on ios
`react-native run-ios`

### Start react native packager
`yarn start`

### Run typescript compiler.
`yarn tsc`
