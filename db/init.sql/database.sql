CREATE TYPE role_type AS ENUM ('admin', 'user', 'owner');
CREATE TYPE state_types AS ENUM ('male', 'female');

CREATE TABLE profiles(
id SERIAL PRIMARY KEY,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
state state_types NOT NULL
);



CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
role role_type NOT NULL DEFAULT 'user',
dateCreate timestamp default NOW() :: timestamp,
profileId INT, 
FOREIGN KEY (profileId) REFERENCES profiles (id),
UNIQUE(profileId)
);



