-- CreateTable
CREATE TABLE "CvsFile" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CvsFile_pkey" PRIMARY KEY ("id")
);
