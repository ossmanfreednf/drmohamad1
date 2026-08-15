ALTER TABLE `articles` ADD `image_alt` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `articles` ADD `author` text DEFAULT 'Dr. Mohamad El Haress' NOT NULL;--> statement-breakpoint
ALTER TABLE `articles` ADD `seo_title` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `articles` ADD `meta_description` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `articles` ADD `keywords` text DEFAULT '[]' NOT NULL;