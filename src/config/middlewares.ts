import MainMiddleware from '../router/middlewares/MainMiddleware'
import * as bodyParser from 'body-parser'
import * as multer from 'multer';
/*
 * middlewares
 * */
export const middlewares = [
  MainMiddleware,
  bodyParser.json(), // for parsing application/json
  bodyParser.urlencoded({ extended: true }),// for parsing application/x-www-form-urlencoded
  multer().array() // for parsing multipart/form-data
]
