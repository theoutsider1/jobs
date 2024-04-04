-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_appliedCandidateId_fkey";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "appliedCandidateId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_appliedCandidateId_fkey" FOREIGN KEY ("appliedCandidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
