/*
  Warnings:

  - Added the required column `status` to the `empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `empresas` ADD COLUMN `status` VARCHAR(191) NOT NULL;
