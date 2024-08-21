export let descripciones = [
    { 
        titulo: "Interconexión de componentes periféricos",
        descripcion: "Los conectores PCI (Peripheral Component Interconnect) y PCIe (PCI Express) en la placa madre permiten la instalación de tarjetas adicionales que amplían las capacidades del sistema.",
        caracteristicas: [
            "Puertos estándar: Usa conexiones como USB y HDMI",
            "Datos bidireccionales: Permite enviar y recibir información",
            "Compatibilidad: Admite varios dispositivos sin complicaciones",
            "Expansión fácil: Añade o quita periféricos fácilmente"
        ],
        imagenes: [
            "https://bighardware.es/wp-content/uploads/2021/03/Pci-slots.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Buses_pci.jpg",
            "https://previews.123rf.com/images/yodaswaj/yodaswaj1602/yodaswaj160200110/52221695-primer-de-la-placa-base-interconexi%C3%B3n-de-componentes-perif%C3%A9ricos.jpg",
            "https://lupisdij.wordpress.com/wp-content/uploads/2015/10/11.jpg"
        ]
    },
    { 
        titulo: "Pila",
        descripcion: "La pila en la placa madre es una batería pequeña, mantiene la energía necesaria para el reloj en tiempo real (RTC) y la configuración del BIOS o UEFI cuando el ordenador está apagado. Esta pila asegura que la hora y la fecha se mantengan correctas, así como las configuraciones personalizadas del BIOS/UEFI, incluso cuando el equipo no está conectado a una fuente de energía. Sin esta pila, el sistema perdería esta información cada vez que se apagara.",
        caracteristicas: [
            "Almacenamiento temporal: Guarda energía para uso inmediato",
            "Voltaje constante: Proporciona un voltaje específico durante su uso",
            "Portátil: Pequeña y fácil de transportar",
            "Desgaste gradual: Pierde capacidad con el tiempo y el uso"
        ],
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuO8OuF69vEODbwQUu6TJ3SvW6ofb1QZXlA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJIdif0BkiLrq8mHYUYjpoNT3lvqmkTtS8A&s",
            "https://mantenimientoprev.com/wp-content/uploads/2022/08/pila-placa-base.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdadSlPFKQIVM9HAMQjmEPLIdNvqsSnYKNA&s"
        ] 
    },
    { 
        titulo: "Chipset puente sur",
        descripcion: "El chipset puente sur, o Southbridge, es responsable de gestionar la comunicación entre la CPU y dispositivos periféricos de menor velocidad, como discos duros, puertos USB y otros dispositivos de almacenamiento. También maneja funciones relacionadas con el BIOS y la entrada/salida del sistema. En placas madre modernas, algunas de estas funciones también se han integrado en el procesador.",
        caracteristicas: [
            "Control de periféricos: Gestiona la conexión de dispositivos externos como USB y SATA.",
            "Conexión con el puente norte: Actúa como intermediario entre el procesador y los componentes secundarios.",
            "Manejo de I/O: Controla la entrada y salida de datos del sistema.",
            "Gestión de energía: Optimiza el consumo energético de los periféricos."
        ],
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhqF10OF4v1l4kmMr7TcH1W3JK2DOnDJOPg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2Rn5LN3dF7Bvtb8wFyd0pNyr4Hzuexng0ka1jUwz5cyyLLf48MhAz5NJq3uPuVpyOhY&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuugKRMoS_R5xiXuMOTtlKLsYU-Nhz6R5h-lVaYPPNF1ijoqkxFVNuZonRT6TArfHn_oU&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcy1pDZQhRs6Gz2mRKPvfmAyLXnLolfHxEpfrJvf6cBX9I6jtXv_1F-hKLdLicdGQaNU&usqp=CAU"
        ]
    },
    {
        titulo: "Tarjeta gráfica", 
        descripcion: "La tarjeta gráfica, o GPU (Unidad de Procesamiento Gráfico), es el componente que se encarga de procesar y generar las imágenes que se muestran en la pantalla. Puede estar integrada en la placa madre (gráficos integrados) o ser una tarjeta adicional que se instala en una ranura PCIe. Las tarjetas gráficas dedicadas son esenciales para aplicaciones que requieren un procesamiento gráfico intensivo, como videojuegos, edición de video y diseño gráfico.",
        caracteristicas: [
            "Procesamiento gráfico: Realiza cálculos para renderizar imágenes y videos.",
            "Memoria dedicada: Almacena datos gráficos para un rendimiento más rápido.",
            "Salidas de video: Conecta monitores mediante puertos como HDMI, DisplayPort y VGA.",
            "Aceleración 3D: Mejora el rendimiento en juegos y aplicaciones que requieren gráficos tridimensionales."
        ],        
        imagenes: [
            "https://d22k5h68hofcrd.cloudfront.net/magefan_blog/Guia_de_compra_para_GPU_Como_escoger_la_tarjeta_grafica_indicada_1.jpg",
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/11/gtx-1080-gaming-x.jpg?tf=3840x",
            "https://hiraoka.com.pe/media/wysiwyg/c_mo_funciona_una_tarjeta_gr_fica.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCNbU4aysDnlT1JFVtDzuF9XrArvsIKN8ag&s"
        ]
    },
    { 
        titulo: "Puertos externos", 
        descripcion: "Los puertos externos son diversos conectores ubicados en la parte posterior de la placa madre que permiten la conexión de periféricos y otros dispositivos al sistema. Estos puertos pueden incluir conexiones VGA y HDMI para monitores, puertos Ethernet para redes, y puertos PS/2 para teclados y ratones, entre otros. Son esenciales para establecer la conectividad del sistema con otros dispositivos y redes.",
        caracteristicas: [
            "Conexión de dispositivos: Permite conectar periféricos como teclados, ratones y impresoras.",
            "Transferencia de datos: Facilita el envío y recepción de información entre la computadora y los dispositivos externos.",
            "Compatibilidad: Soporta varios tipos de puertos, como USB, HDMI y Ethernet, para diferentes dispositivos.",
            "Expansión: Ofrece la posibilidad de añadir más dispositivos a la computadora según las necesidades del usuario."
        ],
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNONpUm9bYykXqXiAnEiQyl-MI8Fpw_0l1vg&s",
            "https://thumbs.dreamstime.com/b/conectores-en-la-parte-posterior-de-motherboard-del-equipo-usb-hdmi-lan-placa-base-cierre-173444444.jpg",
            "https://t7m8e9c8.rocketcdn.me/wp-content/uploads/2017/11/Placa-base-Gigabyte-AB-350-Gaming-Wifi-18.jpg",
            "https://thumbs.dreamstime.com/b/puertos-y-conectores-de-audio-posterior-spdif-la-placa-base-211389987.jpg"
        ]
    },
    { 
        titulo: "Puertos USB", 
        descripcion: "Los puertos USB (Universal Serial Bus) son conectores estándar ubicados en la parte trasera o a veces en la parte frontal de la placa madre que permiten la conexión de dispositivos externos. Los dispositivos comunes que se conectan a través de USB incluyen teclados, ratones, unidades flash, discos duros externos y más. Los puertos USB facilitan una conexión rápida y sencilla de estos periféricos, permitiendo que sean detectados y utilizados sin necesidad de reiniciar el sistema. También proporcionan alimentación a dispositivos que lo requieren.",
        caracteristicas: [
            "Conexión universal: Permite conectar una amplia variedad de dispositivos como teclados, ratones y unidades de almacenamiento.",
            "Transferencia de datos: Facilita la transferencia de archivos entre dispositivos a alta velocidad.",
            "Carga de dispositivos: Proporciona energía para cargar dispositivos móviles y otros periféricos.",
            "Compatibilidad: Admite múltiples versiones (USB 2.0, 3.0, 3.1, 3.2 y USB-C) para diferentes velocidades y capacidades."
        ],        
        imagenes: [
            "https://www.profesionalreview.com/wp-content/uploads/2020/09/C%C3%B3mo-solucionar-velocidad-usb-5.jpg",
            "https://www.laitadigital.com/wp-content/uploads/2023/05/conector-usb-8.jpg",
            "https://acf.geeknetic.es/imgw/imagenes/auto/2023/8/11/ti6-colores-usb.jpg?f=webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93vP49HZpta9KFH2GKLwqhzepTmzWXxODkLvs7U75RrL8a5KH0GcUOENeTHaHHtfATyU&usqp=CAU"
        ]
    },
    { 
        titulo: "Puerto paralelo", 
        descripcion: "El puerto paralelo es un conector de 25 pines que se usaba comúnmente en el pasado para conectar impresoras y otros dispositivos que operaban mediante comunicación paralela. Aunque en la actualidad ha sido en gran parte reemplazado por puertos USB, todavía puede encontrarse en algunas placas madre modernas para garantizar la compatibilidad con equipos y dispositivos antiguos que aún utilizan este tipo de conexión." ,
        caracteristicas: [
            "Conexión de impresoras: Originalmente diseñado para conectar impresoras y otros dispositivos de salida.",
            "Transferencia de datos: Utiliza un formato paralelo para transmitir varios bits de datos simultáneamente.",
            "Conector de 25 pines: Generalmente usa un conector de 25 pines (DB-25) para la conexión de cables.",
            "Velocidad limitada: Ofrece velocidades de transferencia más bajas en comparación con puertos modernos como USB."
        ],        
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzvKRCAyH8Kh9xkJTkCsZN6_TqR1sZF81rkws6S9ueHiqo-i3IN4QjehazY_EB-fiPEow&usqp=CAU",
            "https://www.cavsi.com/espanol/wp-content/uploads/puertos-conectores/puerto-paralelo.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaX6ja2BIiWZGZoKF4BrHOTIYWLJlt86_Wz1Wbi1Vu1pLUX5nDhNI40cOqFi7K8qo91CQ&usqp=CAU",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Parallel_computer_printer_port.jpg/640px-Parallel_computer_printer_port.jpg"
        ]
    },
    { 
        titulo: "Disipador", 
        descripcion: " El disipador es un componente de refrigeración pasiva que se encuentra sobre la CPU o en otros chips que generan calor. Está fabricado con materiales que tienen una alta conductividad térmica, como aluminio o cobre, para dispersar eficazmente el calor generado por el funcionamiento de estos componentes. Su función principal es evitar el sobrecalentamiento de la CPU y otros componentes críticos, asegurando que funcionen dentro de temperaturas seguras y mantengan un rendimiento óptimo.",
        caracteristicas: [
            "Enfriamiento pasivo: Disipa el calor generado por componentes electrónicos sin necesidad de ventiladores.",
            "Superficie de contacto: Posee una superficie amplia para maximizar el contacto con el componente que se está enfriando.",
            "Material conductor: Generalmente está hecho de materiales con alta conductividad térmica, como aluminio o cobre.",
            "Diseño de aletas: Incluye aletas o aletas para aumentar el área de superficie y mejorar la transferencia de calor al entorno."
        ],        
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRBKOSXboesH3aAWM8vr9n7J1aj-PJzJ2QA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqwSK8yn_Dp3B_rPZqpEnHhwPgFRrw-zJwQRCV0zVgnFQA6NJkDi6g77MnI6byuYAKFc&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoIDw_4C7TX_D7pyfBRESq_gSfqoAbnxY9sp1wNwrNTSKyjw6VYSbMqaAYbOsi6cqAio&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpn1k1MnAeHKRMUjFMyg8yHg34VlR_M9FqzUhgdTwxuduBaaqCXXIvn6d5OIWp8Pg1G0&usqp=CAU"
        ]
    },
    { 
        titulo: "CPU (Unidad Central de Procesamiento)", 
        descripcion: "La CPU es el cerebro del ordenador, responsable de ejecutar las instrucciones de los programas y coordinar el funcionamiento de todos los componentes del sistema. Se inserta en un zócalo específico en la placa madre y realiza operaciones de procesamiento y cálculo que permiten al sistema ejecutar tareas y aplicaciones. La velocidad y capacidad de la CPU son determinantes clave del rendimiento general del ordenador.",
        caracteristicas: [
            "Procesamiento central: Realiza operaciones aritméticas y lógicas esenciales para ejecutar programas y procesos.",
            "Ciclo de reloj: Opera a una velocidad medida en GHz, determinando cuántos ciclos de procesamiento puede realizar por segundo.",
            "Núcleos múltiples: Puede tener varios núcleos que permiten ejecutar múltiples tareas simultáneamente (multitarea).",
            "Caché integrada: Incluye memoria caché para almacenar datos y instrucciones de uso frecuente, mejorando la velocidad de acceso."
        ],
        imagenes: [
            "https://concepto.de/wp-content/uploads/2014/08/CPU-e1551228076500.jpg",
            "https://i.insider.com/60402d8eb46d720018b04c1f?width=700",
            "https://geekawhat.com/wp-content/uploads/2022/05/Best-CPU-Motherboards-2022-Ryzen-3-3100.jpg",
            "https://depor.com/resizer/BFBMUAG_UVWeIO1oxcX8YSea814=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FLPYCSJC2NCYLBRA2U6552X7IE.jpg"
        ]
    },
    { 
        titulo: "Ranuras de memoria RAM", 
        descripcion: "Las ranuras de memoria RAM son los espacios en la placa madre donde se instalan los módulos de memoria RAM. La memoria RAM (Memoria de Acceso Aleatorio) es esencial para almacenar datos temporales y rápidos que la CPU necesita para ejecutar tareas y procesos. Una mayor cantidad de RAM permite al sistema manejar más aplicaciones simultáneamente y mejorar el rendimiento general del ordenador.",
        caracteristicas: [
            "Expansión de memoria: Permite instalar módulos de RAM para aumentar la capacidad de memoria del sistema.",
            "Compatibilidad: Soporta diferentes tipos y velocidades de módulos de RAM, como DDR4 o DDR5.",
            "Número de ranuras: Puede tener varias ranuras en la placa base para permitir la instalación de múltiples módulos de RAM.",
            "Configuración dual/triple/cuádruple canal: Permite el uso de varias ranuras en configuraciones de canal para mejorar el rendimiento de la memoria."
        ],        
        imagenes: [
            "https://previews.123rf.com/images/maabaff/maabaff2101/maabaff210100024/161789528-cuatro-ranuras-para-m%C3%B3dulos-de-memoria-ram-ddr4-en-una-placa-base-de-pc-negra-moderna-componentes.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgSCAKEO_fWQ5k0Gh0PXa1BQpRUSg8R664w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWY4czeQawi0ivp2ZjrHRMZHta2FnNYlwtz4fKiDA7tU3JWsAJNfJO9BMVWYzaOhFApZk&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ7DDLtUVwsp1oeOmI9OhtN6SkzO8vMkcpzFb59wvuLg6EQFxkc56dfCXMtsZ1UcoLT0&usqp=CAU"
        ]
    },
    { 
        titulo: "Conector del cable IDE", 
        descripcion: " El conector IDE (Integrated Drive Electronics) es un puerto que se utilizaba para conectar discos duros y unidades ópticas a la placa madre mediante cables IDE. Aunque esta interfaz ha sido en gran parte reemplazada por el estándar SATA, todavía puede encontrarse en algunas placas madre para mantener la compatibilidad con dispositivos más antiguos que aún usan cables IDE.",
        caracteristicas: [
            "Conexión paralela: Utiliza una interfaz paralela para conectar discos duros y otros dispositivos de almacenamiento.",
            "Conector de 40 pines: Generalmente tiene un conector de 40 pines en el cable y un conector de 39 pines en el dispositivo (incluyendo un pin de clave).",
            "Cables de datos: Transmite datos entre la placa base y los dispositivos de almacenamiento con varios cables internos para los diferentes bits de datos.",
            "Configuración maestra/esclava: Permite configurar los dispositivos conectados en modo maestro o esclavo para gestionar el acceso a los datos."
        ],        
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubUUj0CCPYcPB0qr-WcIfvClLFHXiW4avqA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Qdfmut-2EUjwb9HNsvjFWa5lBqRPTP00bJVJq5RBKbU63xIA3jkxIykKvYwhynTknHM&usqp=CAU",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRoKwiTGZtsuRqpdY2SdT4kkcJ7U1vb6IhinVOZsJd6IsuLpTjMR_KLVvHkKHeahBVnpg0NXezLkEWmfwD2-pqBaClfwZ1Y-yz8x1PlkWygP318EdlLY3yKHYlLfG11aHXKZwMfAN8NcG0/w1200-h630-p-k-no-nu/17.jpg",
            "https://i0.wp.com/3.bp.blogspot.com/_eObM_uOWHAU/SAVIyHInc8I/AAAAAAAAAFU/4B0VMByOpPs/s320/1.JPG"
        ]
    },
    { 
        titulo: "BIOS (Sistema Básico de Entrada/Salida)", 
        descripcion: "El BIOS es un firmware almacenado en un chip de la placa madre que realiza una serie de tareas importantes durante el proceso de arranque del ordenador. Inicializa y prueba el hardware del sistema y proporciona una interfaz para configurar ajustes como la secuencia de arranque y las opciones de hardware. En las placas madre más recientes, el BIOS ha sido reemplazado por UEFI (Interfaz de Firmware Extensible Unificada), que ofrece una interfaz gráfica más avanzada y más opciones de configuración.",
        caracteristicas: [
            "Inicialización del hardware: Realiza pruebas y configura los componentes del sistema al encender la computadora.",
            "Configuración del sistema: Permite ajustar parámetros básicos del hardware, como el orden de arranque y la configuración de dispositivos.",
            "Arranque del sistema operativo: Carga el gestor de arranque del sistema operativo desde el disco duro o dispositivo de arranque.",
            "Actualización del firmware: Ofrece actualizar el firmware para mejorar la compatibilidad y agregar nuevas funcionalidades."
        ],        
        imagenes: [
            "https://phoenixnap.com/glossary/wp-content/uploads/2024/05/what-is-bios.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcBY9YfW-qa5cNADBnvj0l-jYY53Iys9t-Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrat6FNbYD5WfmkFW__l1AUkxxKtPUgWiLbQ&s",
            "https://www.shutterstock.com/image-photo/sochi-russia-march-22-2022-260nw-2140742619.jpg"
        ]
    }
];