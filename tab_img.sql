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

 Date: 08/06/2021 19:19:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_img
-- ----------------------------
DROP TABLE IF EXISTS `tab_img`;
CREATE TABLE `tab_img`  (
  `id` int NOT NULL,
  `title` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `img_way` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片路径',
  `tables` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章',
  `title_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(8, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_img
-- ----------------------------
INSERT INTO `tab_img` VALUES (1, 'North', '/images/tm-img-07.jpg', 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...', 'One North', 110.00);
INSERT INTO `tab_img` VALUES (2, 'Two North', '/images/tm-img-06.jpg', 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...', 'Two North', 120.00);
INSERT INTO `tab_img` VALUES (3, 'Sed fermentum justo', '/images/tm-img-05.jpg', 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...', 'Three North', 130.00);
INSERT INTO `tab_img` VALUES (4, 'Maecenas ultricies neque', '/images/tm-img-04.jpg', 'Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...', 'Four North', 140.00);

SET FOREIGN_KEY_CHECKS = 1;
