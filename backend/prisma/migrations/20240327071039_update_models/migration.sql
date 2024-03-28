/*
  Warnings:

  - You are about to drop the column `recruiterId` on the `Recruiter` table. All the data in the column will be lost.
  - Added the required column `password` to the `Recruiter` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Recruiter_recruiterId_key";

-- AlterTable
ALTER TABLE "Recruiter" DROP COLUMN "recruiterId",
ADD COLUMN     "password" TEXT NOT NULL;
