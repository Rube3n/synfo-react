<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VeiwController extends AbstractController
{
    #[Route('/veiw', name: 'app_veiw')]
    public function index(): Response
    {
        return $this->render('veiw/index.html.twig', [
            'controller_name' => 'VeiwController',
        ]);
    }
}
