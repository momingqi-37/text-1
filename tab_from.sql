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

 Date: 15/06/2021 08:58:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_from
-- ----------------------------
DROP TABLE IF EXISTS `tab_from`;
CREATE TABLE `tab_from`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地点',
  `data_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '出发时间',
  `data_out` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '回来时间',
  `rooms` int NULL DEFAULT NULL COMMENT '所定房间数量',
  `man` int NULL DEFAULT NULL COMMENT '大人数',
  `kid` int NULL DEFAULT NULL COMMENT '小孩',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_from
-- ----------------------------
INSERT INTO `tab_from` VALUES (11, 'post', 'Tue Jun 08 2021', 'fri Jun 11 2021', 1, 1, 0, '张三');
INSERT INTO `tab_from` VALUES (12, 'Europe', 'Tue Jun 08 2021', 'Fri Jun 11 2021', 1, 1, 0, '徐霞客');

SET FOREIGN_KEY_CHECKS = 1;
