/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `Recruiter` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `phone_number` on the `Recruiter` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Recruiter" DROP COLUMN "phone_number",
ADD COLUMN     "phone_number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_phone_number_key" ON "Recruiter"("phone_number");
