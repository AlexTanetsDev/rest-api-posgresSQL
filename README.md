# rest-api-posgresSQL

HI welcome to the REST API with PosgresSQL!

REQUESTS EXAMPLE

base url =

POST
//adduser
path: /user

body: {
"username":"test",
"firstName":"test",
"lastName":"test",
"email":"test@mail.com",
"role":"(user || admin || owner)",
"state":"(male || female)"
}

response:{
"profile": {
"id": 10,
"firstname": "Lucky",
"lastname": "Verden",
"state": "male"
},
"user": {
"id": 9,
"username": "Geely",
"email": "test@mail.com",
"role": "user",
"datecreate": "2023-08-06T17:32:03.494Z",
"profileid": 10
}
}

GET
//all users
path: /user

response: [
{
"id": 1,
"username": "John",
"email": "test@mail.com",
"role": "admin",
"datecreate": "2023-08-06T10:13:27.109Z",
"profileid": 1
},
{
"id": 2,
"username": "Max",
"email": "test@mail.com",
"role": "user",
"datecreate": "2023-08-06T10:14:22.808Z",
"profileid": 2
},
{
"id": 3,
"username": "Coool",
"email": "test@mail.com",
"role": "admin",
"datecreate": "2023-08-06T10:14:49.492Z",
"profileid": 3
},
]

GET
//all users by role
path: /user?role=(admin || user || owner)

--- response - it`s array of users objects, filtered by role
response: [
{
"id": 3,
"username": "Max",
"email": "test@mail.com",
"role": "user",
"datecreate": "2023-08-06T10:14:22.808Z",
"profileid": 3
},
{
"id": 5,
"username": "Ducky",
"email": "test@bret.mail",
"role": "user",
"datecreate": "2023-08-06T16:28:05.698Z",
"profileid": 5
},
]

GET
//user by id
path: /user/:id

response:[
{
"id": 3,
"username": "Max",
"email": "test@mail.com",
"role": "user",
"datecreate": "2023-08-06T10:14:22.808Z",
"profileid": 3
}
]

GET
//all users profiles
path: /profile

response:[
{
"id": 1,
"firstname": "John",
"lastname": "Smith",
"state": "male"
},
{
"id": 3,
"firstname": "Max",
"lastname": "Karpow",
"state": "male"
},
{
"id": 4,
"firstname": "Chill",
"lastname": "Verden",
"state": "male"
}
]

GET
// profile by id
path: /profile/:id

response: [
{
"id": 4,
"firstname": "Chill",
"lastname": "Verden",
"state": "male"
}
]

PUT
// user update ---- you can update one or more fields what you need, or all at once

path: /user/:id

---- all of this fields are optional, but reqest can`t be empty
body:{
"username":"Geely",
"firstName":"Lucky",
"lastName":"Verden",
"email":"test@mail.com",
"role":"user",
"state":"male"
}

---- if you update only prfile or user, response will contain only profile or user objects

response:{
"profile":{},
"user":{}
}

DELETE
// delete user and user profile

path: /user/:id

response: "User deleted"
