-- Enable RLS on tables created by your authentication adapter / Prisma
-- This prevents public access to these tables via the Supabase Data API (PostgREST)

ALTER TABLE "Account" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Session" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "VerificationToken" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PasswordResetToken" ENABLE ROW LEVEL SECURITY;

-- If you have an old 'Resume' table from previous experiments and want to secure it:
ALTER TABLE "Resume" ENABLE ROW LEVEL SECURITY;

-- NOTE: By enabling RLS without adding any policies, these tables become 
-- inaccessible to the public API (anon key) and logged-in users (authenticated key).
-- They remain accessible to the Postgres 'postgres' role and 'service_role' key,
-- which makes them secure for server-side usage (like Prisma or NextAuth).

-- If you strictly need front-end access to the 'User' table (e.g. to read own profile),
-- you would need a policy like this:
-- create policy "Users can read their own profile"
--   on "User" for select
--   using ( auth.uid() = id );
