<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220830080817 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE assurance_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE comment_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE contact_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE doctor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE media_object_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE migration_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE mission_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE partner_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE patient_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE prescription_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE service_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE assurance (id INT NOT NULL, is_active BOOLEAN NOT NULL, company VARCHAR(255) NOT NULL, organization VARCHAR(255) DEFAULT NULL, type VARCHAR(10) NOT NULL, address1 VARCHAR(255) DEFAULT NULL, address2 VARCHAR(255) DEFAULT NULL, npa VARCHAR(10) NOT NULL, city VARCHAR(255) NOT NULL, phone VARCHAR(15) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, www VARCHAR(255) DEFAULT NULL, gln VARCHAR(13) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE comment (id INT NOT NULL, user_id INT NOT NULL, doctor_id INT DEFAULT NULL, assurance_id INT DEFAULT NULL, content VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_9474526CA76ED395 ON comment (user_id)');
        $this->addSql('CREATE INDEX IDX_9474526C87F4FB17 ON comment (doctor_id)');
        $this->addSql('CREATE INDEX IDX_9474526CB288C3E3 ON comment (assurance_id)');
        $this->addSql('CREATE TABLE contact (id INT NOT NULL, patient_id INT NOT NULL, fullname VARCHAR(255) NOT NULL, relation VARCHAR(255) NOT NULL, phone VARCHAR(255) DEFAULT NULL, mobile VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_4C62E6386B899279 ON contact (patient_id)');
        $this->addSql('CREATE TABLE doctor (id INT NOT NULL, is_active BOOLEAN NOT NULL, category VARCHAR(255) NOT NULL, fullname VARCHAR(255) NOT NULL, organization VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, fax VARCHAR(255) DEFAULT NULL, mobile VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, npa VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, canton VARCHAR(255) DEFAULT NULL, address1 VARCHAR(255) DEFAULT NULL, address2 VARCHAR(255) DEFAULT NULL, gln VARCHAR(255) DEFAULT NULL, rcc VARCHAR(255) DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE media_object (id INT NOT NULL, mission_id INT DEFAULT NULL, user_id INT NOT NULL, file_path VARCHAR(255) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, status VARCHAR(255) DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, comment VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_14D43132BE6CAE90 ON media_object (mission_id)');
        $this->addSql('CREATE INDEX IDX_14D43132A76ED395 ON media_object (user_id)');
        $this->addSql('CREATE TABLE migration (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE mission (id INT NOT NULL, patient_id INT NOT NULL, doctor_id INT DEFAULT NULL, assurance_id INT DEFAULT NULL, user_id INT NOT NULL, status VARCHAR(255) NOT NULL, description VARCHAR(2047) DEFAULT NULL, begin_at DATE DEFAULT NULL, end_at DATE DEFAULT NULL, coworkers JSON DEFAULT NULL, coworkers_detailed JSON DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_9067F23C6B899279 ON mission (patient_id)');
        $this->addSql('CREATE INDEX IDX_9067F23C87F4FB17 ON mission (doctor_id)');
        $this->addSql('CREATE INDEX IDX_9067F23CB288C3E3 ON mission (assurance_id)');
        $this->addSql('CREATE INDEX IDX_9067F23CA76ED395 ON mission (user_id)');
        $this->addSql('CREATE TABLE partner (id INT NOT NULL, user_id INT NOT NULL, partner_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_312B3E16A76ED395 ON partner (user_id)');
        $this->addSql('CREATE INDEX IDX_312B3E169393F8FE ON partner (partner_id)');
        $this->addSql('CREATE TABLE patient (id INT NOT NULL, user_id INT NOT NULL, doctor_id INT DEFAULT NULL, assurance_id INT DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, status VARCHAR(255) DEFAULT NULL, gender VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, birthdate DATE DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, mobile VARCHAR(255) DEFAULT NULL, canton VARCHAR(255) DEFAULT NULL, npa VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, address1 VARCHAR(255) DEFAULT NULL, address2 VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, avs_number VARCHAR(255) DEFAULT NULL, assurance_number VARCHAR(255) DEFAULT NULL, further_infos VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1ADAD7EBA76ED395 ON patient (user_id)');
        $this->addSql('CREATE INDEX IDX_1ADAD7EB87F4FB17 ON patient (doctor_id)');
        $this->addSql('CREATE INDEX IDX_1ADAD7EBB288C3E3 ON patient (assurance_id)');
        $this->addSql('CREATE TABLE prescription (id INT NOT NULL, user_id INT NOT NULL, mission_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, content JSON DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1FBFB8D9A76ED395 ON prescription (user_id)');
        $this->addSql('CREATE INDEX IDX_1FBFB8D9BE6CAE90 ON prescription (mission_id)');
        $this->addSql('CREATE TABLE service (id INT NOT NULL, title VARCHAR(255) NOT NULL, family VARCHAR(255) NOT NULL, act INT NOT NULL, category VARCHAR(255) NOT NULL, time INT NOT NULL, is_active BOOLEAN NOT NULL, description VARCHAR(1000) DEFAULT NULL, opas VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, avatar_id INT DEFAULT NULL, signature_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, is_active BOOLEAN NOT NULL, organization VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, fax VARCHAR(255) DEFAULT NULL, mobile VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, secure_key VARCHAR(255) DEFAULT NULL, is_optin BOOLEAN NOT NULL, rcc VARCHAR(255) DEFAULT NULL, gln VARCHAR(255) DEFAULT NULL, iban VARCHAR(255) DEFAULT NULL, address1 VARCHAR(255) DEFAULT NULL, address2 VARCHAR(255) DEFAULT NULL, bic VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, npa VARCHAR(255) DEFAULT NULL, is_approved BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D6493C7323E0 ON "user" (mobile)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D64986383B10 ON "user" (avatar_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649ED61183A ON "user" (signature_id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CB288C3E3 FOREIGN KEY (assurance_id) REFERENCES assurance (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6386B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE media_object ADD CONSTRAINT FK_14D43132BE6CAE90 FOREIGN KEY (mission_id) REFERENCES mission (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE media_object ADD CONSTRAINT FK_14D43132A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mission ADD CONSTRAINT FK_9067F23C6B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mission ADD CONSTRAINT FK_9067F23C87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mission ADD CONSTRAINT FK_9067F23CB288C3E3 FOREIGN KEY (assurance_id) REFERENCES assurance (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE mission ADD CONSTRAINT FK_9067F23CA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE partner ADD CONSTRAINT FK_312B3E16A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE partner ADD CONSTRAINT FK_312B3E169393F8FE FOREIGN KEY (partner_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE patient ADD CONSTRAINT FK_1ADAD7EBA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE patient ADD CONSTRAINT FK_1ADAD7EB87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE patient ADD CONSTRAINT FK_1ADAD7EBB288C3E3 FOREIGN KEY (assurance_id) REFERENCES assurance (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prescription ADD CONSTRAINT FK_1FBFB8D9A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prescription ADD CONSTRAINT FK_1FBFB8D9BE6CAE90 FOREIGN KEY (mission_id) REFERENCES mission (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT FK_8D93D64986383B10 FOREIGN KEY (avatar_id) REFERENCES media_object (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT FK_8D93D649ED61183A FOREIGN KEY (signature_id) REFERENCES media_object (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE assurance_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE comment_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE contact_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE doctor_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE media_object_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE migration_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE mission_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE partner_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE patient_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE prescription_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE service_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526CA76ED395');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526C87F4FB17');
        $this->addSql('ALTER TABLE comment DROP CONSTRAINT FK_9474526CB288C3E3');
        $this->addSql('ALTER TABLE contact DROP CONSTRAINT FK_4C62E6386B899279');
        $this->addSql('ALTER TABLE media_object DROP CONSTRAINT FK_14D43132BE6CAE90');
        $this->addSql('ALTER TABLE media_object DROP CONSTRAINT FK_14D43132A76ED395');
        $this->addSql('ALTER TABLE mission DROP CONSTRAINT FK_9067F23C6B899279');
        $this->addSql('ALTER TABLE mission DROP CONSTRAINT FK_9067F23C87F4FB17');
        $this->addSql('ALTER TABLE mission DROP CONSTRAINT FK_9067F23CB288C3E3');
        $this->addSql('ALTER TABLE mission DROP CONSTRAINT FK_9067F23CA76ED395');
        $this->addSql('ALTER TABLE partner DROP CONSTRAINT FK_312B3E16A76ED395');
        $this->addSql('ALTER TABLE partner DROP CONSTRAINT FK_312B3E169393F8FE');
        $this->addSql('ALTER TABLE patient DROP CONSTRAINT FK_1ADAD7EBA76ED395');
        $this->addSql('ALTER TABLE patient DROP CONSTRAINT FK_1ADAD7EB87F4FB17');
        $this->addSql('ALTER TABLE patient DROP CONSTRAINT FK_1ADAD7EBB288C3E3');
        $this->addSql('ALTER TABLE prescription DROP CONSTRAINT FK_1FBFB8D9A76ED395');
        $this->addSql('ALTER TABLE prescription DROP CONSTRAINT FK_1FBFB8D9BE6CAE90');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT FK_8D93D64986383B10');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT FK_8D93D649ED61183A');
        $this->addSql('DROP TABLE assurance');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE doctor');
        $this->addSql('DROP TABLE media_object');
        $this->addSql('DROP TABLE migration');
        $this->addSql('DROP TABLE mission');
        $this->addSql('DROP TABLE partner');
        $this->addSql('DROP TABLE patient');
        $this->addSql('DROP TABLE prescription');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE "user"');
    }
}
