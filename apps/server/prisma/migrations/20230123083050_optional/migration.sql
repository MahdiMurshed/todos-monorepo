/*
  Warnings:

  - You are about to drop the column `createdAt` on the `BlogSource` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `BlogSource` table. All the data in the column will be lost.
  - Added the required column `date` to the `BlogSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `BlogSource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BlogSource` DROP COLUMN `createdAt`,
    DROP COLUMN `url`,
    ADD COLUMN `date` VARCHAR(191) NOT NULL,
    ADD COLUMN `link` VARCHAR(191) NOT NULL;
