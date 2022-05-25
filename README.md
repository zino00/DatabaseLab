# DatabaseLab

## 一、简介

这是 2022 湖南大学 信息安全 数据库系统实验大作业。

## 二、管理员端需求

1. 假登录（没有身份认证模块）

2. 校建管理

   1. 学生管理

      > 姓名、学号、身份证号、宿舍、家庭地址、电话、出生日期、性别、年级、专业、主修院系、辅修院系、学位等级、已修学分。

      增加新学生、删除学生、修改学生信息、显示所有学生条目。

   2. 班级管理

      > 班级编号、 年级名称、所属专业

      查看班级所有学生···

   3. 专业管理

      > 专业名称，所属院系、学位等级、毕业学分。

      查看专业班级···

   4. 院系管理

      > 院系名称、代码、办公地点、电话。

      增加新院系、删除院系、修改院系信息、显示所有院系、查看指定院系专业

3. 教师管理

   1. 教师授课管理

      > 教师ID、（教师名称）、课程ID、（课程名称）

      增加新授课，删除授课条目、查看全部授课信息

   2. 录入教师管理

      > 教师编号、教师姓名、所属院系

      添加新教师、删除教师、修改教师信息、显示全部教师信息

4. 课程管理

   1. 课程信息管理

      > 课程编号、课程名称、课程说明、学时、学分、学位等级、开课院系

      增加新课程、删除课程、修改课程信息、查看全部课程信息

   2. 选修管理

      > 学号、（姓名）、课程ID（课程名）、成绩

      添加新条目、删除条目、修改条目、显示所有条目


## 三、技术文档

- [管理员后端接口](docs/管理员后端接口.md)