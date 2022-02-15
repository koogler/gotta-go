INSERT INTO locations (
  id, 
  name, 
  address, 
  latitude, 
  longitude, 
  open_time, 
  close_time, 
  accessible, 
  changing_table, 
  sharps_disposal, 
  requires_purchase, 
  privacy_rating)
VALUES (
  1,                                -- ID
  'Union Station',                  -- name
  '55 Front St W, Toronto, ON',     -- address
  43.645221007945544,               -- latitude
  -79.38060752068597,               -- longitude
  '00:00:00',                            -- open_time
  '23:59:59',                            -- close_time
  true,                             -- accessible
  true,                             -- changing_table
  true,                             -- sharps_disposal
  false,                            -- requires_purchase
  2                                 -- privacy_rating
);

INSERT INTO locations (
  id, 
  name, 
  address, 
  latitude, 
  longitude, 
  open_time, 
  close_time, 
  accessible, 
  changing_table, 
  sharps_disposal, 
  requires_purchase, 
  privacy_rating)
VALUES (
  2,                                -- ID
  'Starbucks',                      -- name
  '300 Front St W Unit 1, Toronto, ON', -- address
  43.64395638933979,                -- latitude
  -79.38933056056223,               -- longitude
  '06:00:00',                            -- open_time
  '20:00:00',                            -- close_time
  true,                             -- accessible
  false,                             -- changing_table
  false,                             -- sharps_disposal
  false,                            -- requires_purchase
  3                                 -- privacy_rating
);

INSERT INTO locations (
  id, 
  name, 
  address, 
  latitude, 
  longitude, 
  open_time, 
  close_time, 
  accessible, 
  changing_table, 
  sharps_disposal, 
  requires_purchase, 
  privacy_rating)
VALUES (
  3,                                -- ID
  'Swatow',                         -- name
  '309 Spadina Ave., Toronto, ON',  -- address
  43.65383769170116,                -- latitude
  -79.3981084013044,                -- longitude
  '11:00:00',                            -- open_time
  '23:00:00',                            -- close_time
  false,                            -- accessible
  false,                            -- changing_table
  false,                            -- sharps_disposal
  true,                             -- requires_purchase
  3                                 -- privacy_rating
);