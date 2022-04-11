CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    userPassword VARCHAR(100),
    email VARCHAR(50),
    constraint usernameUnique UNIQUE (username)
);