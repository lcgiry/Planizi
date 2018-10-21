CREATE DATABASE  IF NOT EXISTS `db_planizi` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_planizi`;
-- MySQL dump 10.13  Distrib 5.7.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_planizi
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `availibility_equipment`
--

DROP TABLE IF EXISTS `availibility_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `availibility_equipment` (
  `availibility_equipment_shift_unit` int(11) NOT NULL,
  `availibility_equipment_equipment` int(11) NOT NULL,
  `availibility_equipment_available` tinyint(4) DEFAULT '0',
  `availibility_equipment_assignment` tinyint(4) DEFAULT '0',
  KEY `FK_availibility_equipment_shift_unit_idx` (`availibility_equipment_shift_unit`),
  KEY `FK_availibility_equipment_equipment_idx` (`availibility_equipment_equipment`),
  CONSTRAINT `FK_availibility_equipment_equipment` FOREIGN KEY (`availibility_equipment_equipment`) REFERENCES `equipment` (`equipment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_availibility_equipment_shift_unit` FOREIGN KEY (`availibility_equipment_shift_unit`) REFERENCES `shift_unit` (`shift_unit_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availibility_equipment`
--

LOCK TABLES `availibility_equipment` WRITE;
/*!40000 ALTER TABLE `availibility_equipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `availibility_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `availibility_user`
--

DROP TABLE IF EXISTS `availibility_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `availibility_user` (
  `availibility_user_shift_unit` int(11) NOT NULL,
  `availibility_user_user` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `availibility_user_available` tinyint(4) NOT NULL DEFAULT '0',
  `availibility_user_assignment` tinyint(4) NOT NULL DEFAULT '0',
  KEY `FK_availability_user_shift_unit_idx` (`availibility_user_shift_unit`),
  KEY `FK_availibility_user_user_idx` (`availibility_user_user`),
  CONSTRAINT `FK_availability_user_shift_unit` FOREIGN KEY (`availibility_user_shift_unit`) REFERENCES `shift_unit` (`shift_unit_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_availibility_user_user` FOREIGN KEY (`availibility_user_user`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availibility_user`
--

LOCK TABLES `availibility_user` WRITE;
/*!40000 ALTER TABLE `availibility_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `availibility_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipment` (
  `equipment_id` int(11) NOT NULL,
  `equipment_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `equipment_description` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `equipment_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`equipment_id`),
  KEY `FK_equipment_type` (`equipment_type`),
  CONSTRAINT `FK_equipment_type` FOREIGN KEY (`equipment_type`) REFERENCES `equipment_type` (`equipment_type_label`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment`
--

LOCK TABLES `equipment` WRITE;
/*!40000 ALTER TABLE `equipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment_need`
--

DROP TABLE IF EXISTS `equipment_need`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipment_need` (
  `equipment_need_id` int(11) NOT NULL,
  `equipment_need_equipment` int(11) DEFAULT NULL,
  `equipment_need_number` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`equipment_need_id`),
  KEY `FK_equipment_need_equipment_idx` (`equipment_need_equipment`),
  CONSTRAINT `FK_equipment_need_equipment` FOREIGN KEY (`equipment_need_equipment`) REFERENCES `equipment` (`equipment_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment_need`
--

LOCK TABLES `equipment_need` WRITE;
/*!40000 ALTER TABLE `equipment_need` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipment_need` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment_skill`
--

DROP TABLE IF EXISTS `equipment_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipment_skill` (
  `equipment_skill_equipment` int(11) NOT NULL,
  `equipment_skill_skill` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_equipment_skill_skill_idx` (`equipment_skill_skill`),
  KEY `FK_equipment_skill_equipment_idx` (`equipment_skill_equipment`),
  CONSTRAINT `FK_equipment_skill_equipment` FOREIGN KEY (`equipment_skill_equipment`) REFERENCES `equipment` (`equipment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_equipment_skill_skill` FOREIGN KEY (`equipment_skill_skill`) REFERENCES `skill` (`skill_label`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment_skill`
--

LOCK TABLES `equipment_skill` WRITE;
/*!40000 ALTER TABLE `equipment_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipment_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment_type`
--

DROP TABLE IF EXISTS `equipment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipment_type` (
  `equipment_type_label` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `equipment_type_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `equipment_type_name_fr` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `equipment_type_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`equipment_type_label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment_type`
--

LOCK TABLES `equipment_type` WRITE;
/*!40000 ALTER TABLE `equipment_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `location_label` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `location_longitude` decimal(11,8) DEFAULT NULL,
  `location_latitude` decimal(11,8) DEFAULT NULL,
  `location_address` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location_postcode` varchar(6) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location_city` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rights`
--

DROP TABLE IF EXISTS `rights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rights` (
  `rights_label` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `rights_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rights_name_fr` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rights_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`rights_label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table for store all rights associated to user on the platform';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rights`
--

LOCK TABLES `rights` WRITE;
/*!40000 ALTER TABLE `rights` DISABLE KEYS */;
INSERT INTO `rights` VALUES ('admin',NULL,'Admin','third level, for organizer and people who need advanced access'),('limited',NULL,'Limité','first level, default for all new user'),('standard',NULL,'Standard','second level, for all user after having validated by administrators'),('super_admin',NULL,'Super Admin','last level, for administrator of the platform');
/*!40000 ALTER TABLE `rights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `role_label` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `role_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role_name_fr` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`role_label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table to store all role associated to an user for the event';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('organizer',NULL,'Organisateur','a person who organize the event'),('service_provider',NULL,'Pretastaire','a person who come to bring a service'),('technician',NULL,'Technicien','a person with the technician status'),('visitor',NULL,'Visiteur','a person who has no status'),('volunteer',NULL,'Bénévole','a person who is not paid and want help during the event');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift_set`
--

DROP TABLE IF EXISTS `shift_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift_set` (
  `shift_set_id` int(11) NOT NULL,
  `shift_set_start` datetime NOT NULL,
  `shift_set_end` datetime NOT NULL,
  PRIMARY KEY (`shift_set_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table who store the set of one or several shifts. It is just for indicate start hour and end hour.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_set`
--

LOCK TABLES `shift_set` WRITE;
/*!40000 ALTER TABLE `shift_set` DISABLE KEYS */;
/*!40000 ALTER TABLE `shift_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift_set_subset`
--

DROP TABLE IF EXISTS `shift_set_subset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift_set_subset` (
  `shift_set_subset_set` int(11) NOT NULL,
  `shift_set_subset_subset` int(11) NOT NULL,
  KEY `FK_shift_set_subset_set_idx` (`shift_set_subset_set`),
  KEY `FK_shift_set_subset_subset_idx` (`shift_set_subset_subset`),
  CONSTRAINT `FK_shift_set_subset_set` FOREIGN KEY (`shift_set_subset_set`) REFERENCES `shift_set` (`shift_set_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shift_set_subset_subset` FOREIGN KEY (`shift_set_subset_subset`) REFERENCES `shift_subset` (`shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_set_subset`
--

LOCK TABLES `shift_set_subset` WRITE;
/*!40000 ALTER TABLE `shift_set_subset` DISABLE KEYS */;
/*!40000 ALTER TABLE `shift_set_subset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift_subset`
--

DROP TABLE IF EXISTS `shift_subset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift_subset` (
  `shift_subset_id` int(11) NOT NULL,
  `shift_subset_start` datetime NOT NULL,
  `shift_subset_end` datetime NOT NULL,
  PRIMARY KEY (`shift_subset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table who store a shift, that is to say the set of one or several unit shifts.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_subset`
--

LOCK TABLES `shift_subset` WRITE;
/*!40000 ALTER TABLE `shift_subset` DISABLE KEYS */;
/*!40000 ALTER TABLE `shift_subset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift_subset_unit`
--

DROP TABLE IF EXISTS `shift_subset_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift_subset_unit` (
  `shift_subset_unit_subset` int(11) NOT NULL,
  `shift_subset_unit_unit` int(11) NOT NULL,
  KEY `FK_shift_subset_unit_idx` (`shift_subset_unit_unit`),
  KEY `FK_shift_subset_subset_idx` (`shift_subset_unit_subset`),
  CONSTRAINT `FK_shift_subset_subset` FOREIGN KEY (`shift_subset_unit_subset`) REFERENCES `shift_subset` (`shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_shift_subset_unit` FOREIGN KEY (`shift_subset_unit_unit`) REFERENCES `shift_unit` (`shift_unit_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_subset_unit`
--

LOCK TABLES `shift_subset_unit` WRITE;
/*!40000 ALTER TABLE `shift_subset_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `shift_subset_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift_unit`
--

DROP TABLE IF EXISTS `shift_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift_unit` (
  `shift_unit_id` int(11) NOT NULL,
  `shift_unit_start` datetime NOT NULL,
  `shift_unit_end` datetime NOT NULL,
  `shift_unit_point` int(11) DEFAULT NULL,
  PRIMARY KEY (`shift_unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table that stores one unit shift. You cannot split more a shift. It is laste 15 min. ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift_unit`
--

LOCK TABLES `shift_unit` WRITE;
/*!40000 ALTER TABLE `shift_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `shift_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skill` (
  `skill_label` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `skill_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skill_name_fr` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skill_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`skill_label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table to store all skill that user can have and required by organization';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES ('caces_1',NULL,'Caces 1',''),('caces_10',NULL,'Caces 10',NULL),('caces_2',NULL,'Caces 2',NULL),('caces_3',NULL,'Caces 3',NULL),('caces_4',NULL,'Caces 4',NULL),('caces_5',NULL,'Caces 5',NULL),('caces_6',NULL,'Caces 6',NULL),('caces_7',NULL,'Caces 7',NULL),('caces_8',NULL,'Caces 8',NULL),('caces_9',NULL,'Caces 9',NULL),('driver_licence',NULL,'Permis B','a person who can drive a classic car'),('driver_licence_valid',NULL,'Permis B +3 ans','a person who can drive a classic car and who have obtained the licence for 3 years or more'),('english_bilingual',NULL,'Anglais Bilingue',NULL),('psc1',NULL,'PSC1',NULL);
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `task_id` int(11) NOT NULL,
  `task_label` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `task_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `task_team` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `task_supervisor` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'People to contact and who will be on site.',
  `task_master` varchar(256) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Person who has created that task',
  `task_group` int(11) DEFAULT NULL,
  `task_location` int(11) DEFAULT NULL,
  `task_instruction` int(11) DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  KEY `FK_task_team` (`task_team`),
  KEY `FK_task_user_supervisor` (`task_supervisor`),
  KEY `FK_task_group_idx` (`task_group`),
  KEY `FK_task_location_idx` (`task_location`),
  KEY `FK_task_user_master` (`task_master`),
  KEY `FK_task_instructions_idx` (`task_instruction`),
  CONSTRAINT `FK_task_group` FOREIGN KEY (`task_group`) REFERENCES `task_group` (`task_group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_instructions` FOREIGN KEY (`task_instruction`) REFERENCES `task_instructions` (`task_instruction_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_location` FOREIGN KEY (`task_location`) REFERENCES `location` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_team` FOREIGN KEY (`task_team`) REFERENCES `team` (`team_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_user_master` FOREIGN KEY (`task_master`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_user_supervisor` FOREIGN KEY (`task_supervisor`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table for storing each task to affect to a volunteer or to another person who is working for the event';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_assignment_equipment`
--

DROP TABLE IF EXISTS `task_assignment_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_assignment_equipment` (
  `task_assignment_equipment_task_shift_subset` int(11) NOT NULL,
  `task_assignment_equipment_equipment` int(11) NOT NULL,
  `task_assignment_equipment_need_fulfilled` int(11) DEFAULT NULL,
  KEY `FK_assignment_equipment_equipment_idx` (`task_assignment_equipment_equipment`),
  KEY `FK_assignment_equipment_task_idx` (`task_assignment_equipment_task_shift_subset`),
  KEY `FK_assignment_equipment_need_fulfilled_idx` (`task_assignment_equipment_need_fulfilled`),
  CONSTRAINT `FK_assignment_equipment_equipment` FOREIGN KEY (`task_assignment_equipment_equipment`) REFERENCES `equipment` (`equipment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_assignment_equipment_need_fulfilled` FOREIGN KEY (`task_assignment_equipment_need_fulfilled`) REFERENCES `equipment_need` (`equipment_need_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_assignment_equipment_task` FOREIGN KEY (`task_assignment_equipment_task_shift_subset`) REFERENCES `task_shift_subset` (`task_shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_assignment_equipment`
--

LOCK TABLES `task_assignment_equipment` WRITE;
/*!40000 ALTER TABLE `task_assignment_equipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_assignment_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_assignment_user`
--

DROP TABLE IF EXISTS `task_assignment_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_assignment_user` (
  `task_assignment_task_shift_subset` int(11) NOT NULL,
  `task_assignment_user_user` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `task_assignment_user_need_fulfilled` int(11) DEFAULT NULL,
  KEY `FK_task_assignment_user_idx` (`task_assignment_user_user`),
  KEY `FK_assignement_task_shift_subset_idx` (`task_assignment_task_shift_subset`),
  KEY `FK_assignment_need_fulfilled_idx` (`task_assignment_user_need_fulfilled`),
  CONSTRAINT `FK_assignement_task_shift_subset` FOREIGN KEY (`task_assignment_task_shift_subset`) REFERENCES `task_shift_subset` (`task_shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_assignment_need_fulfilled` FOREIGN KEY (`task_assignment_user_need_fulfilled`) REFERENCES `user_need` (`user_need_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_assignment_user_user` FOREIGN KEY (`task_assignment_user_user`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_assignment_user`
--

LOCK TABLES `task_assignment_user` WRITE;
/*!40000 ALTER TABLE `task_assignment_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_assignment_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_comment`
--

DROP TABLE IF EXISTS `task_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_comment` (
  `task_comment_id` int(11) NOT NULL,
  `task_comment_owner` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `task_comment_content` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `task_comment_date` datetime DEFAULT NULL,
  `task_comment_task` int(11) DEFAULT NULL,
  PRIMARY KEY (`task_comment_id`),
  KEY `FK_task_comment_user` (`task_comment_owner`),
  KEY `FKètask_comment_task_idx` (`task_comment_task`),
  CONSTRAINT `FK_task_comment_user` FOREIGN KEY (`task_comment_owner`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKètask_comment_task` FOREIGN KEY (`task_comment_task`) REFERENCES `task` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_comment`
--

LOCK TABLES `task_comment` WRITE;
/*!40000 ALTER TABLE `task_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_group`
--

DROP TABLE IF EXISTS `task_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_group` (
  `task_group_id` int(11) NOT NULL,
  `task_group_label` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `task_group_description` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `task_group_owner` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`task_group_id`),
  KEY `FK_task_group_user` (`task_group_owner`),
  CONSTRAINT `FK_task_group_user` FOREIGN KEY (`task_group_owner`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_group`
--

LOCK TABLES `task_group` WRITE;
/*!40000 ALTER TABLE `task_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_instructions`
--

DROP TABLE IF EXISTS `task_instructions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_instructions` (
  `task_instruction_id` int(11) NOT NULL,
  `task_instructions_instructions` blob NOT NULL,
  PRIMARY KEY (`task_instruction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_instructions`
--

LOCK TABLES `task_instructions` WRITE;
/*!40000 ALTER TABLE `task_instructions` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_instructions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_need_equipment`
--

DROP TABLE IF EXISTS `task_need_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_need_equipment` (
  `task_need_equipment_task_shift_subset` int(11) NOT NULL,
  `task_need_equipment_equipment_need` int(11) NOT NULL,
  KEY `FK_task_need_equipment_task_shift_subset_idx` (`task_need_equipment_task_shift_subset`),
  KEY `FK_task_need_equipment_equipment_need_idx` (`task_need_equipment_equipment_need`),
  CONSTRAINT `FK_task_need_equipment_equipment_need` FOREIGN KEY (`task_need_equipment_equipment_need`) REFERENCES `equipment_need` (`equipment_need_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_need_equipment_task_shift_subset` FOREIGN KEY (`task_need_equipment_task_shift_subset`) REFERENCES `task_shift_subset` (`task_shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_need_equipment`
--

LOCK TABLES `task_need_equipment` WRITE;
/*!40000 ALTER TABLE `task_need_equipment` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_need_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_need_user`
--

DROP TABLE IF EXISTS `task_need_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_need_user` (
  `task_need_user_task_shift_subset` int(11) NOT NULL,
  `task_need_user_user_need` int(11) NOT NULL,
  KEY `FK_task_need_user_task_shift_subset_idx` (`task_need_user_task_shift_subset`),
  KEY `FK_task_need_user_user_need_idx` (`task_need_user_user_need`),
  CONSTRAINT `FK_task_need_user_task_shift_subset` FOREIGN KEY (`task_need_user_task_shift_subset`) REFERENCES `task_shift_subset` (`task_shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_need_user_user_need` FOREIGN KEY (`task_need_user_user_need`) REFERENCES `user_need` (`user_need_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_need_user`
--

LOCK TABLES `task_need_user` WRITE;
/*!40000 ALTER TABLE `task_need_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_need_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_shift_set`
--

DROP TABLE IF EXISTS `task_shift_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_shift_set` (
  `task_shift_set_task` int(11) NOT NULL,
  `task_shift_set_shift_set` int(11) NOT NULL,
  `task_shift_set_point` int(11) DEFAULT NULL,
  KEY `FK_task_shift_set_task_idx` (`task_shift_set_task`),
  KEY `FK_task_shift_set_shift_set_idx` (`task_shift_set_shift_set`),
  CONSTRAINT `FK_task_shift_set_shift_set` FOREIGN KEY (`task_shift_set_shift_set`) REFERENCES `shift_set` (`shift_set_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_shift_set_task` FOREIGN KEY (`task_shift_set_task`) REFERENCES `task` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_shift_set`
--

LOCK TABLES `task_shift_set` WRITE;
/*!40000 ALTER TABLE `task_shift_set` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_shift_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_shift_subset`
--

DROP TABLE IF EXISTS `task_shift_subset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_shift_subset` (
  `task_shift_subset_id` int(11) NOT NULL,
  `task_shift_subset_task` int(11) NOT NULL,
  `task_shift_subset_shift_subset` int(11) NOT NULL,
  PRIMARY KEY (`task_shift_subset_id`),
  KEY `FK_task_shift_subset_task_idx` (`task_shift_subset_task`),
  KEY `FK_task_shift_subset_shift_subset_idx` (`task_shift_subset_shift_subset`),
  CONSTRAINT `FK_task_shift_subset_shift_subset` FOREIGN KEY (`task_shift_subset_shift_subset`) REFERENCES `shift_subset` (`shift_subset_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_shift_subset_task` FOREIGN KEY (`task_shift_subset_task`) REFERENCES `task` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_shift_subset`
--

LOCK TABLES `task_shift_subset` WRITE;
/*!40000 ALTER TABLE `task_shift_subset` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_shift_subset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team` (
  `team_label` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `team_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `team_name_fr` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `team_description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`team_label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table to store all team of the event';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES ('animations_culture',NULL,'Animations culturelles',NULL),('animations_entertainment',NULL,'Animations de Divertissement',NULL),('animations_sport',NULL,'Animations sportives',NULL),('artist_programming',NULL,'Programmation Concerts',NULL),('communication',NULL,'Communication',NULL),('logistics_bar',NULL,'Logistique Bar',NULL),('logistics_barriers',NULL,'Logistique Barrières',NULL),('logistics_electricity',NULL,'Logistique Electricité, Eau, Bâtiments',NULL),('logistics_home_artist',NULL,'Logistique Accueil Artiste',NULL),('logistics_material',NULL,'Logistique Matériel',NULL),('logistics_scene',NULL,'Logistique des Scènes',NULL),('logistics_security',NULL,'Logistique Sécurité',NULL),('logistics_signage',NULL,'Logistique Signalétique & Décoration',NULL),('logistics_staff',NULL,'Logistique Bénévole',NULL),('logistics_ticketing',NULL,'Logistique Billetterie',NULL),('prevention_sustainable_development',NULL,'Prévention et Développement Durable',NULL),('races',NULL,'Courses',NULL),('sponsoring',NULL,'Sponsoring et Partenariats',NULL),('technics',NULL,'Teckos',NULL),('volonteer',NULL,'Bénévole',NULL);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_mail` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `user_surname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `user_nickname` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_gender` enum('m','f') COLLATE utf8_unicode_ci NOT NULL,
  `user_phone` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `user_birthdate` date NOT NULL,
  `user_description` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_experience` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_incapacity` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_teeshirt_size` enum('S','M','L','XL') COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_trust_point` int(11) DEFAULT NULL,
  `user_involvement_point` int(11) DEFAULT NULL,
  `user_happiness_point` int(11) DEFAULT NULL,
  `user_rights` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'limited',
  `user_role` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'visitor',
  `user_identity_card_file` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_social_security_card_file` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_social_security_card_number` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_cv_file` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_mail`),
  KEY `FK_user_rights_idx` (`user_rights`),
  KEY `FK_user_role_idx` (`user_role`),
  CONSTRAINT `FK_user_rights` FOREIGN KEY (`user_rights`) REFERENCES `rights` (`rights_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_role` FOREIGN KEY (`user_role`) REFERENCES `role` (`role_label`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='table for user information of the platform';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_friend`
--

DROP TABLE IF EXISTS `user_friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_friend` (
  `user_friend_user` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_friend_friend` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_user_friend_user_idx` (`user_friend_user`),
  KEY `FK_user_friend_friend_idx` (`user_friend_friend`),
  CONSTRAINT `FK_user_friend_friend` FOREIGN KEY (`user_friend_friend`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_friend_user` FOREIGN KEY (`user_friend_user`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table for joining people who work with other people';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_friend`
--

LOCK TABLES `user_friend` WRITE;
/*!40000 ALTER TABLE `user_friend` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_need`
--

DROP TABLE IF EXISTS `user_need`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_need` (
  `user_need_id` int(11) NOT NULL,
  `user_need_skill_1` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `user_need_skill_2` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'null',
  `user_need_skill_3` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'null',
  `user_need_skill_4` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'null',
  `user_need_trust_minimum` int(11) DEFAULT '0',
  `user_need_team` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'null',
  `user_need_role` varchar(45) COLLATE utf8_unicode_ci DEFAULT 'null',
  `user_need_number` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_need_id`),
  KEY `FK_task_people_need_skill_1_idx` (`user_need_skill_1`),
  KEY `FK_task_people_need_skill_2_idx` (`user_need_skill_2`),
  KEY `FK_task_people_need_skill_3_idx` (`user_need_skill_3`),
  KEY `FK_task_people_need_skill_4_idx` (`user_need_skill_4`),
  KEY `FK_task_people_need_team_idx` (`user_need_team`),
  KEY `FK_task_people_need_role_idx` (`user_need_role`),
  CONSTRAINT `FK_task_people_need_role` FOREIGN KEY (`user_need_role`) REFERENCES `role` (`role_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_people_need_skill_1` FOREIGN KEY (`user_need_skill_1`) REFERENCES `skill` (`skill_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_people_need_skill_2` FOREIGN KEY (`user_need_skill_2`) REFERENCES `skill` (`skill_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_people_need_skill_3` FOREIGN KEY (`user_need_skill_3`) REFERENCES `skill` (`skill_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_people_need_skill_4` FOREIGN KEY (`user_need_skill_4`) REFERENCES `skill` (`skill_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_task_people_need_team` FOREIGN KEY (`user_need_team`) REFERENCES `team` (`team_label`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_need`
--

LOCK TABLES `user_need` WRITE;
/*!40000 ALTER TABLE `user_need` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_need` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_skill`
--

DROP TABLE IF EXISTS `user_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_skill` (
  `user_skill_user` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `user_skill_skill` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_user_skill_user` (`user_skill_user`),
  KEY `FK_user_skill_skill` (`user_skill_skill`),
  CONSTRAINT `FK_user_skill_skill` FOREIGN KEY (`user_skill_skill`) REFERENCES `skill` (`skill_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_skill_user` FOREIGN KEY (`user_skill_user`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table for joining User and Skill';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_skill`
--

LOCK TABLES `user_skill` WRITE;
/*!40000 ALTER TABLE `user_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_team`
--

DROP TABLE IF EXISTS `user_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_team` (
  `user_team_user` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `user_team_team` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_user_team_user` (`user_team_user`),
  KEY `FK_user_team_team` (`user_team_team`),
  CONSTRAINT `FK_user_team_team` FOREIGN KEY (`user_team_team`) REFERENCES `team` (`team_label`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_team_user` FOREIGN KEY (`user_team_user`) REFERENCES `user` (`user_mail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Table for joining user with one or several teams.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_team`
--

LOCK TABLES `user_team` WRITE;
/*!40000 ALTER TABLE `user_team` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-21 16:56:50
