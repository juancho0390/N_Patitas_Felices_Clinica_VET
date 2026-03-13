import {
  Stethoscope,
  Activity,
  Scissors,
  Eye,
  HeartPulse,
  Bath,
  Home,
  FileText
} from 'lucide-react';

export const heroData = [
  {
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1920&q=80',
    title: 'Medicina veterinaria de excelencia, con el corazón.',
    description: 'En Patitas Felices combinamos tecnología médica de vanguardia con un trato humano y compasivo. Porque sabemos que no son solo mascotas, son familia.',
    buttonText: 'Conoce nuestra clínica',
    buttonLink: '#nosotros'
  },
  {
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1920&q=80',
    title: 'Especialistas en cada etapa de su vida.',
    description: 'Desde sus primeras vacunas hasta el cuidado geriátrico especializado. Un equipo multidisciplinario dedicado a garantizar su bienestar integral.',
    buttonText: 'Explorar Servicios',
    buttonLink: '#servicios'
  },
  {
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1920&q=80',
    title: 'Urgencias 24/7: Siempre a tu lado.',
    description: 'La salud no tiene horario. Contamos con unidad de cuidados intensivos y personal médico disponible las 24 horas del día, los 365 días del año.',
    buttonText: 'Ver Sedes y Horarios',
    buttonLink: '#sedes'
  }
];

export const servicesData = [
  {
    icon: Stethoscope,
    title: 'Medicina Preventiva',
    description: 'Consultas integrales, esquemas de vacunación personalizados y control de parásitos.',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">La prevención es el pilar fundamental para una vida larga y saludable. Nuestro enfoque proactivo nos permite detectar anomalías antes de que se conviertan en problemas graves.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Chequeo Pediátrico y Geriátrico:</strong> Evaluaciones adaptadas a la etapa de desarrollo de tu mascota.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Inmunización Avanzada:</strong> Protocolos de vacunación basados en el estilo de vida y riesgo de exposición.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Control Parasitario:</strong> Prevención de enfermedades transmitidas por vectores (pulgas, garrapatas, mosquitos).</li>
      </ul>`
  },
  {
    icon: Activity,
    title: 'Diagnóstico por Imagen y Laboratorio',
    description: 'Tecnología de punta: Rayos X digitales, ecografía Doppler y laboratorio in-house.',
    image: 'https://images.unsplash.com/photo-1584815682414-0e31818d4be1?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">Respuestas rápidas y precisas. Contamos con equipos de diagnóstico de última generación que nos permiten obtener resultados en minutos, cruciales para situaciones de emergencia.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Laboratorio Clínico In-House:</strong> Hemogramas, bioquímicas y uroanálisis en menos de 15 minutos.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Ecografía de Alta Resolución:</strong> Evaluaciones abdominales y ecocardiogramas no invasivos.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Radiología Digital:</strong> Imágenes de alta calidad con menor exposición a radiación.</li>
      </ul>`
  },
  {
    icon: Scissors,
    title: 'Cirugía y Anestesia Segura',
    description: 'Quirófanos equipados, monitorización multiparamétrica y manejo del dolor.',
    image: 'https://images.unsplash.com/photo-1581594412586-7710b1066c1b?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">La seguridad de tu mascota es nuestra prioridad absoluta. Empleamos protocolos anestésicos individualizados y técnicas quirúrgicas mínimamente invasivas siempre que es posible.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Cirugía de Tejidos Blandos:</strong> Desde esterilizaciones preventivas hasta resecciones oncológicas complejas.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Monitorización Continua:</strong> Control de ECG, capnografía, presión arterial y oximetría durante todo el procedimiento.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Odontología Especializada:</strong> Profilaxis con ultrasonido, radiografías dentales y extracciones quirúrgicas.</li>
      </ul>`
  },
  {
    icon: Eye,
    title: 'Especialidades Médicas',
    description: 'Dermatología, cardiología, oftalmología, neurología y oncología veterinaria.',
    image: 'https://images.unsplash.com/photo-1537151608804-ea2f14cb1f3f?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">Casos complejos requieren conocimientos específicos. Nuestro equipo cuenta con especialistas dedicados a diferentes ramas de la medicina veterinaria.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Dermatología y Alergias:</strong> Diagnóstico de atopias, test de alergias y tratamientos inmunomoduladores.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Cardiología:</strong> Manejo de insuficiencias cardíacas, hipertensión y arritmias.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Nutrición Clínica:</strong> Dietas terapéuticas para manejo de obesidad, problemas renales o alergias alimentarias.</li>
      </ul>`
  },
  {
    icon: HeartPulse,
    title: 'Cuidados Intensivos (UCI) 24/7',
    description: 'Atención ininterrumpida para pacientes críticos con soporte vital avanzado.',
    image: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">Nuestra Unidad de Cuidados Intensivos está diseñada para ofrecer soporte vital y monitorización constante a pacientes en estado crítico o en recuperación postquirúrgica.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Soporte de Oxígeno:</strong> Jaulas de oxigenoterapia con control de temperatura y humedad.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Fluidoterapia Avanzada:</strong> Bombas de infusión de precisión para medicamentos y fluidos.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Vigilancia Médica 24h:</strong> Un veterinario y un técnico presentes físicamente en todo momento.</li>
      </ul>`
  },
  {
    icon: Bath,
    title: 'Spa y Dermatología Estética',
    description: 'Baños medicados, cortes de raza, ozonoterapia y cuidado del manto.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">La higiene es salud. Nuestro servicio de spa no solo busca que tu mascota luzca bien, sino que su piel y pelaje estén en condiciones óptimas, utilizando productos hipoalergénicos de grado veterinario.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Baños Terapéuticos:</strong> Tratamientos específicos para seborrea, infecciones fúngicas o bacterianas.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Ozonoterapia:</strong> Baños con ozono que mejoran la oxigenación de la piel y aceleran la cicatrización.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Peluquería Libre de Estrés:</strong> Manejo positivo y pausas activas durante las sesiones de grooming.</li>
      </ul>`
  },
  {
    icon: Home,
    title: 'Atención Veterinaria a Domicilio',
    description: 'Llevamos la clínica a tu casa para pacientes con movilidad reducida o alto estrés.',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">Sabemos que el traslado puede ser una experiencia traumática para algunos animales, especialmente felinos o pacientes geriátricos. Nuestro servicio móvil lleva la excelencia médica a la comodidad de tu hogar.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Consultas Completas:</strong> Examen físico detallado en el entorno seguro de la mascota.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Toma de Muestras:</strong> Extracción de sangre u otras muestras para análisis de laboratorio.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Aplicación de Tratamientos:</strong> Fluidoterapia subcutánea, inyecciones y curaciones menores.</li>
      </ul>`
  },
  {
    icon: FileText,
    title: 'Trámites y Certificaciones',
    description: 'Certificados internacionales de viaje, microchips y asesoría legal.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80',
    detailedDescription: `
      <p class="mb-4 text-lg">Te facilitamos los procesos burocráticos para que puedas viajar o registrar a tu mascota sin contratiempos, cumpliendo con todas las normativas nacionales e internacionales.</p>
      <ul class="list-none space-y-3 mt-6">
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Certificados ICA/Internacionales:</strong> Preparación de documentos sanitarios para viajes al exterior.</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Identificación Electrónica:</strong> Implantación y registro de microchips de 15 dígitos (norma ISO).</li>
          <li class="flex items-start"><span class="text-teal-500 mr-2">✦</span> <strong>Test de Anticuerpos de Rabia:</strong> Gestión de muestras para laboratorios internacionales aprobados.</li>
      </ul>`
  }
];

export const locationsData = [
  { 
    name: 'Sede Principal Poblado', 
    address: 'Cl 10 #43a-15, El Poblado, Medellín', 
    phone: '+57 604 328 7722', 
    hours: 'Lunes a Domingo: 24 Horas',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.401511539481!2d-75.57320178820675!3d6.210657293751321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44282ba41a1223%3A0x441b86841cf659a!2sCl%2010%20%2343a-15%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1736996008870!5m2!1ses!2sco' 
  },
  { 
    name: 'Sede Laureles', 
    address: 'Circ. 4 #73-124, Laureles, Medellín', 
    phone: '+57 604 328 7333', 
    hours: 'Lunes a Sábado: 8:00 am - 8:00 pm',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0716173914411!2d-75.59451612791106!3d6.244847493717387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429189ed12fa5%3A0x25ee111d3749161a!2sHotel%20Asturias%20Medellin!5e0!3m2!1ses!2sco!4v1736996130981!5m2!1ses!2sco' 
  },
  { 
    name: 'Sede CC El Tesoro', 
    address: 'Cra. 25a #1A sur 45 Local 3027, Medellín', 
    phone: '+57 604 382 7222', 
    hours: 'Lunes a Domingo: 10:00 am - 9:00 pm',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6252131219381!2d-75.55886709776365!3d6.197456693764355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46829a191ffd75%3A0xd1ba421be16030e3!2sCra.%2025a%20%231a%20Sur%2045%20Local%203027%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1736996265417!5m2!1ses!2sco' 
  },
  { 
    name: 'Sede Viva Envigado', 
    address: 'Carrera 48 # 32B sur 139 LOCAL 366, Envigado', 
    phone: '+57 604 397 7222', 
    hours: 'Lunes a Domingo: 10:00 am - 8:00 pm',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.502670739083!2d-75.59306430457097!3d6.176792081125159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683d4c79a57ad%3A0x2e132111df72b9f79!2sEl%20Rancherito%20Viva%20Envigado!5e0!3m2!1ses!2sco!4v1736994641154!5m2!1ses!2sco' 
  }
];

export const teamData = [
  {
    name: 'Dr. Juan Rodríguez',
    specialty: 'Cardiología y Medicina Interna',
    profile: 'Especialista certificado con más de 15 años de experiencia. Pionero en ecocardiografía veterinaria en la región, dedicado a mejorar la calidad de vida de pacientes con patologías crónicas.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Dra. Carolina Rojas',
    specialty: 'Dermatología y Alergología',
    profile: 'Máster en Dermatología Veterinaria. Su enfoque se centra en resolver casos crónicos de piel y oídos, devolviendo el confort y la tranquilidad a las mascotas y sus familias.',
    image: 'https://images.unsplash.com/photo-1594824436951-7f12620565da?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Dr. Alejandro Gómez',
    specialty: 'Cirugía de Tejidos Blandos y Ortopedia',
    profile: 'Cirujano jefe con entrenamiento avanzado en traumatología y técnicas mínimamente invasivas (laparoscopia). Ha realizado más de 3,000 procedimientos exitosos.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Dra. Valeria Estrada',
    specialty: 'Medicina Felina y Comportamiento',
    profile: 'Certificada en manejo "Cat Friendly". Entiende las particularidades médicas y conductuales de los gatos, asegurando consultas libres de estrés y diagnósticos precisos.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Dr. Pelos',
    specialty: 'Jefe de Relaciones Públicas',
    profile: 'Nuestro terapeuta residente. Especializado en brindar apoyo emocional, recibir a los pacientes con movimientos de cola y asegurar que el ambiente de la clínica sea siempre alegre.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
  }
];

export const testimonialsData = [
  { name: 'Ana María G.', pet: 'Toby (Golden Retriever)', rating: 5, text: 'Llegamos de urgencia a las 2 AM por una torsión gástrica. El equipo quirúrgico ya estaba preparado. Le salvaron la vida a Toby con un profesionalismo que nunca olvidaré.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80' },
  { name: 'Carlos Vélez', pet: 'Luna (Gata Persa)', rating: 5, text: 'La Dra. Valeria es una "encantadora de gatos". Luna solía ser un terror en el veterinario, pero aquí el manejo es tan suave y respetuoso que ni se da cuenta de las vacunas.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
  { name: 'Sofia Jaramillo', pet: 'Simba (Bulldog)', rating: 5, text: 'Luchamos contra las alergias de Simba por años sin éxito. La Dra. Carolina dio con el diagnóstico exacto y el tratamiento adecuado en la primera consulta. ¡Un cambio de vida!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { name: 'Ricardo Pérez', pet: 'Rocky (Mestizo)', rating: 5, text: 'Adopté a Rocky con una fractura antigua mal curada. El Dr. Alejandro le realizó una cirugía ortopédica compleja y hoy Rocky corre como si nada hubiera pasado. Son unos magos.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  { name: 'Laura Restrepo', pet: 'Milo (Pug)', rating: 5, text: 'Las instalaciones son impecables, huelen bien y no se sienten como un hospital frío. El servicio de spa deja a Milo hermoso y con un pelaje súper suave.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }
];

export const facilitiesData = [
  {
    image: 'https://images.unsplash.com/photo-1581594412586-7710b1066c1b?auto=format&fit=crop&w=1000&q=80',
    title: 'Quirófano de Alta Complejidad',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    image: 'https://images.unsplash.com/photo-1584815682414-0e31818d4be1?auto=format&fit=crop&w=800&q=80',
    title: 'Consultorios Modernos',
    span: 'col-span-1 row-span-1'
  },
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    title: 'Laboratorio In-House',
    span: 'col-span-1 row-span-1'
  },
  {
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80',
    title: 'Área de Spa y Peluquería',
    span: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export const faqData = [
  {
    question: '¿Qué debo hacer en caso de una emergencia nocturna?',
    answer: 'Nuestra sede principal en El Poblado está abierta las 24 horas, los 7 días de la semana. No necesitas cita previa para urgencias. Te recomendamos llamar al 604 564 82 73 mientras vienes en camino para que nuestro equipo de trauma esté preparado para recibir a tu mascota.'
  },
  {
    question: '¿A qué edad debo empezar a vacunar a mi cachorro o gatito?',
    answer: 'El esquema de vacunación generalmente comienza a las 6 u 8 semanas de edad. Es vital no exponer a tu mascota a parques o animales desconocidos hasta que su esquema inicial esté completo (usualmente alrededor de las 16 semanas).'
  },
  {
    question: '¿Cuáles son los requisitos para viajar al exterior con mi mascota?',
    answer: 'Los requisitos varían según el país de destino. Generalmente incluyen microchip (norma ISO), vacunas al día (especialmente rabia), certificado de salud emitido por un veterinario y el aval del ICA. Ofrecemos asesoría completa y realizamos todos los trámites necesarios.'
  },
  {
    question: '¿Ofrecen planes de salud o seguros veterinarios?',
    answer: 'Sí, contamos con "Planes Patitas Protegidas" que incluyen consultas ilimitadas, esquema de vacunación anual, desparasitación y descuentos en cirugías y laboratorio. Pregunta en recepción por el plan que mejor se adapte a la edad de tu mascota.'
  },
  {
    question: '¿Cómo preparo a mi mascota para una cirugía?',
    answer: 'Tu mascota debe tener un ayuno de sólidos de 8 a 12 horas y de líquidos de 2 a 4 horas antes del procedimiento, dependiendo de la edad y la especie. Además, realizaremos exámenes de sangre prequirúrgicos para garantizar que la anestesia sea 100% segura.'
  }
];

export const pharmacyData = [
  {
    id: 'prod-1',
    name: 'Alimento Premium Adulto',
    category: 'Nutrición',
    price: 120000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80',
    description: 'Alimento balanceado para perros adultos de razas medianas y grandes. Rico en proteínas y vitaminas.'
  },
  {
    id: 'prod-2',
    name: 'Antipulgas y Garrapatas',
    category: 'Farmacia',
    price: 45000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1623387641177-e8a49c0f4538?auto=format&fit=crop&w=400&q=80',
    description: 'Tratamiento mensual tópico para la prevención y tratamiento de infestaciones por pulgas y garrapatas.'
  },
  {
    id: 'prod-3',
    name: 'Champú Hipoalergénico',
    category: 'Cuidado e Higiene',
    price: 35000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80',
    description: 'Fórmula suave con aloe vera y avena, ideal para mascotas con piel sensible o alergias.'
  },
  {
    id: 'prod-4',
    name: 'Juguete Interactivo Kong',
    category: 'Accesorios',
    price: 28000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400&q=80',
    description: 'Juguete dispensador de premios de caucho natural ultra resistente. Ayuda a reducir la ansiedad.'
  },
  {
    id: 'prod-5',
    name: 'Alimento Gatos Esterilizados',
    category: 'Nutrición',
    price: 95000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80',
    description: 'Fórmula especializada para el control de peso y salud del tracto urinario en gatos esterilizados.'
  },
  {
    id: 'prod-6',
    name: 'Desparasitante Interno',
    category: 'Farmacia',
    price: 25000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1623387641177-e8a49c0f4538?auto=format&fit=crop&w=400&q=80',
    description: 'Tabletas masticables de amplio espectro para el control de parásitos intestinales.'
  },
  {
    id: 'prod-7',
    name: 'Cepillo Deslanador',
    category: 'Cuidado e Higiene',
    price: 42000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=400&q=80',
    description: 'Reduce la caída del pelo hasta en un 90%. Diseño ergonómico y seguro para la piel.'
  },
  {
    id: 'prod-8',
    name: 'Cama Ortopédica',
    category: 'Accesorios',
    price: 180000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80',
    description: 'Cama con espuma viscoelástica que alivia la presión en las articulaciones. Ideal para perros mayores.'
  }
];

export const blogData = [
  {
    id: 'salud-dental',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    category: 'Cuidado Preventivo',
    date: '12 Mar 2026',
    title: 'La importancia de la salud dental en perros y gatos',
    excerpt: 'El 80% de los perros y el 70% de los gatos muestran signos de enfermedad periodontal antes de los 3 años. Descubre cómo prevenirlo.',
    content: `
      <p>La salud dental de nuestras mascotas es a menudo pasada por alto, pero es fundamental para su bienestar general. Al igual que en los humanos, la acumulación de placa y sarro puede llevar a enfermedades periodontales graves.</p>
      <h3>¿Por qué es tan importante?</h3>
      <p>Las bacterias presentes en la boca no solo causan mal aliento y pérdida de dientes. Si la enfermedad periodontal avanza, estas bacterias pueden ingresar al torrente sanguíneo y afectar órganos vitales como el corazón, el hígado y los riñones.</p>
      <h3>Señales de alerta</h3>
      <ul>
        <li>Mal aliento persistente (halitosis).</li>
        <li>Encías rojas, inflamadas o sangrantes.</li>
        <li>Dificultad para masticar o pérdida de apetito.</li>
        <li>Dientes flojos o decolorados.</li>
      </ul>
      <h3>¿Cómo prevenirlo?</h3>
      <p>La prevención comienza en casa con el cepillado regular usando pasta dental específica para mascotas. Además, es vital programar limpiezas dentales profesionales (profilaxis) anuales con tu veterinario para remover el sarro bajo la línea de las encías.</p>
    `
  },
  {
    id: 'dietas-barf-vs-concentrado',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80',
    category: 'Nutrición',
    date: '05 Mar 2026',
    title: 'Dietas BARF vs. Concentrado: ¿Qué es mejor?',
    excerpt: 'Analizamos los pros y contras de las diferentes opciones de alimentación para que tomes la mejor decisión para tu compañero.',
    content: `
      <p>La nutrición es uno de los temas más debatidos entre los dueños de mascotas. Hoy en día, las opciones van mucho más allá del tradicional concentrado (croquetas), siendo la dieta BARF (Biologically Appropriate Raw Food) una de las alternativas más populares.</p>
      <h3>Dietas Comerciales (Concentrado)</h3>
      <p><strong>Ventajas:</strong> Son convenientes, fáciles de almacenar, económicas y, si eliges una marca de alta calidad, están formuladas para ser nutricionalmente completas y balanceadas.</p>
      <p><strong>Desventajas:</strong> Algunas marcas económicas contienen muchos rellenos (como maíz o trigo) y subproductos de baja calidad. Además, su bajo contenido de humedad puede ser un problema, especialmente para los gatos.</p>
      <h3>Dieta BARF (Alimentos Crudos)</h3>
      <p><strong>Ventajas:</strong> Mayor digestibilidad, heces más pequeñas y con menos olor, pelaje más brillante y mayor energía. Al ser rica en humedad, favorece la salud renal.</p>
      <p><strong>Desventajas:</strong> Requiere mucho tiempo de preparación, espacio en el congelador y un estricto manejo higiénico para evitar contaminación por bacterias como Salmonella o E. coli. Además, es difícil lograr un balance nutricional perfecto sin la guía de un nutricionista veterinario.</p>
      <h3>Conclusión</h3>
      <p>No existe una dieta única perfecta para todas las mascotas. La mejor opción dependerá del estilo de vida de tu familia, tu presupuesto y las necesidades de salud específicas de tu perro o gato. Siempre consulta con tu veterinario antes de realizar un cambio drástico en su alimentación.</p>
    `
  },
  {
    id: 'reducir-estres-gato',
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80',
    category: 'Comportamiento',
    date: '28 Feb 2026',
    title: 'Cómo reducir el estrés de tu gato al visitar la clínica',
    excerpt: 'Consejos prácticos desde el uso del guacal hasta feromonas para hacer que la visita al veterinario sea una experiencia positiva.',
    content: `
      <p>Para la mayoría de los gatos, la visita al veterinario comienza con el estrés de ser introducidos en un guacal, seguido de un viaje en auto y la llegada a un lugar lleno de olores y sonidos desconocidos. Aquí te dejamos algunos consejos para hacer este proceso más amigable.</p>
      <h3>1. Familiarización con el guacal</h3>
      <p>El guacal no debe aparecer solo cuando hay visita al veterinario. Déjalo abierto en casa, en un lugar tranquilo, con una manta suave y algunos premios o juguetes dentro. Tu gato debe verlo como un refugio seguro.</p>
      <h3>2. Uso de feromonas</h3>
      <p>Rocía feromonas faciales felinas sintéticas (como Feliway) en el guacal y en el auto unos 15 minutos antes del viaje. Esto ayuda a crear una sensación de familiaridad y calma.</p>
      <h3>3. El viaje en auto</h3>
      <p>Asegura el guacal con el cinturón de seguridad para evitar movimientos bruscos. Conduce con suavidad, mantén la música baja o pon música clásica, y evita olores fuertes en el vehículo.</p>
      <h3>4. En la sala de espera</h3>
      <p>Si es posible, mantén el guacal en alto (los gatos se sienten más seguros en las alturas) y cúbrelo parcialmente con una manta ligera para bloquear el contacto visual con otros animales, especialmente perros.</p>
      <p>En Patitas Felices contamos con protocolos "Cat Friendly" para asegurar que la experiencia de tu felino sea lo menos estresante posible desde que cruza nuestra puerta.</p>
    `
  }
];
