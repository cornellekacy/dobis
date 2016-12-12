-- ---------------------------------------------------------------------------
-- Create the insertUser stored procedure.
-- ---------------------------------------------------------------------------
DELIMITER $$
DROP PROCEDURE IF EXISTS addUser $$
CREATE PROCEDURE addUser(
	IN username VARCHAR(50),
  	IN fname    VARCHAR(50) ,
  	IN lname    VARCHAR(50) ,
  	IN email    VARCHAR(250) ,
  	IN p_password	VARCHAR(250) ,
  	IN CreateByusername   VARCHAR(50) ,
	IN modifybyusername	  VARCHAR(50) )
BEGIN                                                             
	INSERT INTO users(`username`,`fname`, `lname`, `email`, `password`, `CreateByusername`, `creation_date`, `modifybyusername`,`modification_date`)
	VALUES(username,fname, lname, email, PASSWORD(p_password), CreateByusername, NOW(), modifybyusername, NOW());
END $$

-- ---------------------------------------------------------------------------
				-- Asigning role to a user
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS AsignRoleuser $$
CREATE PROCEDURE AsignRoleuser(
	IN roles_role_id INT, 
	IN users_username VARCHAR(50))
BEGIN 
	INSERT INTO `users_roles`(`roles_role_id`, `users_username`)
	VALUES(roles_role_id, users_username);
END $$ 

-- ---------------------------------------------------------------------------
				-- get role
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS getRole $$
CREATE PROCEDURE getRole(IN p_username VARCHAR(50))
BEGIN
	SELECT u.username, r.name FROM roles r
	LEFT JOIN users_roles ur
	ON r.role_id = ur.roles_role_id
	LEFT JOIN users u
	ON u.username = ur.users_username
	WHERE username = p_username;
END $$
-- ---------------------------------------------------------------------------
				-- get permision
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS getPermision $$
CREATE PROCEDURE getPermision(IN p_username VARCHAR(50))
BEGIN
	SELECT u.username, p.name, r.name FROM permision p
	LEFT JOIN roles_has_permision pr
	ON pr.permision_perm_id = p.perm_id
	LEFT JOIN roles r
	ON r.role_id = pr.roles_role_id
	LEFT JOIN users_roles ur
	ON ur.roles_role_id = r.role_id
	LEFT JOIN users u
	ON u.username = ur.users_username
	WHERE username = p_username;
END $$
-- ---------------------------------------------------------------------------
-- check if a user have login or not
-- ---------------------------------------------------------------------------
DROP FUNCTION IF EXISTS hasLoggedIn $$
CREATE FUNCTION hasLoggedIn(p_username VARCHAR(45)) 
RETURNS BOOLEAN READS SQL DATA
/*
 * check and return true if user is currently logged in, else false.
 */
BEGIN
	RETURN (SELECT COUNT(*) FROM logtime WHERE `users_username`= p_username AND ISNULL(Logout_time));
END $$
-- --------------------------------------------------------------------------
-- userlogin
-- --------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS loginUser $$
CREATE PROCEDURE loginUser(IN p_username VARCHAR(45), IN p_password VARCHAR(255))
BEGIN	
	SELECT u.email,u.fname, u.lname,l.login_time
	FROM users u LEFT JOIN logtime l ON l.users_username=u.username
	WHERE (u.username=p_username AND u.password=p_password ) AND l.login_time=
		(select max(login_time) FROM logtime WHERE users_username=p_username)
			into @on,@fn,@ln,@lt;

	START TRANSACTION;
		UPDATE logtime SET logout_time=NOW() WHERE users_username=p_username AND logout_time IS NULL;
			INSERT INTO logtime(`users_username`, `login_time`, `logout_time`)
			VALUES (p_username,NOW(), NULL);
	COMMIT;
		-- return full names and time of last login
	IF (p_username and p_password) IS NOT NULL THEN
		SELECT p_username as username, @on as email, @fn as firstname, @ln as lastname, @lt as login_time FROM DUAL;
	END IF;
END $$ 

-- ---------------------------------------------------------------
-- Create the getUser stored procedure.
-- ---------------------------------------------------------------
DROP PROCEDURE IF EXISTS getUser $$
CREATE PROCEDURE getUser(IN p_username VARCHAR(45))
BEGIN 
	SELECT  username, fname, lname, email, password, 
	createByusername,
	creation_date, 
	modifybyusername,
	modification_date
	FROM users
	WHERE username = p_username;
END $$

-- --------------------------------------------------------------------------
-- to change the password of a user
-- --------------------------------------------------------------------------

DROP PROCEDURE IF EXISTS change_password $$
CREATE PROCEDURE change_password(IN p_username VARCHAR(45), IN p_password VARCHAR(255))
BEGIN
  UPDATE users
  SET password = PASSWORD(p_password)
  WHERE username = p_username;
END $$

-- ---------------------------------------------------------------
-- to logout a user using the name of the users
-- ---------------------------------------------------------------
DROP PROCEDURE IF EXISTS logoutUser $$
CREATE PROCEDURE logoutUser(IN p_userName VARCHAR(45) )
BEGIN

    UPDATE  logtime
    SET logout_time=NOW()
    WHERE `users_username`= p_userName  AND ISNULL(logout_time) LIMIT 1;
END $$

-- ---------------------------------------------------------------------------
-- Create the UpdateUser stored procedure.
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS updateUser $$
CREATE PROCEDURE updateUser(
	IN p_username VARCHAR(45),
	IN fname VARCHAR(45),
	IN lname VARCHAR(45),
	IN email VARCHAR(45),
	IN CreateByusername   VARCHAR(50) ,
	IN modifybyusername	  VARCHAR(50))                             
BEGIN
	UPDATE users 
	SET	
		username = username,
		fname = fname,
		lname = lName,
		email = email,
		CreateByusername = CreateByusername,
		modifybyusername = modifybyusername
	WHERE username = p_username AND password = password;
END $$
DELIMITER ;

DELIMITER $$
-- ----------------------------------------------------------
-- 				location of the book in the library
-- ----------------------------------------------------------
DROP PROCEDURE IF EXISTS Addlocation $$
CREATE PROCEDURE addLocation(
  	IN shelf_name VARCHAR(50))
BEGIN
	INSERT INTO `location`(`shelf_name`)
	VALUES(shelf_name);
END $$

-- ---------------------------------------------------------
-- 				view where a book is in the library
-- ---------------------------------------------------------
DROP PROCEDURE IF EXISTS viewB_location $$
CREATE PROCEDURE viewB_location(IN p_title VARCHAR(20))
BEGIN
	IF p_title IS NULL THEN
    	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Please user enter the title of your book that you 
    	look for.';
  	END IF;

	SELECT title,edition,publisher, shelf_name FROM location L 
	LEFT JOIN item_location Il
	ON Il.location_location_id = L.location_id
	LEFT JOIN item I
	on I.item_id = Il.item_item_id
	LEFT JOIN book B
	on B.isbn = I.item_id
	LEFT JOIN book_detail Bd
	ON Bd.book_isbn = B.isbn
	WHERE title = p_title;
END $$
-- ---------------------------------------------------------
-- 			how does the iterm cost
-- ---------------------------------------------------------
DROP PROCEDURE IF EXISTS addItem $$
CREATE PROCEDURE addItem(
	IN item_title ENUM('book','cd'),
  	IN price   INT ,
  	IN location_location_id INT)
BEGIN
	INSERT INTO item(`price`,`received_date`)
	VALUES(price, NOW());

	INSERT INTO `item_location`(`item_item_id`, `location_location_id`)
	VALUES(LAST_INSERT_ID(), location_location_id);
END $$

-- --------------------------------------------------------
--					view every thing in the item table
-- --------------------------------------------------------
DROP PROCEDURE IF EXISTS viewItem $$
CREATE PROCEDURE viewItem()
BEGIN
	SELECT * FROM item;
END $$

DROP PROCEDURE IF EXISTS viewUsers $$
CREATE PROCEDURE viewUsers()
BEGIN
	SELECT * FROM users;
END $$

DROP PROCEDURE IF EXISTS searchUsers $$
CREATE PROCEDURE searchUsers(IN p_username VARCHAR(50))
BEGIN
	SELECT username, fname, lname, email 
	FROM users
	WHERE username = p_username;
END $$

-- --------------------------------------------------------
-- 					to see just a particular item from the item table
-- --------------------------------------------------------
DROP PROCEDURE IF EXISTS searchItem $$
CREATE PROCEDURE searchItem(
	IN p_item_title ENUM('book', 'cd'),
	IN p_title VARCHAR(50))
BEGIN
	IF p_item_title = p_item_title OR p_title = p_title THEN
		SELECT item_title, price, shelf_name, title 
		FROM item I
		LEFT JOIN book B
		on B.isbn = I.item_id
		LEFT JOIN book_detail Bd
		ON Bd.book_isbn = B.isbn
		LEFT JOIN item_location Il
		on I.item_id = Il.item_item_id
		LEFT JOIN location L
		ON Il.location_location_id = L.location_id
		WHERE title = p_title OR item_title = p_item_title;
	END IF;
END $$
-- ---------------------------------------------------------------------------
-- detail about books or register on the database 
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS addBook $$
CREATE PROCEDURE addBook(
	IN isbn INT ,
  	IN item_id INT ,
  	IN status ENUM('new', 'old'))
BEGIN
	INSERT INTO `book`(`isbn`, `item_id`, `status`)
	VALUES(isbn, item_id, status);
END $$

-- ---------------------------------------------------------------------------
--			to search of a particule book in the library
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS searchBook $$
CREATE PROCEDURE searchBook(IN p_title VARCHAR(50))
BEGIN
	SELECT status, title, edition, publisher, category 
	FROM book B
	LEFT JOIN book_detail Bd
	ON Bd.book_isbn = B.isbn
	LEFT JOIN authors au
	ON au.bdetail_isbn = Bd.book_isbn
	WHERE title = p_title;
END $$

-- --------------------------------------------------------------------
--			to see all the books present in a department
-- --------------------------------------------------------------------
DROP PROCEDURE IF EXISTS viewDep_books $$
CREATE PROCEDURE viewDep_books(IN p_category ENUM('ART', 'PSc','SMS', 'FSc','LSc'))
BEGIN
	SELECT status, title, edition, publisher 
	FROM book B
	LEFT JOIN book_detail Bd
	ON Bd.book_isbn = B.isbn
	LEFT JOIN authors au
	ON au.bdetail_isbn = Bd.book_isbn
	WHERE category = p_category;
END $$

-- ------------------------------------------------------------
--				to see all the books present in the library
-- ------------------------------------------------------------
DROP PROCEDURE IF EXISTS viewAllbooks $$
CREATE PROCEDURE viewAllbooks()
BEGIN
	SELECT status, title, edition, photo, publisher, category
	FROM book B
	LEFT JOIN book_detail Bd
	ON Bd.book_isbn = B.isbn
	LEFT JOIN authors au
	ON au.bdetail_isbn = Bd.book_isbn;
END $$
-- --------------------------------------------------------
				-- book_detail --
-- ---------------------------------------------------------
DROP PROCEDURE IF EXISTS Addbookinfo $$
CREATE PROCEDURE addBookinfo(
	IN book_isbn INT ,
	IN title VARCHAR(50),
	IN edition VARCHAR(50),
	IN publisher VARCHAR(50),
	IN category ENUM('ART', 'PSc','SMS', 'FSc','LSc'))
BEGIN
	INSERT INTO book_detail(`book_isbn`, `title`, `edition`, `publisher`, `category`)
	VALUES(book_isbn, title, edition, publisher, category);
END $$

-- ----------------------------------------------------------
-- 		to add the cd of a particular book
-- ----------------------------------------------------------
DROP PROCEDURE IF EXISTS add_Cd $$
CREATE PROCEDURE add_Cd(
	IN cd_isbn INT ,
  	IN item_item_id INT ,
  	IN description VARCHAR(50))
BEGIN
	INSERT INTO `cd`(`cd_isbn`, `item_item_id`, `description`)
	VALUES(cd_isbn, item_item_id, description);
END $$

-- ---------------------------------------------------------------------------
--			to search of a particule CD in the library
-- ---------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS searchCd $$
CREATE PROCEDURE searchCd(IN p_title VARCHAR(50))
BEGIN
	SELECT title, edition, publisher, category 
	FROM cd B
	LEFT JOIN cd_detail C
	ON C.cd_detail_isbn = B.cd_isbn
	WHERE title = p_title;
END $$F

-- --------------------------------------------------------------------
--			to see all the books present in a department
-- --------------------------------------------------------------------
DROP PROCEDURE IF EXISTS viewDep_cds $$
CREATE PROCEDURE viewDep_cds(IN p_category ENUM('ART', 'PSc','SMS', 'FSc','LSc'))
BEGIN
	SELECT status, title, edition, publisher 
	FROM book
	LEFT JOIN cd_detail C
	ON C.cd_detail_isbn
	LEFT JOIN cd D
	ON D.cd_isbn
	WHERE category = p_category;
END $$

-- ------------------------------------------------------------
--				to see all the books present in the library
-- ------------------------------------------------------------
DROP PROCEDURE IF EXISTS viewAllcds $$
CREATE PROCEDURE viewAllcds()
BEGIN
	SELECT status, title, edition, publisher, category 
	FROM book B
	LEFT JOIN cd_detail C
	ON C.cd_detail_isbn
	LEFT JOIN cd D
	ON D.cd_isbn;
END $$
-- --------------------------------------------------------
				-- book_detail --
-- ---------------------------------------------------------
DROP PROCEDURE IF EXISTS addCd_info $$
CREATE PROCEDURE addCd_info(
	IN cd_detail_isbn INT ,
	IN title VARCHAR(50),
	IN edition VARCHAR(50),
	IN publisher VARCHAR(50),
	IN category ENUM('ART', 'PSc','SMS', 'FSc','LSc'))
BEGIN
	INSERT INTO cd_detail(`cd_detail_isbn`, `title`, `edition`, `publisher`, `category`)
	VALUES(cd_detail_isbn, title, edition, publisher, category);
END $$

-- ------------------------------------------------------------
				-- authors of a particular book -- 
-- ------------------------------------------------------------
DROP PROCEDURE IF EXISTS addAuthor $$
CREATE PROCEDURE addAuthor(
	IN bdetail_isbn INT,
	IN author_name1 TEXT,
	IN author_name2 TEXT,
	IN author_name3 TEXT,
	IN author_name4 TEXT)
BEGIN
	INSERT INTO `authors` (`bdetail_isbn`, `author_name1`, `author_name2`, `author_name3`, `author_name4`)
	VALUES(bdetail_isbn, author_name1, author_name2, author_name3, author_name4);  
END $$
DELIMITER ;

DELIMITER $$
-- ----------------------------------------------------------
-- 			add issual if there is any
-- ----------------------------------------------------------
DROP PROCEDURE IF EXISTS addSitution $$
CREATE PROCEDURE addSitution(
	IN issue_date DATETIME,
	IN returned_date DATETIME,
	IN due_date DATETIME,
	IN fine INT,
	IN remark TEXT )
BEGIN
	INSERT INTO `issue` ( `issue_date`, `returned_date`, `due_date`, `fine`, `remark`)
	VALUES(NOW(), NOW(), due_date, fine, remark);
END $$

-- ---------------------------------------------------------------------
-- view all the books that have been given out and if there is any fine
-- ----------------------------------------------------------------------
DROP PROCEDURE IF EXISTS viewSitution $$
CREATE PROCEDURE viewSitution()
BEGIN
	SELECT * FROM issue;
END $$
-- ---------------------------------------------------------
-- 			day in which an item(s) was borrow
-- ---------------------------------------------------------
DROP PROCEDURE IF EXISTS item_Borrow $$
CREATE PROCEDURE item_Borrow (
	IN item_item_id INT )
BEGIN
	INSERT INTO `borrow`(`item_item_id`, `issue_date`)
	VALUES(item_item_id, NOW());
END $$

-- -----------------------------------------------------------
--		view every books that have been borrow
-- -----------------------------------------------------------
DROP PROCEDURE IF EXISTS Borrow_books $$
CREATE PROCEDURE Borrow_books()
BEGIN
	SELECT * FROM borrow;
END $$
DELIMITER ;


-- -----------------------------------------------------------
--		editSitution
-- -----------------------------------------------------------
DROP PROCEDURE IF EXISTS editSitution $$
CREATE PROCEDURE editSitution (
	IN p_issue_date DATETIME,
	IN returned_date DATETIME,
	IN due_date DATETIME,
	IN fine INT,
	IN remark TEXT )
BEGIN
	UPDATE issue
		SET
			returned_date = returned_date,
			due_date = due_date,
			fine = fine,
			remark = remark
			WHERE issue_date = p_issue_date;
END $$

DROP PROCEDURE IF EXISTS editAuthorname $$
CREATE PROCEDURE editAuthorname (
	IN p_bdetail_isbn INT,
	IN author_name1 TEXT,
	IN author_name2 TEXT,
	IN author_name3 TEXT,
	IN author_name4 TEXT)
BEGIN
	UPDATE authors
		SET 
			author_name1 = author_name1,
			author_name2 = author_name2,
			author_name3 = author_name3,
			author_name4 = author_name4
			WHERE bdetail_isbn = p_bdetail_isbn;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS modifyCd_info $$
CREATE PROCEDURE modifyCd_info (
	IN p_cd_detail_isbn INT,
	IN cd_title VARCHAR(50),
	IN cd_edition VARCHAR(50),
	IN cd_publisher VARCHAR(50),
	IN cd_category ENUM('ART', 'PSc','SMS', 'FSc','LSc'))
BEGIN
	UPDATE cd_detail
		SET 
			cd_title = cd_title,
			cd_edition = cd_edition,
			cd_publisher = cd_publisher,
	 		cd_category	 = cd_category
	 		WHERE cd_detail_isbn = p_cd_detail_isbn;
END $$


DROP PROCEDURE IF EXISTS editBookinfo $$
CREATE PROCEDURE editBookinfo (
	IN p_book_isbn INT,
	IN title VARCHAR(50),
	IN edition VARCHAR(50),
	IN photo MEDIUMBLOB,
	IN publisher VARCHAR(50),
	IN category ENUM('ART', 'PSc','SMS', 'FSc','LSc'))
BEGIN
	UPDATE book_detail
		SET 
		book_isbn = book_isbn,
		title = title,
		edition = edition,
		photo = photo,
		publisher = publisher,
		category = category
	WHERE book_isbn = p_book_isbn;
END $$


DROP PROCEDURE IF EXISTS editB_status $$
CREATE PROCEDURE editB_status (
	IN p_isbn INT,
	IN status ENUM('new', 'old'))
BEGIN
	update book
		SET status = status
		WHERE isbn = p_isbn;
END $$

DROP PROCEDURE IF EXISTS editItem $$
CREATE PROCEDURE editItem(
	IN p_item_title ENUM('book', 'cd'),
	IN price INT 					  )          
BEGIN
	UPDATE item 
		SET	
			item_title = item_title,
			price 	   = price
		WHERE item_title = p_item_title;
END $$

DROP PROCEDURE IF EXISTS Userphotoedit $$
CREATE PROCEDURE Userphotoedit(
	IN p_username VARCHAR(45),
	IN photo MEDIUMBLOB      )                             
BEGIN
	UPDATE users 
	SET	
		username = username,
		photo = photo
	WHERE username = p_username AND password = password;
END $$
DELIMITER ;

DELIMITER $$