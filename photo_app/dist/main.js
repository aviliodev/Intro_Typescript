"use strict";
// import { User, Album, Picture, PhotoOrientation } from './photo-app';
Object.defineProperty(exports, "__esModule", { value: true });
var album_1 = require("./album");
var photo_orientation_1 = require("./photo-orientation");
var picture_1 = require("./picture");
var user_1 = require("./user");
var user = new user_1.User(1, 'Erickowski', 'Erick', true);
var album = new album_1.Album(10, 'Platzi Album');
var picture = new picture_1.Picture(1, 'Foto', '2020-08', photo_orientation_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
