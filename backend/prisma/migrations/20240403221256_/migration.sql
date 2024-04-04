-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "appliedCandidateId" SET DEFAULT 0;
