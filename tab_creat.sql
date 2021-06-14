/*
 Navicat Premium Data Transfer

 Source Server         : we
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : yyf

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 08/06/2021 19:18:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_creat
-- ----------------------------
DROP TABLE IF EXISTS `tab_creat`;
CREATE TABLE `tab_creat`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `possword` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_creat
-- ----------------------------
INSERT INTO `tab_creat` VALUES (1, '青峰', 'b59c67bf196a4758191e42f76670ceba', '1');
INSERT INTO `tab_creat` VALUES (15, '徐霞客', 'b59c67bf196a4758191e42f76670ceba', '1');
INSERT INTO `tab_creat` VALUES (19, '布鲁', 'b59c67bf196a4758191e42f76670ceba', '1');
INSERT INTO `tab_creat` VALUES (20, 'gerzi', 'b59c67bf196a4758191e42f76670ceba', '0');
INSERT INTO `tab_creat` VALUES (32, '布鲁3', '5fad3239dfa04dbea7ae07190e9b8fef', '1');

SET FOREIGN_KEY_CHECKS = 1;
