/*
  Warnings:

  - You are about to drop the column `summmary` on the `Analysis` table. All the data in the column will be lost.
  - Added the required column `subject` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analysis" DROP COLUMN "summmary",
ADD COLUMN     "subject" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL;
