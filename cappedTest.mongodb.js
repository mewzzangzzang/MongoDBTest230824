use("testDB");

// 몽고 디비 js 기반이라 문법 스타일 js형식
// 컬렉션 이름, { 속성 : 값, 속성2 : 값}
db.createCollection("cappdedC", { capped: true, size: 10000 });

use("testDB");
db.cappedC.insertOne({ x: 1 });
