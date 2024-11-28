interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    sizes: string [];
    slug: string;
    tags: string[];
    title: string;
    gender: 'men'|'women'|'kid'|'unisex'
}




interface SeedData {
    products: SeedProduct[];
}



export const initialData: SeedData = {
    products: [
        {
            description: "Comedero para perros de acero inoxidable, resistente y fácil de limpiar.",
            images: [
                'comedero_acero_1.jpg',
                'comedero_acero_2.jpg',
            ],
            stock: 100,
            price: 12.5,
            sizes: ['pequeño', 'mediano', 'grande'],
            slug: "comedero_acero_inoxidable",
            tags: ['comedero', 'perro'],
            title: "Comedero de Acero Inoxidable",
            gender: 'unisex'
        },
        {
            description: "Juguete de goma duradera, ideal para cachorros con mucha energía.",
            images: [
                'juguete_mordedor_1.jpg',
                'juguete_mordedor_2.jpg',
            ],
            stock: 150,
            price: 8.99,
            sizes: ['único'],
            slug: "juguete_mordedor",
            tags: ['juguete', 'perro', 'cachorro'],
            title: "Juguete Mordedor para Cachorros",
            gender: 'unisex'
        },
        {
            description: "Arena para gatos biodegradable y libre de químicos, cuidando el medio ambiente.",
            images: [
                'arena_gato_1.jpg',
                'arena_gato_2.jpg',
            ],
            stock: 250,
            price: 20.0,
            sizes: ['10 kg', '20 kg'],
            slug: "arena_gato_ecologica",
            tags: ['arena', 'gato', 'ecologico'],
            title: "Arena Ecológica para Gatos",
            gender: 'unisex'
        },
        {
            description: "Collar reflectante para perros, perfecto para paseos nocturnos.",
            images: [
                'collar_reflectante_1.jpg',
                'collar_reflectante_2.jpg',
            ],
            stock: 80,
            price: 15.0,
            sizes: ['pequeño', 'mediano', 'grande'],
            slug: "collar_reflectante_perro",
            tags: ['collar', 'perro', 'reflectante'],
            title: "Collar Reflectante para Perros",
            gender: 'unisex'
        },
        {
            description: "Abrigo de invierno para perros, cómodo y abrigador en días fríos.",
            images: [
                'abrigo_perro_invierno_1.jpg',
                'abrigo_perro_invierno_2.jpg',
            ],
            stock: 60,
            price: 25.0,
            sizes: ['pequeño', 'mediano', 'grande'],
            slug: "abrigo_perro_invierno",
            tags: ['abrigo', 'perro', 'ropa'],
            title: "Abrigo de Invierno para Perros",
            gender: 'unisex'
        },
        {
            description: "Transportadora cómoda para gatos y perros pequeños.",
            images: [
                'transportadora_mascota_1.jpg',
                'transportadora_mascota_2.jpg',
            ],
            stock: 40,
            price: 60.0,
            sizes: ['pequeño', 'mediano'],
            slug: "transportadora_mascota",
            tags: ['transportadora', 'viaje', 'mascota'],
            title: "Transportadora para Mascotas",
            gender: 'unisex'
        },
        {
            description: "Shampoo antipulgas natural para perros, ayuda a mantener el pelaje limpio y libre de parásitos.",
            images: [
                'shampoo_antipulgas_1.jpg'
            ],
            stock: 75,
            price: 18.5,
            sizes: ['250 ml', '500 ml'],
            slug: "shampoo_antipulgas_perro",
            tags: ['shampoo', 'perro', 'antipulgas'],
            title: "Shampoo Antipulgas para Perros",
            gender: 'unisex'
        },
        {
            description: "Alimento premium para gatos adultos, completo y balanceado.",
            images: [
                'alimento_gato_premium_1.png'
            ],
            stock: 120,
            price: 40.0,
            sizes: ['2 kg', '5 kg'],
            slug: "alimento_gato_premium",
            tags: ['alimento', 'gato', 'premium'],
            title: "Alimento Premium para Gatos",
            gender: 'unisex'
        },
        {
            description: "Rascador para gatos con poste de sisal, ideal para mantener sus uñas saludables.",
            images: [
                'rascador_gato_1.jpg',
                'rascador_gato_2.jpg',
                'rascador_gato_3.jpg',
            ],
            stock: 60,
            price: 30.0,
            sizes: ['único'],
            slug: "rascador_gato_sisal",
            tags: ['rascador', 'gato'],
            title: "Rascador para Gatos",
            gender: 'unisex'
        },
        {
            description: "Juguete interactivo para gatos con plumas y campanas.",
            images: [
                'juguete_gato_interactivo_1.jpg',
                'juguete_gato_interactivo_2.jpg',
            ],
            stock: 90,
            price: 12.0,
            sizes: ['único'],
            slug: "juguete_interactivo_gato",
            tags: ['juguete', 'gato', 'interactivo'],
            title: "Juguete Interactivo para Gatos",
            gender: 'unisex'
        },
        {
            description: "Comida enlatada para perros de todas las razas, con sabor a pollo y verduras.",
            images: [
                'comida_enlatada_perro_1.png',
                'comida_enlatada_perro_2.jpg',
            ],
            stock: 200,
            price: 3.5,
            sizes: ['400g', '800g'],
            slug: "comida_enlatada_perro",
            tags: ['comida', 'perro', 'enlatada'],
            title: "Comida Enlatada para Perros",
            gender: 'unisex'
        },
        {
            description: "Guantes de baño para perros, diseñados para un aseo fácil y efectivo.",
            images: [
                'guantes_bano_perro_1.jpg',
                'guantes_bano_perro_2.jpg',
            ],
            stock: 50,
            price: 15.0,
            sizes: ['único'],
            slug: "guantes_bano_perro",
            tags: ['guantes', 'perro', 'baño'],
            title: "Guantes de Baño para Perros",
            gender: 'unisex'
        },
        {
            description: "Cama ortopédica para perros de tamaño grande, ideal para descansar y aliviar el dolor.",
            images: [
                'cama_ortopedica_perro_1.jpg',
                'cama_ortopedica_perro_2.jpg',
            ],
            stock: 30,
            price: 45.0,
            sizes: ['grande'],
            slug: "cama_ortopedica_perro",
            tags: ['cama', 'perro', 'ortopedica'],
            title: "Cama Ortopédica para Perros",
            gender: 'unisex'
        },
        {
            description: "Cuerda para perros, ideal para juegos de tirar y traer.",
            images: [
                'cuerda_perro_1.png'
            ],
            stock: 120,
            price: 10.0,
            sizes: ['grande'],
            slug: "cuerda_perro",
            tags: ['cuerda', 'perro'],
            title: "Cuerda para Perros",
            gender: 'unisex'
        },
        {
            description: "Arnés ajustable para perros pequeños, fácil de poner y cómodo.",
            images: [
                'arnes_perro_pequeno_1.jpg',
                'arnes_perro_pequeno_2.jpg',
            ],
            stock: 80,
            price: 18.0,
            sizes: ['pequeño'],
            slug: "arnes_perro_pequeno",
            tags: ['arnés', 'perro'],
            title: "Arnés para Perros Pequeños",
            gender: 'unisex'
        },
        {
            description: "Cepillo para perros de pelo largo, diseñado para desenredar fácilmente.",
            images: [
                'cepillo_pelo_largo_perro_1.jpg'
            ],
            //hasta acá
            stock: 70,
            price: 12.0,
            sizes: ['único'],
            slug: "cepillo_pelo_largo_perro",
            tags: ['cepillo', 'perro', 'pelo_largo'],
            title: "Cepillo para Perros de Pelo Largo",
            gender: 'unisex'
        },
        {
            description: "Hueso de goma para perros, ideal para morder y mantener sus dientes limpios.",
            images: [
                'hueso_goma_perro_1.jpg',
                'hueso_goma_perro_2.jpeg',
            ],
            stock: 200,
            price: 5.0,
            sizes: ['único'],
            slug: "hueso_goma_perro",
            tags: ['hueso', 'perro', 'goma'],
            title: "Hueso de Goma para Perros",
            gender: 'unisex'
        },
        {
            description: "Juguete de peluche para gatos con forma de ratón, con sonido para atraer su atención.",
            images: [
                'juguete_peluche_gato_1.jpeg'
            ],
            stock: 60,
            price: 9.0,
            sizes: ['único'],
            slug: "juguete_peluche_gato",
            tags: ['juguete', 'gato', 'peluche'],
            title: "Juguete de Peluche para Gatos",
            gender: 'unisex'
        },
        {
            description: "Alimento húmedo para perros con sabor a carne y verduras, 100% natural.",
            images: [
                'alimento_humedo_perro_1.png',
                'alimento_humedo_perro_2.png',
            ],
            stock: 180,
            price: 4.5,
            sizes: ['400g', '800g'],
            slug: "alimento_humedo_perro",
            tags: ['comida', 'perro', 'humedo'],
            title: "Alimento Húmedo para Perros",
            gender: 'unisex'
        }
    ]
}
