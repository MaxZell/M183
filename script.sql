CREATE TABLE `ticket` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` text,
  `description` text,
  `status` BOOLEAN NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;