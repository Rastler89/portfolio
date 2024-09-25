import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Workflow } from "lucide-react";

export const socialNetworks = [
   /* {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },*/
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/danielmolinamunera",
    },
    /*{
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },*/
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    /*{
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },*/
];

export const dataAboutPage = [
    /*{
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },*/
    {
        id: 1,
        title: "Programador PL/SQL", 
        subtitle: "Consorci Hospitalari de Vic",
        description: "Desarrollo/mantenimiento de scripts PL/SQL en Oracle, desarrollo/mantenimiento de interfaces gráficas con ORACLE Forms y Reports",
        date: "Mar 2023"
    },
    {
        id: 2,
        title: "Técnico de TI",
        subtitle: "Optima Retail",
        description: "Gestión de incidencias, desarrollo íntegro de un sistema de control de calidad, programación de pantallas",
        date: "Feb 2022"
    },
    {
        id: 3,
        title: "Programador PHP",
        subtitle: "Easypromos",
        description: "Desarrollo/mantenimiento de scripts PHP, desarrollo de interfaces gráficas con React",
        date: "Ene 2020"
    },
    {
        id: 4,
        title: "Programadow Web",
        subtitle: "Alarmas y Seguridad",
        description: "Desarrollo de una web para la venta de alarmas y seguridad electrónica",
        date: "Jul 2019"
    },
    {
        id: 5,
        title: "Programador",
        subtitle: "Bon Preu S.A.U",
        description: "Desarrollo y mantenimiento de aplicaciones informáticas para la gestión de la empresa, mantenimiento de scripts PL/SQL, desarrollo de interfaces 4GL. Mantenimiento de base de datos Oracle y Microsoft SQL Server. Gestión de incidencias",
        date: "Oct 2017"
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    /*
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },*/
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    }
    /*{
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },*/
];

export const serviceData = [
    /*{
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },*/
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Documentación",
        description: "Creación de documentación técnica para proyectos de desarrollo de software",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <Workflow />,
        title: "Integraciones",
        description: "Integración de APIs de terceros para la gestión de tu negocio",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Isister",
        //Tipo de proyecto: web, app, etc
        type: "web",
        //Si tiene descripción: true abrirá la descripción del proyecto
        withDescription: true,
        //Status: 0 oculto, 1 visible (Posible nuevos valores para futuras funcionalidades)
        status: 0,
        tecnologies: [
            {
                name: "Laravel",
            },
            {
                name: "Angular",
            },
            
        ],
        image: "/isister.png",
        //Enlaces del proyecto
        urlGithub: "fefe",
        urlDemo: "efe",
        //Información del proyecto
        description: "gerger",
        objective: "",
        public: "grewger",
        caracteristicas: "",
        results: "grewwger",
        lecciones: ""

    }
    /*,
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }*/
];

export const dataTestimonials = [
    /*{
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },*/
];