


# Ion Bot

![logo512 copy 2](https://user-images.githubusercontent.com/31907722/125200919-98b07f00-e28a-11eb-8f49-cc3514cd34e0.png)
 

Ion is an open source Telegram user bot with built-in web based admin dashboard which gives you ability to manage your user bot, install plugins, add custom commands and more.
  


## Requirements

* Node.js and NPM
* yarn
* macOS, Windows, Linux or Android

## Installation

There are two ways you can install Ion on your PC/Android. To install and host on Android, follow <a href="https://xen.codes/install-ion-on-android" target="_blank">this post</a>.

### Method 1 (recommended)

This is the easiest way to install Ion, run the following commands:

```
npm i -g @ionapp/ion
ion --setup
```

Next time, you don't need to run `--setup`, instead run `--init`. 

**Note:** In case you want to update MongoDB connection string, run `--setup` again.

### Method 2

For this method you will need to clone the repository from GitHub, install the dependencies, and setup `.env` file.

```bash
git clone https://github.com/ionbot/ion
cd ion
yarn
# create .env file with the following content
# MONGO_URI=[your mongodb connection string]
yarn start
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ionbot/ion)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/ionbot/ion)
  
## Known Issues

  

### For more information

*  [Join Telegram Group](https://t.me/ionuserbotchat)
  

**Enjoy! Feedbacks are really appreciated ❤️**
