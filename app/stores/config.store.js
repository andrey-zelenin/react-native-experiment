import firebase from 'firebase'

// see your Firebase config
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000 // TODO: bad
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }

  get SplashImg() {
    return this.splashImg
  }

  get SplashTime() {
    return this.splashTime
  }

  get LoginBG() {
    return this.loginBG
  }
}