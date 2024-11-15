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
                'shampoo_antipulgas_1.jpg',
                'shampoo_antipulgas_2.jpg',
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
                'alimento_gato_premium_1.jpg',
                'alimento_gato_premium_2.jpg',
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
                'comida_enlatada_perro_1.jpg',
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
                'cuerda_perro_1.jpg',
                'cuerda_perro_2.jpg',
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
                'cepillo_pelo_largo_perro_1.jpg',
                'cepillo_pelo_largo_perro_2.jpg',
            ],
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
                'hueso_goma_perro_2.jpg',
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
                'juguete_peluche_gato_1.jpg',
                'juguete_peluche_gato_2.jpg',
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
                'alimento_humedo_perro_1.jpg',
                'alimento_humedo_perro_2.jpg',
            ],
            stock: 180,
            price: 4.5,
            sizes: ['400g', '800g'],
            slug: "alimento_humedo_perro",
            tags: ['comida', 'perro', 'humedo'],
            title: "Alimento Húmedo para Perros",
            gender: 'unisex'
        },
        {
            description: "Arnés para gatos con diseño ergonómico, ideal para paseos seguros.",
            images: [
                'arnes_gato_1.jpg',
                'arnes_gato_2.jpg',
            ],
            stock: 40,
            price: 20.0,
            sizes: ['único'],
            slug: "arnes_gato",
            tags: ['arnés', 'gato'],
            title: "Arnés para Gatos",
            gender: 'unisex'
        },
        {
            description: "Rascador multifuncional para gatos, incluye plataforma y juguetes integrados.",
            images: [
                'rascador_multifuncional_1.jpg',
                'rascador_multifuncional_2.jpg',
            ],
            stock: 100,
            price: 55.0,
            sizes: ['único'],
            slug: "rascador_multifuncional_gato",
            tags: ['rascador', 'gato', 'multifuncional'],
            title: "Rascador Multifuncional para Gatos",
            gender: 'unisex'
        },
        {
            description: "Pelota para perros de goma de alta resistencia, ideal para juegos al aire libre.",
            images: [
                'pelota_goma_1.jpg',
                'pelota_goma_2.jpg',
            ],
            stock: 150,
            price: 7.0,
            sizes: ['único'],
            slug: "pelota_goma_perro",
            tags: ['pelota', 'perro', 'goma'],
            title: "Pelota de Goma para Perros",
            gender: 'unisex'
        },
        {
            description: "Cama de lujo para gatos, con almohadón extraíble y suave para un descanso cómodo.",
            images: [
                'cama_lujo_gato_1.jpg',
                'cama_lujo_gato_2.jpg',
            ],
            stock: 50,
            price: 40.0,
            sizes: ['único'],
            slug: "cama_lujo_gato",
            tags: ['cama', 'gato', 'lujo'],
            title: "Cama de Lujo para Gatos",
            gender: 'unisex'
        },
        {
            description: "Hueso masticable para perros de tamaño grande, ayuda a limpiar sus dientes.",
            images: [
                'hueso_masticable_grande_1.jpg',
                'hueso_masticable_grande_2.jpg',
            ],
            stock: 200,
            price: 6.0,
            sizes: ['grande'],
            slug: "hueso_masticable_grande",
            tags: ['hueso', 'perro'],
            title: "Hueso Masticable para Perros",
            gender: 'unisex'
        },
        {
            description: "Arnés para cachorros, suave y cómodo para evitar rozaduras.",
            images: [
                'arnes_cachorro_1.jpg',
                'arnes_cachorro_2.jpg',
            ],
            stock: 80,
            price: 12.0,
            sizes: ['pequeño'],
            slug: "arnes_cachorro",
            tags: ['arnés', 'cachorro'],
            title: "Arnés para Cachorros",
            gender: 'unisex'
        },
        {
            description: "Manta suave para gatos y perros pequeños, ideal para dormir o descansar.",
            images: [
                'manta_suave_1.jpg',
                'manta_suave_2.jpg',
            ],
            stock: 90,
            price: 18.0,
            sizes: ['único'],
            slug: "manta_suave_mascota",
            tags: ['manta', 'gato', 'perro'],
            title: "Manta Suave para Mascotas",
            gender: 'unisex'
        },
        {
            description: "Juguete de pelota interactivo para perros, ideal para juegos de buscar y traer.",
            images: [
                'juguete_pelota_interactivo_1.jpg',
                'juguete_pelota_interactivo_2.jpg',
            ],
            stock: 130,
            price: 10.0,
            sizes: ['único'],
            slug: "juguete_pelota_interactivo",
            tags: ['juguete', 'perro', 'interactivo'],
            title: "Juguete de Pelota Interactivo para Perros",
            gender: 'unisex'
        },
        {
            description: "Transportadora plegable para gatos, fácil de almacenar y transportar.",
            images: [
                'transportadora_plegable_gato_1.jpg',
                'transportadora_plegable_gato_2.jpg',
            ],
            stock: 60,
            price: 35.0,
            sizes: ['único'],
            slug: "transportadora_plegable_gato",
            tags: ['transportadora', 'gato'],
            title: "Transportadora Plegable para Gatos",
            gender: 'unisex'
        },
        {
            description: "Snacks naturales para perros con sabor a pollo y verduras.",
            images: [
                'snacks_naturales_perro_1.jpg',
                'snacks_naturales_perro_2.jpg',
            ],
            stock: 100,
            price: 7.5,
            sizes: ['200g', '400g'],
            slug: "snacks_naturales_perro",
            tags: ['snacks', 'perro', 'natural'],
            title: "Snacks Naturales para Perros",
            gender: 'unisex'
        },
        {
            description: "Galletas nutritivas para gatos, ideales para complementar su dieta diaria.",
            images: [
                'galletas_nutritivas_gato_1.jpg',
                'galletas_nutritivas_gato_2.jpg',
            ],
            stock: 80,
            price: 5.0,
            sizes: ['100g', '200g'],
            slug: "galletas_nutritivas_gato",
            tags: ['galletas', 'gato', 'nutritivas'],
            title: "Galletas Nutritivas para Gatos",
            gender: 'unisex'
        },
        {
            description: "Juguete de cuerda para perros, ideal para juegos de fuerza y resistencia.",
            images: [
                'juguete_cuerda_perro_1.jpg',
                'juguete_cuerda_perro_2.jpg',
            ],
            stock: 150,
            price: 12.0,
            sizes: ['único'],
            slug: "juguete_cuerda_perro",
            tags: ['juguete', 'perro', 'cuerda'],
            title: "Juguete de Cuerda para Perros",
            gender: 'unisex'
        },
        {
            description: "Hueso de cerámica para perros, ideal para mantener sus dientes saludables.",
            images: [
                'hueso_ceramica_1.jpg',
                'hueso_ceramica_2.jpg',
            ],
            stock: 200,
            price: 9.0,
            sizes: ['único'],
            slug: "hueso_ceramica_perro",
            tags: ['hueso', 'perro', 'ceramica'],
            title: "Hueso de Cerámica para Perros",
            gender: 'unisex'
        },
        {
            description: "Alimento completo para cachorros, rico en proteínas y vitaminas.",
            images: [
                'alimento_completo_cachorro_1.jpg',
                'alimento_completo_cachorro_2.jpg',
            ],
            stock: 120,
            price: 22.0,
            sizes: ['2 kg', '5 kg'],
            slug: "alimento_completo_cachorro",
            tags: ['alimento', 'cachorro'],
            title: "Alimento Completo para Cachorros",
            gender: 'unisex'
        },
        {
            description: "Higienizador para gatos con fragancia, ideal para mantener su espacio limpio.",
            images: [
                'higienizador_gato_1.jpg',
                'higienizador_gato_2.jpg',
            ],
            stock: 150,
            price: 10.0,
            sizes: ['250 ml', '500 ml'],
            slug: "higienizador_gato",
            tags: ['higienizador', 'gato'],
            title: "Higienizador para Gatos",
            gender: 'unisex'
        },
        {
            description: "Peluche de pelotita para gatos, ideal para juegos de caza.",
            images: [
                'peluche_pelotita_gato_1.jpg',
                'peluche_pelotita_gato_2.jpg',
            ],
            stock: 130,
            price: 8.0,
            sizes: ['único'],
            slug: "peluche_pelotita_gato",
            tags: ['peluche', 'gato'],
            title: "Peluche de Pelotita para Gatos",
            gender: 'unisex'
        },
        {
            description: "Correa ajustable para perros, con mango ergonómico para un agarre cómodo.",
            images: [
                'correa_ajustable_perro_1.jpg',
                'correa_ajustable_perro_2.jpg',
            ],
            stock: 180,
            price: 15.0,
            sizes: ['único'],
            slug: "correa_ajustable_perro",
            tags: ['correa', 'perro'],
            title: "Correa Ajustable para Perros",
            gender: 'unisex'
        },
        {
            description: "Cuenco de cerámica para gatos, resistente y fácil de limpiar.",
            images: [
                'cuenco_ceramica_gato_1.jpg',
                'cuenco_ceramica_gato_2.jpg',
            ],
            stock: 90,
            price: 12.0,
            sizes: ['único'],
            slug: "cuenco_ceramica_gato",
            tags: ['cuenco', 'gato', 'ceramica'],
            title: "Cuenco de Cerámica para Gatos",
            gender: 'unisex'
        },
        {
            description: "Cama de ortopedia para perros, ideal para mascotas con problemas articulares.",
            images: [
                'cama_ortopedia_perro_1.jpg',
                'cama_ortopedia_perro_2.jpg',
            ],
            stock: 50,
            price: 70.0,
            sizes: ['M', 'L', 'XL'],
            slug: "cama_ortopedia_perro",
            tags: ['cama', 'perro', 'ortopedia'],
            title: "Cama de Ortopedia para Perros",
            gender: 'unisex'
        },
        {
            description: "Comedero doble para perros, de acero inoxidable con base antideslizante.",
            images: [
                'comedero_doble_perro_1.jpg',
                'comedero_doble_perro_2.jpg',
            ],
            stock: 60,
            price: 18.0,
            sizes: ['único'],
            slug: "comedero_doble_perro",
            tags: ['comedero', 'perro'],
            title: "Comedero Doble para Perros",
            gender: 'unisex'
        },
        {
            description: "Juguete de tela para perros con sonido, ideal para juegos de morder.",
            images: [
                'juguete_tela_perro_1.jpg',
                'juguete_tela_perro_2.jpg',
            ],
            stock: 150,
            price: 10.0,
            sizes: ['único'],
            slug: "juguete_tela_perro",
            tags: ['juguete', 'perro', 'sonido'],
            title: "Juguete de Tela para Perros",
            gender: 'unisex'
        },
        {
            description: "Correa extensible para perros, ajustable y con sistema de bloqueo.",
            images: [
                'correa_extensible_perro_1.jpg',
                'correa_extensible_perro_2.jpg',
            ],
            stock: 120,
            price: 25.0,
            sizes: ['único'],
            slug: "correa_extensible_perro",
            tags: ['correa', 'perro', 'extensible'],
            title: "Correa Extensible para Perros",
            gender: 'unisex'
        },
        {
            description: "Alimento para gatos adultos con salmón, rico en ácidos grasos omega 3.",
            images: [
                'alimento_gato_adulto_salmon_1.jpg',
                'alimento_gato_adulto_salmon_2.jpg',
            ],
            stock: 150,
            price: 25.0,
            sizes: ['1 kg', '3 kg'],
            slug: "alimento_gato_adulto_salmon",
            tags: ['comida', 'gato', 'adulto'],
            title: "Alimento para Gatos Adultos con Salmón",
            gender: 'unisex'
        },
        {
            description: "Rascador para gatos de 3 niveles con juguetes incorporados.",
            images: [
                'rascador_gato_3_niveles_1.jpg',
                'rascador_gato_3_niveles_2.jpg',
            ],
            stock: 60,
            price: 45.0,
            sizes: ['único'],
            slug: "rascador_gato_3_niveles",
            tags: ['rascador', 'gato', 'niveles'],
            title: "Rascador para Gatos de 3 Niveles",
            gender: 'unisex'
        },
        {
            description: "Mordedor de goma natural para perros, ideal para fortalecer mandíbulas.",
            images: [
                'mordedor_goma_perro_1.jpg',
                'mordedor_goma_perro_2.jpg',
            ],
            stock: 130,
            price: 8.0,
            sizes: ['único'],
            slug: "mordedor_goma_perro",
            tags: ['mordedor', 'perro', 'goma'],
            title: "Mordedor de Goma Natural para Perros",
            gender: 'unisex'
        },
        {
            description: "Peine de acero inoxidable para gatos, ideal para desenredar su pelaje.",
            images: [
                'peine_acero_gato_1.jpg',
                'peine_acero_gato_2.jpg',
            ],
            stock: 90,
            price: 12.0,
            sizes: ['único'],
            slug: "peine_acero_gato",
            tags: ['peine', 'gato'],
            title: "Peine de Acero Inoxidable para Gatos",
            gender: 'unisex'
        },
        {
            description: "Correa reflectante para perros, aumenta la visibilidad en la oscuridad.",
            images: [
                'correa_reflectante_perro_1.jpg',
                'correa_reflectante_perro_2.jpg',
            ],
            stock: 140,
            price: 18.0,
            sizes: ['único'],
            slug: "correa_reflectante_perro",
            tags: ['correa', 'perro', 'reflectante'],
            title: "Correa Reflectante para Perros",
            gender: 'unisex'
        },
        {
            description: "Alimento seco para cachorros con pollo, ideal para su crecimiento saludable.",
            images: [
                'alimento_seco_cachorro_pollo_1.jpg',
                'alimento_seco_cachorro_pollo_2.jpg',
            ],
            stock: 200,
            price: 20.0,
            sizes: ['2 kg', '5 kg'],
            slug: "alimento_seco_cachorro_pollo",
            tags: ['comida', 'cachorro', 'pollo'],
            title: "Alimento Seco para Cachorros con Pollo",
            gender: 'unisex'
        },
        {
            description: "Comedero para gatos de cerámica, fácil de limpiar y con diseño moderno.",
            images: [
                'comedero_ceramica_gato_1.jpg',
                'comedero_ceramica_gato_2.jpg',
            ],
            stock: 100,
            price: 12.0,
            sizes: ['único'],
            slug: "comedero_ceramica_gato",
            tags: ['comedero', 'gato', 'ceramica'],
            title: "Comedero de Cerámica para Gatos",
            gender: 'unisex'
        },
        {
            description: "Jaula para conejos, amplia y segura para su comodidad.",
            images: [
                'jaula_conejos_1.jpg',
                'jaula_conejos_2.jpg',
            ],
            stock: 40,
            price: 50.0,
            sizes: ['único'],
            slug: "jaula_conejos",
            tags: ['jaula', 'conejo'],
            title: "Jaula para Conejos",
            gender: 'unisex'
        },
        {
            description: "Snacks para roedores, ricos en vitaminas y minerales.",
            images: [
                'snacks_roedores_1.jpg',
                'snacks_roedores_2.jpg',
            ],
            stock: 180,
            price: 5.5,
            sizes: ['100g', '200g'],
            slug: "snacks_roedores",
            tags: ['snacks', 'roedor'],
            title: "Snacks para Roedores",
            gender: 'unisex'
        },
        {
            description: "Juguete de madera para roedores, ayuda a desgastar sus dientes.",
            images: [
                'juguete_madera_roedor_1.jpg',
                'juguete_madera_roedor_2.jpg',
            ],
            stock: 150,
            price: 6.0,
            sizes: ['único'],
            slug: "juguete_madera_roedor",
            tags: ['juguete', 'roedor', 'madera'],
            title: "Juguete de Madera para Roedores",
            gender: 'unisex'
        },
        {
            description: "Pelota para hamsters, ideal para correr y mantenerlos activos.",
            images: [
                'pelota_hamster_1.jpg',
                'pelota_hamster_2.jpg',
            ],
            stock: 200,
            price: 7.0,
            sizes: ['único'],
            slug: "pelota_hamster",
            tags: ['pelota', 'hamster'],
            title: "Pelota para Hamsters",
            gender: 'unisex'
        },
        {
            description: "Comedero para peces de vidrio, elegante y moderno.",
            images: [
                'comedero_peces_vidrio_1.jpg',
                'comedero_peces_vidrio_2.jpg',
            ],
            stock: 60,
            price: 18.0,
            sizes: ['único'],
            slug: "comedero_peces_vidrio",
            tags: ['comedero', 'peces', 'vidrio'],
            title: "Comedero para Peces de Vidrio",
            gender: 'unisex'
        },
        {
            description: "Alimento en gel para tortugas, con vitaminas esenciales.",
            images: [
                'alimento_tortugas_1.jpg',
                'alimento_tortugas_2.jpg',
            ],
            stock: 100,
            price: 10.0,
            sizes: ['250g', '500g'],
            slug: "alimento_tortugas",
            tags: ['comida', 'tortuga', 'gel'],
            title: "Alimento en Gel para Tortugas",
            gender: 'unisex'
        },
        {
            description: "Bebedero automático para mascotas, ideal para perros y gatos.",
            images: [
                'bebedero_automatico_1.jpg',
                'bebedero_automatico_2.jpg',
            ],
            stock: 80,
            price: 22.0,
            sizes: ['único'],
            slug: "bebedero_automatico",
            tags: ['bebedero', 'mascotas'],
            title: "Bebedero Automático para Mascotas",
            gender: 'unisex'
        },
        {
            description: "Lámpara de calor para reptiles, proporciona temperatura constante.",
            images: [
                'lampara_calor_reptil_1.jpg',
                'lampara_calor_reptil_2.jpg',
            ],
            stock: 70,
            price: 15.0,
            sizes: ['único'],
            slug: "lampara_calor_reptil",
            tags: ['lampara', 'reptil'],
            title: "Lámpara de Calor para Reptiles",
            gender: 'unisex'
        },
        {
            description: "Bolsa biodegradable para excrementos de perros, 100% ecológica.",
            images: [
                'bolsa_biodegradable_1.jpg',
                'bolsa_biodegradable_2.jpg',
            ],
            stock: 200,
            price: 5.0,
            sizes: ['50 bolsas'],
            slug: "bolsa_biodegradable_perro",
            tags: ['bolsa', 'perro', 'ecologica'],
            title: "Bolsa Biodegradable para Perros",
            gender: 'unisex'
        }
    ]
}
