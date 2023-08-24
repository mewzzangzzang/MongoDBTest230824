/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("blog");

db.users.find();
db.users.insertOne({
  name: { first: "zleun", last: "baek" },
  email: "ze@naver.com",
  Tags: ["몽고디비수업", "점심메뉴?", "면>밥"],
});

use("blog");
db.users.update({ email: "ze@gmail.com" }, { $set: { age: 25 } });

use("blog");
db.users.updateOne(
  { email: "ze@naver.com" },
  { $set: { "name.last": "BAEK 변경함" } }
);

use("blog");
db.users.findOne({ "name.first": "zleun" });

use("blog");
db.users.findOne({ _id: ObjectId("64e6bc7c35d432f05dae5e85") });

// 설정
// let ObjectID = require('mongodb').ObjectId
// 4.4.24
//실제 작업할때는 가급적이면 최신 버전으로 사용
// 단점 샤딩, 복제 개별적으로 설정

// 원격지 atlasdb : 외부에 몽고디비 설치
// 기본 5버전 샤딩, 복제 지원
// 프리티어 무료버전 ㄴ
