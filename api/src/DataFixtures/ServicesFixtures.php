<?php

namespace App\ServicesFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Service;



class ServicesFixtures extends Fixture

{
    public function load(ObjectManager $manager): void
    {
        $file_to_read = fopen('services.csv', 'r');
        if ($file_to_read !== FALSE) {
            while (($data = fgetcsv($file_to_read, 0, ',')) !== FALSE) {
                $service = new Service();
                $service->setTitle($data[1])
                    ->setTitle($data[2])
                    ->setFamily($data[3])
                    ->setAct($data[4])
                    ->setCategory($data[5])
                    ->setTime($data[6])
                    ->setIsActive($data[7])
                    ->setDescription($data[8])
                    ->setOpas($data[9]);
                $manager->persist($service);
            }
            fclose($file_to_read);
            $manager->flush();
        }
    }
}
