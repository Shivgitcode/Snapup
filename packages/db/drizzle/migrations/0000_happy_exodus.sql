CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255),
	"email" varchar(255),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
