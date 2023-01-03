CREATE OR REPLACE FUNCTION generate_and_insert_coupon()
RETURNS TRIGGER AS
$BODY$
DECLARE
  random_string text;
  coupon_code text;
BEGIN
  -- Generate a random string of 10 characters using the gen_random_bytes function
  SELECT encode(gen_random_bytes(5), 'hex') INTO random_string;

  -- Generate a coupon code using the random string
  coupon_code := 'CHQ-' || random_string;

  -- Check if the coupon code already exists in the bonreduction table
  IF EXISTS (SELECT * FROM bonreduction WHERE codebonreduction = coupon_code) THEN
    -- If the coupon code already exists, call the function again to generate a new one
    EXECUTE PROCEDURE generate_and_insert_coupon;
  ELSE
    -- If the coupon code is unique, insert it into the bonreduction table
    INSERT INTO bonreduction (refcommande, codebonreduction, datevalidite, estvalide)
    VALUES (NEW.refcommande, coupon_code, current_timestamp + interval '2 years', TRUE);
  END IF;
  RETURN NEW;
END;
$BODY$
LANGUAGE plpgsql;

CREATE TRIGGER generate_and_insert_coupon_trigger
AFTER INSERT OR UPDATE OF estCheque ON commande
FOR EACH ROW
EXECUTE PROCEDURE generate_and_insert_coupon();

CREATE OR REPLACE FUNCTION expire_coupon_function()
RETURNS TRIGGER AS
$BODY$
BEGIN
  -- Check if the estvalide field is true
  IF NEW.estvalide THEN
    -- If the estvalide field is true, check if the datevalidite field is lower than the current date
    IF NEW.datevalidite < current_timestamp THEN
      -- If the coupon has expired, set the estvalide field to false
      NEW.estvalide := FALSE;
    END IF;
  END IF;
  RETURN NEW;
END;
$BODY$
LANGUAGE plpgsql;

CREATE EVENT TRIGGER expire_coupon_event_trigger
ON SCHEDULE AT '00:00:00'
EXECUTE PROCEDURE expire_coupon_function()
FOR EACH ROW
IN SELECT * FROM bonreduction WHERE estvalide = TRUE;

CREATE OR REPLACE FUNCTION gen_random_string(length integer) RETURNS text AS $$
DECLARE
  chars text := 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  result text := '';
  i integer;
BEGIN
  FOR i IN 1..length LOOP
    SELECT substring(chars, ceil(random() * length), 1) INTO result;
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;


* * * * * cd /home/s212/VinoDrill && php artisan schedule:run >> /dev/null 2>&1


DECLARE vDateDebutReservation date;
DECLARE vIdSejour integer:= new.idsejour;
DECLARE vRefCommande integer:= new.refcommande;
DECLARE vRandomVoucher varchar:= random_voucher();
DECLARE vDateValidite date;
DECLARE vEstCadeau bool;
DECLARE vEstValide bool;
DECLARE vIdBonReduc integer;
BEGIN
   --DROP SEQUENCE IF EXISTS seq_idBonReduc;
   select
      datedebutreservation into strict vDateDebutReservation 
   from
      reservation 
   where
      idsejour = vIdSejour 
      and refcommande = vRefCommande;
RAISE NOTICE 'Value datedebutreservation: %',
vDateDebutReservation;
select
   estcadeau into strict vEstCadeau 
from
   reservation 
where
   idsejour = vIdSejour 
   and refcommande = vRefCommande;
RAISE NOTICE 'Value estcadeau: %',
vEstCadeau;
select
   to_char(datedebutreservation + INTERVAL '18 month', 'MM-DD-YYYY') into strict vDateValidite 
from
   reservation 
where
   idsejour = vIdSejour 
   and refcommande = vRefCommande;
RAISE NOTICE 'Value validite: %',
vDateValidite;
if(vDateValidite > current_date)
Then
   vEstValide = 'True';
ELSE
END
IF;
if(vEstCadeau = 'True') 
THEN
   SELECT random_voucher() INTO vIdBonReduc;
   vIdBonReduc := 'SEJ-' || vIdBonReduc;
   INSERT INTO
      BONCOMMANDE 
   VALUES
      (
         nextval('seq_idBonReduc'), vRefCommande, random_voucher(), vDateValidite, vEstValide
      )
;
return new;
ELSE
   return old;
END
IF;
END
;

