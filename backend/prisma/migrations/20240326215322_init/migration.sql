-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "contractType" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "domaine" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "missions" TEXT NOT NULL,
    "profil" TEXT NOT NULL,
    "advantages" TEXT[],
    "appliedCandidateId" INTEGER NOT NULL,
    "publishedById" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recruiter" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "phone_number" VARCHAR(10) NOT NULL,
    "recruiterId" INTEGER NOT NULL,

    CONSTRAINT "Recruiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "phone_number" VARCHAR(10) NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_mail_key" ON "Recruiter"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_recruiterId_key" ON "Recruiter"("recruiterId");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_mail_key" ON "Candidate"("mail");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_appliedCandidateId_fkey" FOREIGN KEY ("appliedCandidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_publishedById_fkey" FOREIGN KEY ("publishedById") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
