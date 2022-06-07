-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "disctiption" TEXT NOT NULL,
    "completed" BOOLEAN DEFAULT false
);
