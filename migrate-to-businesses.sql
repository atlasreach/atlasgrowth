-- Drop the old table if needed and create the businesses table
DROP TABLE IF EXISTS businesses CASCADE;

CREATE TABLE businesses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    niche TEXT NOT NULL CHECK (niche IN ('hvac', 'plumbing')),
    company_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    logo_url TEXT,
    hero_image_url TEXT,
    primary_color TEXT DEFAULT '#003366',
    secondary_color TEXT DEFAULT '#cc0000',
    accent_color TEXT DEFAULT '#ff9900',
    place_id TEXT,
    lat NUMERIC,
    long NUMERIC,
    status TEXT DEFAULT 'preview' CHECK (status IN ('preview', 'paid')),
    custom_domain TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_businesses_slug ON businesses(slug);
CREATE INDEX idx_businesses_custom_domain ON businesses(custom_domain);
CREATE INDEX idx_businesses_niche ON businesses(niche);

-- Insert example data for Riley Heating & Air Conditioning
INSERT INTO businesses (
    slug,
    niche,
    company_name,
    phone,
    address,
    city,
    state,
    logo_url,
    hero_image_url,
    primary_color,
    secondary_color,
    accent_color,
    place_id,
    lat,
    long,
    status
) VALUES (
    'riley-heating-air',
    'hvac',
    'Riley Heating & Air Conditioning',
    '+1 334-378-3537',
    '1019 Knowles Rd',
    'Phenix City',
    'AL',
    NULL,  -- Will use fallback logo
    NULL,  -- Will use fallback hero image
    '#003366',  -- Navy blue
    '#cc0000',  -- Red
    '#ff9900',  -- Orange
    'ChIJ0fyenO7NjIgRkvUPW-qQvuE',
    32.4528295,
    -85.0077467,
    'preview'
);

-- Insert a few more examples from the Alabama HVAC data
INSERT INTO businesses (
    slug,
    niche,
    company_name,
    phone,
    address,
    city,
    state,
    place_id,
    lat,
    long,
    status
) VALUES
(
    'express-heating-air',
    'hvac',
    'Express Heating & Air Conditioning',
    '+1 706-576-6800',
    '5009 Summerville Rd #1',
    'Phenix City',
    'AL',
    'ChIJ1-Ak_D8y84gRlPeVUDQnxOw',
    32.5140646,
    -85.0237254,
    'preview'
),
(
    'captain-cool-heating',
    'hvac',
    'Captain Cool Cooling & Heating',
    '+1 251-278-3424',
    '19786-A AL-181 Suite A',
    'Fairhope',
    'AL',
    'ChIJWbGrUqpqmogRvaY_u7s9kvI',
    30.5138415,
    -87.8524957,
    'preview'
);
