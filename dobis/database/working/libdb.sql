SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `library` ;
CREATE SCHEMA IF NOT EXISTS `library` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `library` ;

-- -----------------------------------------------------
-- Table `library`.`item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`item` ;

CREATE TABLE IF NOT EXISTS `library`.`item` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `item_title` ENUM('book','cd') NOT NULL,
  `price` INT NOT NULL,
  `received_date` DATETIME NOT NULL,
  PRIMARY KEY (`item_id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `item_id_UNIQUE` ON `library`.`item` (`item_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`book` ;

CREATE TABLE IF NOT EXISTS `library`.`book` (
  `isbn` VARCHAR(50) NOT NULL,
  `item_id` INT NOT NULL,
  `status` ENUM('new','old') NULL,
  PRIMARY KEY (`isbn`),
  CONSTRAINT `fk_book_item1`
    FOREIGN KEY (`item_id`)
    REFERENCES `library`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `isbn_UNIQUE` ON `library`.`book` (`isbn` ASC);

CREATE INDEX `fk_book_item1_idx` ON `library`.`book` (`item_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`book_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`book_detail` ;

CREATE TABLE IF NOT EXISTS `library`.`book_detail` (
  `book_isbn` VARCHAR(50) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `edition` VARCHAR(50) NULL DEFAULT NULL,
  `photo` MEDIUMBLOB NULL,
  `publisher` VARCHAR(50) NULL,
  `category` ENUM('ART', 'PSc','SMS', 'FSc','LSc') NOT NULL,
  PRIMARY KEY (`book_isbn`),
  CONSTRAINT `fk_book_detail_book1`
    FOREIGN KEY (`book_isbn`)
    REFERENCES `library`.`book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `book_isbn_UNIQUE` ON `library`.`book_detail` (`book_isbn` ASC);

CREATE INDEX `fk_book_detail_book1_idx` ON `library`.`book_detail` (`book_isbn` ASC);


-- -----------------------------------------------------
-- Table `library`.`authors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`authors` ;

CREATE TABLE IF NOT EXISTS `library`.`authors` (
  `bdetail_isbn` VARCHAR(50) NOT NULL,
  `author_name1` TEXT NULL,
  `author_name2` TEXT NULL DEFAULT NULL,
  `author_name3` TEXT NULL DEFAULT NULL,
  `author_name4` TEXT NULL,
  PRIMARY KEY (`bdetail_isbn`),
  CONSTRAINT `fk_authors_book_detail1`
    FOREIGN KEY (`bdetail_isbn`)
    REFERENCES `library`.`book_detail` (`book_isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_authors_book_detail1_idx` ON `library`.`authors` (`bdetail_isbn` ASC);


-- -----------------------------------------------------
-- Table `library`.`issue`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`issue` ;

CREATE TABLE IF NOT EXISTS `library`.`issue` (
  `issue_date` DATETIME NOT NULL,
  `returned_date` DATETIME NOT NULL,
  `due_date` DATETIME NOT NULL,
  `fine` INT NULL DEFAULT NULL,
  `remark` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`issue_date`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `library`.`borrow`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`borrow` ;

CREATE TABLE IF NOT EXISTS `library`.`borrow` (
  `borrow_id` INT NOT NULL AUTO_INCREMENT,
  `item_item_id` INT NOT NULL,
  `issue_date` DATETIME NOT NULL,
  PRIMARY KEY (`borrow_id`),
  CONSTRAINT `fk_borrow_borrow_copy11`
    FOREIGN KEY (`issue_date`)
    REFERENCES `library`.`issue` (`issue_date`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_borrow_item1`
    FOREIGN KEY (`item_item_id`)
    REFERENCES `library`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `borrow_id_UNIQUE` ON `library`.`borrow` (`borrow_id` ASC);

CREATE INDEX `fk_borrow_item1_idx` ON `library`.`borrow` (`item_item_id` ASC);

CREATE INDEX `fk_borrow_borrow_copy11_idx` ON `library`.`borrow` (`issue_date` ASC);


-- -----------------------------------------------------
-- Table `library`.`cd`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`cd` ;

CREATE TABLE IF NOT EXISTS `library`.`cd` (
  `cd_isbn` VARCHAR(50) NOT NULL,
  `item_item_id` INT NOT NULL,
  `description` VARCHAR(50) NULL,
  PRIMARY KEY (`cd_isbn`),
  CONSTRAINT `fk_cd_item1`
    FOREIGN KEY (`item_item_id`)
    REFERENCES `library`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `isbn_UNIQUE` ON `library`.`cd` (`cd_isbn` ASC);

CREATE INDEX `fk_cd_item1_idx` ON `library`.`cd` (`item_item_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`cd_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`cd_detail` ;

CREATE TABLE IF NOT EXISTS `library`.`cd_detail` (
  `cd_detail_isbn` VARCHAR(50) NOT NULL,
  `cd_title` VARCHAR(50) NOT NULL,
  `cd_edition` VARCHAR(50) NULL,
  `cd_publisher` VARCHAR(50) NULL,
  `cd_category` ENUM('ART', 'PSc','SMS', 'FSc','LSc') NOT NULL,
  PRIMARY KEY (`cd_detail_isbn`),
  CONSTRAINT `fk_cd_detail_cd1`
    FOREIGN KEY (`cd_detail_isbn`)
    REFERENCES `library`.`cd` (`cd_isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `cd_isbn_UNIQUE` ON `library`.`cd_detail` (`cd_detail_isbn` ASC);


-- -----------------------------------------------------
-- Table `library`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`location` ;

CREATE TABLE IF NOT EXISTS `library`.`location` (
  `location_id` INT NOT NULL AUTO_INCREMENT,
  `shelf_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`location_id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `location_id_UNIQUE` ON `library`.`location` (`location_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`item_location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`item_location` ;

CREATE TABLE IF NOT EXISTS `library`.`item_location` (
  `item_item_id` INT NOT NULL,
  `location_location_id` INT NOT NULL,
  CONSTRAINT `fk_item_has_location_item1`
    FOREIGN KEY (`item_item_id`)
    REFERENCES `library`.`item` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_has_location_location1`
    FOREIGN KEY (`location_location_id`)
    REFERENCES `library`.`location` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_item_has_location_location1_idx` ON `library`.`item_location` (`location_location_id` ASC);

CREATE INDEX `fk_item_has_location_item1_idx` ON `library`.`item_location` (`item_item_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`users` ;

CREATE TABLE IF NOT EXISTS `library`.`users` (
  `username` VARCHAR(50) NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(250) NULL DEFAULT NULL,
  `photo` MEDIUMBLOB NULL,
  `password` VARCHAR(250) NOT NULL,
  `createByusername` VARCHAR(50) NOT NULL,
  `creation_date` DATETIME NULL DEFAULT NULL,
  `modifybyusername` VARCHAR(50) NOT NULL,
  `modification_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `username_UNIQUE` ON `library`.`users` (`username` ASC);

CREATE UNIQUE INDEX `email_UNIQUE` ON `library`.`users` (`email` ASC);


-- -----------------------------------------------------
-- Table `library`.`logtime`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`logtime` ;

CREATE TABLE IF NOT EXISTS `library`.`logtime` (
  `users_username` VARCHAR(50) NOT NULL,
  `login_time` DATETIME NOT NULL,
  `logout_time` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`users_username`, `login_time`),
  CONSTRAINT `fk_logtime_users1`
    FOREIGN KEY (`users_username`)
    REFERENCES `library`.`users` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_logtime_users1_idx` ON `library`.`logtime` (`users_username` ASC);


-- -----------------------------------------------------
-- Table `library`.`staff`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`staff` ;

CREATE TABLE IF NOT EXISTS `library`.`staff` (
  `staff_id` INT NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NOT NULL,
  `position(role)` VARCHAR(50) NULL DEFAULT NULL,
  `photo` MEDIUMBLOB NULL DEFAULT NULL,
  `email` VARCHAR(250) NULL,
  `phonenumber` INT NOT NULL,
  `teaching_subject` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`staff_id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `staff_id_UNIQUE` ON `library`.`staff` (`staff_id` ASC);

CREATE UNIQUE INDEX `email_UNIQUE` ON `library`.`staff` (`email` ASC);


-- -----------------------------------------------------
-- Table `library`.`student`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`student` ;

CREATE TABLE IF NOT EXISTS `library`.`student` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(50) NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL,
  `dateofbirth` INT NULL,
  `photo` MEDIUMBLOB NULL DEFAULT NULL,
  `adress` VARCHAR(50) NULL,
  PRIMARY KEY (`student_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `library`.`member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`member` ;

CREATE TABLE IF NOT EXISTS `library`.`member` (
  `member_index` INT NOT NULL AUTO_INCREMENT,
  `staff_staff_id` INT NULL,
  `student_student_id` INT NULL DEFAULT NULL,
  `department` TEXT NULL DEFAULT NULL,
  `no_books_allowed` INT NULL DEFAULT NULL,
  PRIMARY KEY (`member_index`),
  CONSTRAINT `fk_member_staff1`
    FOREIGN KEY (`staff_staff_id`)
    REFERENCES `library`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_student1`
    FOREIGN KEY (`student_student_id`)
    REFERENCES `library`.`student` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `member_index_UNIQUE` ON `library`.`member` (`member_index` ASC);

CREATE INDEX `fk_member_staff1_idx` ON `library`.`member` (`staff_staff_id` ASC);

CREATE INDEX `fk_member_student1_idx` ON `library`.`member` (`student_student_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`operator`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`operator` ;

CREATE TABLE IF NOT EXISTS `library`.`operator` (
  `operator_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(50) NULL DEFAULT NULL,
  `conformpw` VARCHAR(50) NULL DEFAULT NULL,
  `position` VARCHAR(50) NULL DEFAULT NULL,
  `photo` MEDIUMBLOB NULL,
  PRIMARY KEY (`operator_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `library`.`permision`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`permision` ;

CREATE TABLE IF NOT EXISTS `library`.`permision` (
  `perm_id` DECIMAL(10,0) NOT NULL,
  `name` VARCHAR(60) NOT NULL,
  `creation_date` DATETIME NULL DEFAULT NULL,
  `modification_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`perm_id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `permission_id_UNIQUE` ON `library`.`permision` (`perm_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`roles` ;

CREATE TABLE IF NOT EXISTS `library`.`roles` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `category` ENUM('Admin','staff','operator','student') NOT NULL,
  `creation_date` DATETIME NULL DEFAULT NULL,
  `modification_date` DATETIME NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1;

CREATE UNIQUE INDEX `role_id_UNIQUE` ON `library`.`roles` (`role_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`users_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`users_roles` ;

CREATE TABLE IF NOT EXISTS `library`.`users_roles` (
  `users_username` VARCHAR(50) NOT NULL,
  `roles_role_id` INT NOT NULL,
  PRIMARY KEY (`users_username`, `roles_role_id`),
  CONSTRAINT `fk_users_roles_users1`
    FOREIGN KEY (`users_username`)
    REFERENCES `library`.`users` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_roles_roles1`
    FOREIGN KEY (`roles_role_id`)
    REFERENCES `library`.`roles` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_users_roles_roles1_idx` ON `library`.`users_roles` (`roles_role_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`roles_has_permision`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `library`.`roles_has_permision` ;

CREATE TABLE IF NOT EXISTS `library`.`roles_has_permision` (
  `permision_perm_id` DECIMAL(10,0) NOT NULL,
  `roles_role_id` INT NOT NULL,
  PRIMARY KEY (`permision_perm_id`, `roles_role_id`),
  CONSTRAINT `fk_roles_has_permision_roles1`
    FOREIGN KEY (`roles_role_id`)
    REFERENCES `library`.`roles` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_roles_has_permision_permision1`
    FOREIGN KEY (`permision_perm_id`)
    REFERENCES `library`.`permision` (`perm_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_roles_has_permision_permision1_idx` ON `library`.`roles_has_permision` (`permision_perm_id` ASC);

CREATE INDEX `fk_roles_has_permision_roles1_idx` ON `library`.`roles_has_permision` (`roles_role_id` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
