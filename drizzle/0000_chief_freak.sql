CREATE TABLE `articles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`lead` text NOT NULL,
	`category` text DEFAULT 'Patient Education' NOT NULL,
	`read_time` text DEFAULT '5 min read' NOT NULL,
	`cover_image` text DEFAULT '/dr-mohamad-el-haress-portrait.png' NOT NULL,
	`takeaway` text DEFAULT '' NOT NULL,
	`highlights` text DEFAULT '[]' NOT NULL,
	`sections` text DEFAULT '[]' NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`published_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `articles_slug_unique` ON `articles` (`slug`);
--> statement-breakpoint
INSERT INTO `articles` (`slug`,`title`,`lead`,`category`,`read_time`,`cover_image`,`takeaway`,`highlights`,`sections`,`status`,`published_at`) VALUES ('preparing-for-a-surgical-consultation','Preparing for a surgical consultation','A little preparation can make your appointment clearer, more focused, and more useful.','Patient guide','6 min read','/dr-mohamad-el-haress-portrait.png','A productive consultation begins with complete information and ends with a next step you clearly understand.','["Bring reports, imaging and medication lists","Prepare your most important questions","Ask for the plan to be explained clearly"]','[{"title":"Bring the full clinical picture","body":"Collect relevant medical reports, imaging, laboratory results, pathology reports, a list of medications, allergies, and details of previous operations."},{"title":"Write down your questions","body":"Consider what you want to understand about the diagnosis, whether surgery is necessary, available alternatives, expected recovery, and what happens next."},{"title":"Leave with a clear next step","body":"Before the visit ends, make sure you understand the recommended plan, any additional tests, warning signs, and how follow-up will be arranged."}]','published',CURRENT_TIMESTAMP);
--> statement-breakpoint
INSERT INTO `articles` (`slug`,`title`,`lead`,`category`,`read_time`,`cover_image`,`takeaway`,`highlights`,`sections`,`status`,`published_at`) VALUES ('surgery-in-cancer-care','The role of surgery in multidisciplinary cancer care','Cancer treatment may involve several specialists and more than one type of treatment. Surgery is planned as one part of that wider picture.','Surgical Oncology','7 min read','/dr-haress-surgery-team.png','The strongest cancer plan is coordinated: surgery, pathology, imaging and oncology decisions should support one another.','["Treatment sequence matters","Every operation needs a defined purpose","Questions are an essential part of consent"]','[{"title":"Why coordination matters","body":"The sequence of surgery, systemic treatment, and radiotherapy can influence outcomes. Decisions may be informed by pathology, stage, imaging, overall health, and treatment goals."},{"title":"What a surgical oncologist considers","body":"A consultation explores whether an operation is appropriate, its intended purpose, technical considerations, possible risks, and the anticipated recovery."},{"title":"Your role in the conversation","body":"Patients should feel able to ask why a treatment is recommended, whether alternatives exist, and how the plan may affect daily life."}]','published',CURRENT_TIMESTAMP);
--> statement-breakpoint
INSERT INTO `articles` (`slug`,`title`,`lead`,`category`,`read_time`,`cover_image`,`takeaway`,`highlights`,`sections`,`status`,`published_at`) VALUES ('after-surgery-recovery','After surgery: supporting a safer recovery','Recovery differs for every person and procedure. Your clinical team’s instructions should always guide your care.','Recovery','5 min read','/dr-haress-operating-room.png','Recovery is not a race. Follow the individualized plan, make steady progress and know which changes require medical attention.','["Follow your discharge instructions","Return to activity gradually","Know the warning signs that need help"]','[{"title":"Follow your discharge plan","body":"Take medications as directed, care for the wound as instructed, attend follow-up, and understand any restrictions on activity, driving, lifting, or diet."},{"title":"Support steady progress","body":"Appropriate movement, hydration, nutrition, sleep, and gradual activity can support recovery when allowed by your surgeon."},{"title":"Know when to seek help","body":"Contact your care team for concerning changes. Severe symptoms, breathing difficulty, heavy bleeding, or rapid deterioration require urgent medical attention."}]','published',CURRENT_TIMESTAMP);
