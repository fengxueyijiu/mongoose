var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoose-9-29');


var db=mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password: String,
    age: String,
});
var User = mongoose.model('user', userSchema);

// pppp 是实际数据库中记录的名字
// var peter = new user({ name: 'ppeter',password: '12334' ,age: '12'});

//成功构建一条数据记录
// peter.save();  //保存到数据库中 save()异步
User.findById({ _id: '57ecbfc7016968146cf21357'},function(err,user){

  user.remove(function(err){
    console.log('删除')
    User.find().exec(function(err,users){
      console.log(users)
    })
  })
})

// peter.name = 'peterpeter';
// peter.password = 'aaaaa';
// peter.save();
// console.log(user.find());
// user.find().exec(function(err,users){
//   // 异步执行   exec执行
//   console.log(users)
// })
});
