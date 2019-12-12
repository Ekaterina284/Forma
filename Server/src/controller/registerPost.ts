import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { User } from '../entity/Register';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');



const registerRepository = getManager().getRepository(User);

var createHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
 }
passport.use('signup', new LocalStrategy({
  passReqToCallback : true
},
function(req, name, password, done) {
  findOrCreateUser = function(){
    // поиск пользователя в бд с помощью предоставленного имени пользователя
    registerRepository.findOne({'name': name},function(err, user) {
      // В случае любых ошибок - возврат
      if (err){
        console.log('Error in SignUp: '+err);
        return done(err);
      }
      // уже существует
      if (user) {
        console.log('User already exists');
        return done(null, false, 
           req.flash('message','User Already Exists'));
      } else {
        // если пользователя с такии именем
        // в базе не существует, создать пользователя
        let  newUser = new User();

        
        // установка локальных прав доступа пользователя
        name = name;
        password = createHash(password);
        // сохранения пользователя
        registerRepository.save(function(err) {
          if (err){
            console.log('Error in Saving user: '+err);  
            throw err;  
          }
          console.log('User Registration succesful');    
          return done(null, newUser);
        });
      }
    });
  };
 // Отложить исполнение findOrCreateUser и выполнить 
  // метод на следующем этапе цикла события
  process.nextTick(findOrCreateUser);
});
);