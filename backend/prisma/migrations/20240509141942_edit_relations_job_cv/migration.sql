/*
  Warnings:

  - You are about to drop the column `cvId` on the `Job` table. All the data in the column will be lost.
  - Added the required column `jobId` to the `CvsFile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_cvId_fkey";

-- AlterTable
ALTER TABLE "CvsFile" ADD COLUMN     "jobId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "cvId";

-- AddForeignKey
ALTER TABLE "CvsFile" ADD CONSTRAINT "CvsFile_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
