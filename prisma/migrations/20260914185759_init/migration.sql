/*
  Warnings:

  - You are about to drop the column `provider` on the `purchases` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idNumber]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Made the column `supplier_id` on table `purchases` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_supplier_id_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_user_id_fkey";

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "provider",
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "supplier_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "user_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customers_idNumber_key" ON "customers"("idNumber");

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
