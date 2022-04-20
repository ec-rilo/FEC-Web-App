-- COPY Products(id, name, slogan, description, category, default_price)
-- FROM '/home/ecarrillo046/hack-reactor/sei/sdc/FEC-Web-App/server/dbs/overview/data/product.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY Features(id, product_id, feature, value)
-- FROM '/home/ecarrillo046/hack-reactor/sei/sdc/FEC-Web-App/server/dbs/overview/data/features.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY Styles(id, product_id, name, sale_price, original_price, default_style)
-- FROM '/home/ecarrillo046/hack-reactor/sei/sdc/FEC-Web-App/server/dbs/overview/data/styles.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY Photos(id, style_id, url, thumbnail_url)
-- FROM '/home/ecarrillo046/hack-reactor/sei/sdc/FEC-Web-App/server/dbs/overview/data/photos.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY Skus(id, style_id, size, quantity)
-- FROM '/home/ecarrillo046/hack-reactor/sei/sdc/FEC-Web-App/server/dbs/overview/data/skus.csv'
-- DELIMITER ','
-- CSV HEADER;

COPY Related_Products(id, curr_prod_id, related_prod_id)
FROM '/home/ecarrillo046/hack-reactor/sei/sdc/FEC-Web-App/server/dbs/overview/data/related.csv'
DELIMITER ','
CSV HEADER;