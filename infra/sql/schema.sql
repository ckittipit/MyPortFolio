CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(100) NOT NULL,
  email varchar(255) NOT NULL,
  subject varchar(150),
  message text NOT NULL,
  locale varchar(2) NOT NULL CHECK (locale IN ('th', 'en')),
  ip_hash varchar(128),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages (email);
