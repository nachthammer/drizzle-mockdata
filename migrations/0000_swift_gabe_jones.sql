CREATE TABLE IF NOT EXISTS "actor" (
	"actor_id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"last_update" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "address" (
	"address_id" serial PRIMARY KEY NOT NULL,
	"address" varchar(50) NOT NULL,
	"address2" varchar(50),
	"district" varchar(20) NOT NULL,
	"city_id" smallint NOT NULL,
	"postal_code" varchar(10),
	"phone" varchar(20) NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
