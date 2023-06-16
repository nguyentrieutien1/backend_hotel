import {MigrationInterface, QueryRunner} from "typeorm";

export class createTable1685073009781 implements MigrationInterface {
    name = 'createTable1685073009781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurant\` (\`id\` int NOT NULL AUTO_INCREMENT, \`restaurant_name\` varchar(255) NOT NULL, \`restaurant_description\` varchar(255) NOT NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`treatment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`treatment_name\` varchar(255) NOT NULL, \`treatment_description\` varchar(255) NOT NULL, \`treatment_price\` int NOT NULL, \`spaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`spa\` (\`id\` int NOT NULL AUTO_INCREMENT, \`spa_name\` varchar(255) NOT NULL, \`spa_description\` varchar(255) NOT NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`workout\` (\`id\` int NOT NULL AUTO_INCREMENT, \`workout_name\` varchar(255) NOT NULL, \`workout_description\` varchar(255) NOT NULL, \`workout_price\` int NOT NULL, \`gymId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym\` (\`id\` int NOT NULL AUTO_INCREMENT, \`gym_name\` varchar(255) NOT NULL, \`gym_description\` varchar(255) NOT NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`seft_care\` (\`id\` int NOT NULL AUTO_INCREMENT, \`seftcare_name\` varchar(255) NOT NULL, \`seftcare_description\` varchar(255) NOT NULL, \`seftcare_price\` int NOT NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hotel\` (\`id\` int NOT NULL AUTO_INCREMENT, \`hotel_name\` varchar(255) NOT NULL, \`hotel_email\` varchar(255) NOT NULL, \`hotel_address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recommend\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(255) NOT NULL, \`spaId\` int NULL, \`restaurantId\` int NULL, \`gymId\` int NULL, \`bodyRecoveryId\` int NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recovery\` (\`id\` int NOT NULL AUTO_INCREMENT, \`recovery_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`body_recovery\` (\`id\` int NOT NULL AUTO_INCREMENT, \`body_recovery_name\` varchar(255) NOT NULL, \`body_recovery_description\` varchar(255) NOT NULL, \`recoveryId\` int NULL, UNIQUE INDEX \`REL_c44e69b32a905592d73db4c533\` (\`recoveryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`account\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`sex\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`roleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image_url\` varchar(255) NOT NULL, \`hotelId\` int NULL, \`spaId\` int NULL, \`treatmentId\` int NULL, \`restaurantId\` int NULL, \`dishId\` int NULL, \`gymId\` int NULL, \`workoutId\` int NULL, \`bodyRecoveryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dish\` (\`id\` int NOT NULL AUTO_INCREMENT, \`dishe_name\` varchar(255) NOT NULL, \`dishe_description\` varchar(255) NOT NULL, \`dishe_price\` int NOT NULL, \`restaurantId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`feedback\` (\`id\` int NOT NULL AUTO_INCREMENT, \`feedback\` varchar(255) NOT NULL, \`rate\` int NOT NULL, \`accountId\` int NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`qrcode\` (\`id\` int NOT NULL AUTO_INCREMENT, \`qr_link\` text NOT NULL, \`hotelId\` int NULL, UNIQUE INDEX \`REL_b94610e1c57e1b49a9753272f4\` (\`hotelId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quiz\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quiz\` json NOT NULL, \`hotelId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`time\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`hotelId\` int NULL, \`treatmentId\` int NULL, \`dishId\` int NULL, \`workoutId\` int NULL, \`accountId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`video\` (\`id\` int NOT NULL AUTO_INCREMENT, \`video_url\` varchar(255) NOT NULL, \`bodyRecoveryId\` int NULL, UNIQUE INDEX \`REL_cc21f2512092fe2305a84d2f98\` (\`bodyRecoveryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD CONSTRAINT \`FK_ae8702c59b842d2a596fc07591f\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`treatment\` ADD CONSTRAINT \`FK_da75d9b6a87a95e539f4aa98786\` FOREIGN KEY (\`spaId\`) REFERENCES \`spa\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`spa\` ADD CONSTRAINT \`FK_218c86e789cf957ba51af2dbfbb\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`workout\` ADD CONSTRAINT \`FK_ea12fe4aba1f0e9db86c86adae6\` FOREIGN KEY (\`gymId\`) REFERENCES \`gym\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`gym\` ADD CONSTRAINT \`FK_9d2894bdc0d2f9fd0afca7e069d\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`seft_care\` ADD CONSTRAINT \`FK_570d989b7d75b459b95d8d67221\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recommend\` ADD CONSTRAINT \`FK_f50fce4ef63a82671fc9500e7b0\` FOREIGN KEY (\`spaId\`) REFERENCES \`spa\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recommend\` ADD CONSTRAINT \`FK_fd655cd50add8037e0c7084bb98\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recommend\` ADD CONSTRAINT \`FK_c29c2d5bac104ad890670e0babc\` FOREIGN KEY (\`gymId\`) REFERENCES \`gym\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recommend\` ADD CONSTRAINT \`FK_40e75431e44176bd630e533d6f5\` FOREIGN KEY (\`bodyRecoveryId\`) REFERENCES \`body_recovery\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recommend\` ADD CONSTRAINT \`FK_c9d4bcc5b5a1f5e05100ea2d4df\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`body_recovery\` ADD CONSTRAINT \`FK_c44e69b32a905592d73db4c5339\` FOREIGN KEY (\`recoveryId\`) REFERENCES \`recovery\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`account\` ADD CONSTRAINT \`FK_77bf26eef8865441fb9bd53a364\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_2420fe1ea864ea120915bf8b6c7\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_2e48cd56dd579c67323eee2fa63\` FOREIGN KEY (\`spaId\`) REFERENCES \`spa\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_25161948f47cc6a6bd4b7b7b6dd\` FOREIGN KEY (\`treatmentId\`) REFERENCES \`treatment\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_2c72d96b924267a86fbc5f78cce\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_957641b298c67cc692d1f69884a\` FOREIGN KEY (\`dishId\`) REFERENCES \`dish\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_d2a15fa7c1c28d5a5b584c54ccf\` FOREIGN KEY (\`gymId\`) REFERENCES \`gym\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_509d0e9a21d56a7ecae5cf5fc35\` FOREIGN KEY (\`workoutId\`) REFERENCES \`workout\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_a9a51908b81589d0151c6380221\` FOREIGN KEY (\`bodyRecoveryId\`) REFERENCES \`body_recovery\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`dish\` ADD CONSTRAINT \`FK_3bf1369e81b12358ba268f7f689\` FOREIGN KEY (\`restaurantId\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD CONSTRAINT \`FK_41ba949b387b1817e4e8f41dc53\` FOREIGN KEY (\`accountId\`) REFERENCES \`account\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`feedback\` ADD CONSTRAINT \`FK_41daf4c505115f4fd6355f51a6b\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`qrcode\` ADD CONSTRAINT \`FK_b94610e1c57e1b49a9753272f4d\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`quiz\` ADD CONSTRAINT \`FK_7285e4b7525df63f931fe8d22c8\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9a7d7b198f413b24c3d0a850e98\` FOREIGN KEY (\`hotelId\`) REFERENCES \`hotel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_c0cd5ccfc8f87f01fda5f60d425\` FOREIGN KEY (\`treatmentId\`) REFERENCES \`spa\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_977a720b2e5040835dfa5a12284\` FOREIGN KEY (\`dishId\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_efca872c25132553f0326c62630\` FOREIGN KEY (\`workoutId\`) REFERENCES \`gym\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_8cb9cecbc8b09bf60c71f7a9680\` FOREIGN KEY (\`accountId\`) REFERENCES \`account\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_cc21f2512092fe2305a84d2f98d\` FOREIGN KEY (\`bodyRecoveryId\`) REFERENCES \`body_recovery\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_cc21f2512092fe2305a84d2f98d\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_8cb9cecbc8b09bf60c71f7a9680\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_efca872c25132553f0326c62630\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_977a720b2e5040835dfa5a12284\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_c0cd5ccfc8f87f01fda5f60d425\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9a7d7b198f413b24c3d0a850e98\``);
        await queryRunner.query(`ALTER TABLE \`quiz\` DROP FOREIGN KEY \`FK_7285e4b7525df63f931fe8d22c8\``);
        await queryRunner.query(`ALTER TABLE \`qrcode\` DROP FOREIGN KEY \`FK_b94610e1c57e1b49a9753272f4d\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_41daf4c505115f4fd6355f51a6b\``);
        await queryRunner.query(`ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_41ba949b387b1817e4e8f41dc53\``);
        await queryRunner.query(`ALTER TABLE \`dish\` DROP FOREIGN KEY \`FK_3bf1369e81b12358ba268f7f689\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_a9a51908b81589d0151c6380221\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_509d0e9a21d56a7ecae5cf5fc35\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_d2a15fa7c1c28d5a5b584c54ccf\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_957641b298c67cc692d1f69884a\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_2c72d96b924267a86fbc5f78cce\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_25161948f47cc6a6bd4b7b7b6dd\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_2e48cd56dd579c67323eee2fa63\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_2420fe1ea864ea120915bf8b6c7\``);
        await queryRunner.query(`ALTER TABLE \`account\` DROP FOREIGN KEY \`FK_77bf26eef8865441fb9bd53a364\``);
        await queryRunner.query(`ALTER TABLE \`body_recovery\` DROP FOREIGN KEY \`FK_c44e69b32a905592d73db4c5339\``);
        await queryRunner.query(`ALTER TABLE \`recommend\` DROP FOREIGN KEY \`FK_c9d4bcc5b5a1f5e05100ea2d4df\``);
        await queryRunner.query(`ALTER TABLE \`recommend\` DROP FOREIGN KEY \`FK_40e75431e44176bd630e533d6f5\``);
        await queryRunner.query(`ALTER TABLE \`recommend\` DROP FOREIGN KEY \`FK_c29c2d5bac104ad890670e0babc\``);
        await queryRunner.query(`ALTER TABLE \`recommend\` DROP FOREIGN KEY \`FK_fd655cd50add8037e0c7084bb98\``);
        await queryRunner.query(`ALTER TABLE \`recommend\` DROP FOREIGN KEY \`FK_f50fce4ef63a82671fc9500e7b0\``);
        await queryRunner.query(`ALTER TABLE \`seft_care\` DROP FOREIGN KEY \`FK_570d989b7d75b459b95d8d67221\``);
        await queryRunner.query(`ALTER TABLE \`gym\` DROP FOREIGN KEY \`FK_9d2894bdc0d2f9fd0afca7e069d\``);
        await queryRunner.query(`ALTER TABLE \`workout\` DROP FOREIGN KEY \`FK_ea12fe4aba1f0e9db86c86adae6\``);
        await queryRunner.query(`ALTER TABLE \`spa\` DROP FOREIGN KEY \`FK_218c86e789cf957ba51af2dbfbb\``);
        await queryRunner.query(`ALTER TABLE \`treatment\` DROP FOREIGN KEY \`FK_da75d9b6a87a95e539f4aa98786\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP FOREIGN KEY \`FK_ae8702c59b842d2a596fc07591f\``);
        await queryRunner.query(`DROP INDEX \`REL_cc21f2512092fe2305a84d2f98\` ON \`video\``);
        await queryRunner.query(`DROP TABLE \`video\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`quiz\``);
        await queryRunner.query(`DROP INDEX \`REL_b94610e1c57e1b49a9753272f4\` ON \`qrcode\``);
        await queryRunner.query(`DROP TABLE \`qrcode\``);
        await queryRunner.query(`DROP TABLE \`feedback\``);
        await queryRunner.query(`DROP TABLE \`dish\``);
        await queryRunner.query(`DROP TABLE \`image\``);
        await queryRunner.query(`DROP TABLE \`account\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`REL_c44e69b32a905592d73db4c533\` ON \`body_recovery\``);
        await queryRunner.query(`DROP TABLE \`body_recovery\``);
        await queryRunner.query(`DROP TABLE \`recovery\``);
        await queryRunner.query(`DROP TABLE \`recommend\``);
        await queryRunner.query(`DROP TABLE \`hotel\``);
        await queryRunner.query(`DROP TABLE \`seft_care\``);
        await queryRunner.query(`DROP TABLE \`gym\``);
        await queryRunner.query(`DROP TABLE \`workout\``);
        await queryRunner.query(`DROP TABLE \`spa\``);
        await queryRunner.query(`DROP TABLE \`treatment\``);
        await queryRunner.query(`DROP TABLE \`restaurant\``);
    }

}
