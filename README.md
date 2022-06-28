
# Feedback-from API
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



## Used technology: 
- Nest
- PostgreSQL

#### Step 1: 
- Clone the repo
- Open it in your favorite editor
- Open a terminal in your editor and run `yarn install` or `npm install`
#### Step 2:
- Registered in <a href="https://dashboard.heroku.com/apps">Heroku</a>
- Create your app in Heroku
- Create and launch datastore, then go in `settings` and `View Credentials`
#### Step 3: 
- Create a `.env` file in the root folder and put your keys in the file like this: 

```
DATABASE_URL=https://zenbit-feedback-db.herokuapp.com/  -  URI from your heroku settings
PORT=8080
```

#### Step 4: 

- In your terminal run `yarn start:dev` or `npm run start:dev`. 
## watch mode
$ npm run start:dev

## production mode
$ npm run start:prod


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Dependencies 

```json
"dependencies": {
    "@nestjs/common": "^8.0.0",
    "@nestjs/config": "^1.1.6",
    "@nestjs/core": "^8.0.0",
    "@nestjs/platform-express": "^8.0.0",
    "@nestjs/typeorm": "^8.0.3",
    "dotenv": "^14.3.2",
    "pg": "^8.7.1",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0",
    "typeorm": "^0.2.41"
  },
  
  ```
