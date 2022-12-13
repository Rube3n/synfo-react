<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/products', name: 'app_product')]
    public function index(): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
        ]);
    }
    #[Route('/products/create', name: 'app_product_create')]
        public function create(): Response
        {
            return $this->render('product/index.html.twig', [
                'controller_name' => 'ProductController',
            ]);
        }
        #[Route('/view', name: 'app_update')]
        public function show(): Response
        {
            return $this->render('update/index.html.twig', [
                'controller_name' => 'UpdateController',
            ]);
        }
        #[Route('/update', name: 'app_update')]
    public function edit(): Response
    {
        return $this->render('update/index.html.twig', [
            'controller_name' => 'UpdateController',
        ]);
    }
}