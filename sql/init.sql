CREATE EXTENSION TABLE IF NOT EXISTS "uuis-ossp";
CREATE EXTENSION TABLE IF NOT EXISTS "pgcrypto";


CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
);

INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));