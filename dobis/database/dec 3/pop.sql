-- ------------------------------------------------------------------
					-- populating the permission table
-- ------------------------------------------------------------------
INSERT INTO permision(`perm_id`, `name`, `creation_date`, `modification_date`)VALUES
(1, 'user_add', now(), now()),
(2, 'user_edit', now(), now()),
(4,'user_delete', now(), now()),
(8,'user_view', now(), now()),
(16,'blog_add', now(), now()),
(32,'blog_edit', now(), now()),
(64,'blog_delete', now(), now()),
(128,'blog_view', now(), now());

-- ------------------------------------------------------------------
					-- populating the roles table
-- ------------------------------------------------------------------
INSERT INTO roles(`name`,`category`,`creation_date`,`modification_date`)VALUES
('Principal', 'Admin', NOW(), NOW()),
('Vice_principal', 'Admin', NOW(), NOW()),
('Dean_of_Study', 'Admin', NOW(), NOW()),
('Displine_master', 'Admin', NOW(), NOW()),
('Secretary', 'Admin', NOW(), NOW()),
('Secretary', 'operator', NOW(), NOW()),
('Teacher', 'staff', NOW(), NOW()),
('Student', 'student', NOW(), NOW());

-- ---------------------------------------------------------------------------
				-- Asigning permision to a role
-- ---------------------------------------------------------------------------
INSERT INTO `roles_has_permision`(`permision_perm_id`,`roles_role_id`)VALUES
(1,1), (2, 1), (4, 1), (8, 1), (16, 1), (32, 1), (64, 1), (128, 1),
(1, 2), (2, 2), (4, 2), (8, 2), (16, 2), (32, 2), (64, 2), (128, 2),
(1, 3), (2, 3), (8, 3),
(2, 4), (8, 4),
(1, 5), (2, 5), (4, 5), (8, 5), (16, 5), (32, 5), (64, 5), (128, 5),
(1, 6), (2, 6), (4, 6), (8, 6), (16, 6), (32, 6), (64, 6), (128, 6),
(2, 7), (8, 7),
(8, 8);

INSERT INTO `users`(`username`, `fname`, `lname`, `email`, `password`, `createByusername`, `creation_date`, `modifybyusername`, `modification_date`) VALUES ("admin","cornelle","kacy","cornellekacy@gmail.com",PASSWORD("admin"),"admin",now(),"admin",now())
