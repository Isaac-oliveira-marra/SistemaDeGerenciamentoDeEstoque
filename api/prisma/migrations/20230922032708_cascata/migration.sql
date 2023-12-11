-- DropForeignKey
ALTER TABLE `ativo` DROP FOREIGN KEY `Ativo_classeId_fkey`;

-- DropForeignKey
ALTER TABLE `ativo` DROP FOREIGN KEY `Ativo_estoqueId_fkey`;

-- DropForeignKey
ALTER TABLE `ativo` DROP FOREIGN KEY `Ativo_proprietarioId_fkey`;

-- DropForeignKey
ALTER TABLE `manutencao` DROP FOREIGN KEY `Manutencao_ativoId_fkey`;

-- DropForeignKey
ALTER TABLE `manutencao` DROP FOREIGN KEY `Manutencao_prestadorId_fkey`;

-- DropForeignKey
ALTER TABLE `prestador` DROP FOREIGN KEY `Prestador_proprietarioId_fkey`;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_prestadorId_fkey` FOREIGN KEY (`prestadorId`) REFERENCES `Prestador`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_ativoId_fkey` FOREIGN KEY (`ativoId`) REFERENCES `Ativo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_estoqueId_fkey` FOREIGN KEY (`estoqueId`) REFERENCES `Estoque`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_classeId_fkey` FOREIGN KEY (`classeId`) REFERENCES `Classe`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestador` ADD CONSTRAINT `Prestador_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
