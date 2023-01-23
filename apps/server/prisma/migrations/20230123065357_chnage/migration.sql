/*
  Warnings:

  - Added the required column `tag` to the `BlogSource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BlogSource` ADD COLUMN `tag` VARCHAR(191) NOT NULL;
