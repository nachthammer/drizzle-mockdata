CREATE TABLE IF NOT EXISTS "actor" (
	"actor_id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"phone_number" varchar(20),
	"address_id" integer NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "address" (
	"address_id" serial PRIMARY KEY NOT NULL,
	"address" varchar(64) NOT NULL,
	"postal_code" varchar(10),
	"city_id" integer NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "city" (
	"city_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64),
	"nof_citizens" integer,
	"country_id" integer NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "country" (
	"country_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64) NOT NULL,
	"language" varchar(64) NOT NULL,
	"foundation_date" timestamp NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "movie_actors_association" (
	"movie_actors_id" serial PRIMARY KEY NOT NULL,
	"actor_id" integer NOT NULL,
	"movie_id" integer NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "movie" (
	"movie_id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"budget" integer NOT NULL,
	"imdb_score" integer NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "actor" ADD CONSTRAINT "actor_address_id_address_address_id_fk" FOREIGN KEY ("address_id") REFERENCES "address"("address_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "address" ADD CONSTRAINT "address_city_id_city_city_id_fk" FOREIGN KEY ("city_id") REFERENCES "city"("city_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "city" ADD CONSTRAINT "city_country_id_country_country_id_fk" FOREIGN KEY ("country_id") REFERENCES "country"("country_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "movie_actors_association" ADD CONSTRAINT "movie_actors_association_actor_id_actor_actor_id_fk" FOREIGN KEY ("actor_id") REFERENCES "actor"("actor_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "movie_actors_association" ADD CONSTRAINT "movie_actors_association_movie_id_movie_movie_id_fk" FOREIGN KEY ("movie_id") REFERENCES "movie"("movie_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
