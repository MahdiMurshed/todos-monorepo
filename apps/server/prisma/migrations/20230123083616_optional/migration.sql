/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `BlogSource` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `BlogSource_title_key` ON `BlogSource`(`title`);
