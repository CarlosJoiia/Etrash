/*
  Warnings:

  - You are about to drop the `coperativa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `coperativa`;

-- CreateTable
CREATE TABLE `cooperativa` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `cnpj` DOUBLE NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cooperativa_contact_key`(`contact`),
    UNIQUE INDEX `cooperativa_cnpj_key`(`cnpj`),
    UNIQUE INDEX `cooperativa_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
