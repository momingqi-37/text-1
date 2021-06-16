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

 Date: 16/06/2021 22:49:08
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
  `phonenum` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mail` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_creat
-- ----------------------------
INSERT INTO `tab_creat` VALUES (19, '布鲁', 'b59c67bf196a4758191e42f76670ceba', '1', '13211323122', '1489128@qq.com');
INSERT INTO `tab_creat` VALUES (20, 'gerzi', 'b59c67bf196a4758191e42f76670ceba', '0', '12321123213', '1498218@qq.com');
INSERT INTO `tab_creat` VALUES (32, '布鲁3', '5fad3239dfa04dbea7ae07190e9b8fef', '1', '12324424244', '1312410@qq.com');
INSERT INTO `tab_creat` VALUES (34, '用户名', 'b59c67bf196a4758191e42f76670ceba', '1', '24124124244', '4104012490@qq.com');
INSERT INTO `tab_creat` VALUES (35, '海科', 'b59c67bf196a4758191e42f76670ceba', '0', '12442141241', '194012@qq.com');
INSERT INTO `tab_creat` VALUES (36, '张三', 'b59c67bf196a4758191e42f76670ceba', '1', '64394959939', '40308532@qq.com');
INSERT INTO `tab_creat` VALUES (39, '徐霞客1', 'b59c67bf196a4758191e42f76670ceba', '1', '18170552026', '1271494881@qq.com');

SET FOREIGN_KEY_CHECKS = 1;
