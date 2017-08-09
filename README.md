# Property Listings
Property Listings - An iOS mobile app that displays real estate listings 



Property Listings is a mobile application written in Javascript that displays real estate data. I wrote this application following along with Ray Wenderlich's React Native tutorial. https://www.raywenderlich.com/165140/react-native-tutorial-building-ios-android-apps-javascript. I added a feature by seguing to a detail view where I list details for the selected listing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

From React Native Docs
```
OS X - This guide assumes OS X which is needed for iOS development.
Homebrew is the recommended way to install Watchman and Flow.
Install Node.js 4.0 or newer.
Install nvm with its setup instructions here. Then run nvm install node && nvm alias default node, which installs the latest version of Node.js and sets up your terminal so you can run it by typing node. With nvm you can install multiple versions of Node.js and easily switch between them.
New to npm?
brew install watchman. We recommend installing watchman, otherwise you might hit a node file watching bug.
brew install flow, if you want to use flow.
We recommend periodically running brew update && brew upgrade to keep your programs up-to-date.
```


### Installing

A step by step series of examples that tell you have to get a development env running

Download the git repo to your local machine by either clicking 'Download' or using the following command in terminal

```
git clone https://github.com/ahspadafora/GetTheForecast.git
```

go to the project directory in terminal and open the Xcode workspace 

Go to https://www.aerisweather.com/signup/developer/ and sign up for a free developers account

Enter your api credentials in the Credentials.swift file inside the Xcode project
```
class Credentials {
    
    var shared = Credentials()
    
    var apiKey = "enter your api key here"
    var apiSecret = "Enter your api secret code here"
}
```

Run the Xcode Workspace

## Built With

* [Aeris iOS SDK](https://www.aerisweather.com/support/docs/toolkits/aeris-ios-sdk/) - The sdk used
* [CocoaPods](https://cocoapods.org/) - Dependency Management


## Authors

* **Amber Spadafora** - 


