-- USERS
-- DROP SEQUENCE IF EXISTS seq_idUsers;
-- CREATE SEQUENCE seq_idUsers;

CREATE OR REPLACE FUNCTION usersLogin()
        RETURNS trigger
AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        INSERT INTO users (idclient,nomclient,emailclient,email_verified_at,motdepasse,remember_token,created_at,updated_at) VALUES (new.idclient,new.nomclient,new.emailclient,new.email_verified_at,new.motdepasse,new.remember_token,new.created_at,new.updated_at);
        RETURN new;
    ELSIF (TG_OP = 'UPDATE') THEN
        UPDATE users SET id = new.idclient,name = new.nomclient,email = new.emailclient,email_verified_at = new.email_verified_at,password = new.motdepasse,remember_token = new.remember_token,created_at = new.created_at,updated_at = new.updated_at WHERE id = old.idclient;
        RETURN new;
    END IF;
END;
$$ language 'plpgsql';

drop trigger if exists af_ins_client on client;
CREATE TRIGGER af_ins_client
  after insert or update  ON client
  FOR EACH ROW
EXECUTE PROCEDURE usersLogin();