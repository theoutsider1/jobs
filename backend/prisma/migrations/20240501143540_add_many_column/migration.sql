/*
  Warnings:

  - The `deadline` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `studiesRequirement` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Recruiter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "fonction" TEXT,
ADD COLUMN     "studiesRequirement" TEXT NOT NULL,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ,
DROP COLUMN "deadline",
ADD COLUMN     "deadline" TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "Recruiter" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
