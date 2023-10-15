CREATE TABLE IF NOT EXISTS "city" (
	"city_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(128),
	"country" varchar(128)
);
--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "city_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "actor" ADD COLUMN "address_id" integer NOT NULL;--> statement-breakpoint
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
ALTER TABLE "address" DROP COLUMN IF EXISTS "district";