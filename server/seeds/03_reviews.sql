INSERT INTO reviews (
  id,
  user_id,
  location_id,
  review_date,
  review_body,
  clean,
  accessible,
  changing_table,
  sharps_disposal,
  requires_purchase,
  privacy_rating
)
VALUES (
  1,  --id
  1,  --user_id
  3,  --location_id
  '2022-02-14', --review_date
  'Down the stairs and not the cleanest', --review_body
  false,  --clean
  false,  --accessible
  false,  --changing_table
  false, --sharps disposal
  true, --requires purchase
  3 --privacy rating
);