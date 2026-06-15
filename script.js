const datos = {
  subsecretaria: {
    titulo: "Subsecretario/a",
    nombre: "María Elisa Cabezón Otero",
    cargo: "Subsecretaria de Previsión Social",
    texto: `De conformidad con lo dispuesto en el artículo 41 de la ley Nº20.255 de 2008, el/la Subsecretario/a de Previsión Social es el/la jefe/a Superior de la Subsecretaría de Previsión Social, órgano de colaboración inmediata del Ministerio del Trabajo y Previsión Social.`
  },

  gabinete: {
    titulo: "Gabinete",
    nombre: "Cristian Olivares Pino",
    cargo: "Jefe de Gabinete",
    texto: `Ejerce el control general en la gestión de la Subsecretaría de Previsión Social, a través de acciones de coordinación entre sus distintas Divisiones, Direcciones, Unidades y Subunidades para el funcionamiento eficiente del servicio y la implementación de los productos estratégicos. Además, asesora a la autoridad del servicio en todas las materias relacionadas con el quehacer técnico y administrativo de la Subsecretaría.
    
    Gabinete se relacionará directamente con la autoridad entregando la información e insumos necesarios para la toma de decisiones y el adecuado control interno de la Institución.
    
    Este se relaciona de manera directa con los jefes/as de Gabinete de los servicios relacionados del sector previsional con el objetivo de entregar los lineamientos de la autoridad y supervisar la implementación de las políticas y el desarrollo del programa de Gobierno. `
  },

  auditoria: {
    titulo: "Auditoría Interna",
    nombre: "Johnny Astudillo Rojas",
    cargo: "Jefatura Auditoría Interna",
    texto: `Unidad que depende directamente del Subsecretario/a de Previsión Social, encargada de prestar asesoría especializada en materias de auditoría y control interno a la autoridad superior de la Institución, con el objetivo de evaluar el funcionamiento y el cumplimiento de la normativa en los proceso contables, financieros, administrativos y estratégicos de la Subsecretaría de Previsión Social. 
    Sus funciones son:
        - Evaluar en forma permanente los sistemas de control interno institucional y proponer las recomendaciones para su mejoramiento.
        -	Evaluar el grado de economía y eficiencia con que se utilizan los recursos humanos, financieros y materiales.
        -	Promover la adopción de mecanismos de autocontrol en las unidades operativas de la organización.
        -	Verificar que la gestión de la institución se enmarque en los lineamientos estratégicos definidos y que las decisiones de la autoridad se ajusten al ordenamiento jurídico que rige.
        -	Elaborar y proponer para su aprobación el Programa Anual de Auditoría.
        -	Efectuar seguimiento de las recomendaciones y observaciones hechas a la administración durante los procesos de auditoría.
        -	Efectuar seguimiento de las medidas preventivas y correctivas emanadas de los informes de auditoría interna, aprobadas por la autoridad.
        -	Coordinar y facilitar las orientaciones emanadas del Consejo de Auditoría Interna General de Gobierno (CAIGG) y Auditoría Ministerial.`
  },

  fiscalia: {
    titulo: "División Fiscalía",
    nombre: "Jaime Ale Tapia",
    cargo: "Fiscal",
    texto: `Vela por la legalidad y control de los actos administrativos de la Subsecretaría, asesorando jurídicamente a las distintas áreas del servicio.`
  },

  seguridad: {
    titulo: "Unidad de Seguridad de la Información y Protección de Datos Personales",
    nombre: "",
    cargo: "",
    texto: `Unidad vinculada al resguardo de la seguridad de la información y la protección de datos personales institucionales.`
  },

  participacion: {
    titulo: "Unidad de Participación Ciudadana y Género",
    nombre: "Katherine Quijada López",
    cargo: "Jefatura Unidad de Participación Ciudadana y Género",
    texto: `Implementa mecanismos de participación ciudadana e incorpora el enfoque de género en las políticas públicas de seguridad social.`
  },

  asesores: {
    titulo: "Asesores",
    nombre: "Macarena Pinto Gutiérrez",
    cargo: "Jefatura Asesores",
    texto: `Apoya la gestión técnica y política de la Subsecretaría, especialmente en propuestas normativas y políticas públicas previsionales.`
  },

  prensa: {
    titulo: "Unidad de Prensa y Comunicaciones",
    nombre: "Eugenio Figueroa Bustos",
    cargo: "Jefatura Unidad de Prensa y Comunicaciones",
    texto: `Genera contenidos informativos, coordina medios de comunicación, campañas, productos audiovisuales, redes sociales y sitio web institucional.`
  },

  educacion: {
    titulo: "Dirección de Educación Previsional",
    nombre: "Rodrigo Pérez Fuentes",
    cargo: "Jefatura Dirección de Educación Previsional",
    texto: `Lidera y coordina procesos de educación previsional para promover la cultura previsional en Chile.`
  },

  "u-educacion": {
    titulo: "Unidad de Educación Previsional",
    nombre: "Elizabeth Ramírez Piña",
    cargo: "Jefatura Unidad de Educación Previsional",
    texto: `Desarrolla estrategias educativas para difundir información previsional a la ciudadanía y contribuir a la cultura previsional.`
  },

  estudios: {
    titulo: "Dirección de Estudios Previsionales",
    nombre: "Ivonne Bueno Velasco",
    cargo: "Jefatura Dirección de Estudios Previsionales",
    texto: `Realiza análisis, evaluación, estudios y propuestas de políticas en previsión social, además del mantenimiento de bases de datos previsionales.`
  },

  observatorio: {
    titulo: "Unidad Observatorio Previsional",
    nombre: "Luis Figueroa Medizabal",
    cargo: "Jefatura Unidad Observatorio Previsional",
    texto: `Resguarda y procesa bases de datos administrativas, gestiona la Encuesta de Protección Social y produce estudios e indicadores previsionales.`
  },

  analisis: {
    titulo: "Unidad de Análisis de Políticas Previsionales",
    nombre: "",
    cargo: "",
    texto: `Elabora insumos para el análisis de la reforma previsional, políticas públicas, modelos de pronóstico, informes estadísticos y documentos técnicos.`
  },

  coordinacion: {
    titulo: "Dirección de Coordinación Institucional",
    nombre: "Katia Soto Cárcamo",
    cargo: "Jefatura Dirección de Coordinación Institucional",
    texto: `Coordina a los servicios relacionados para asegurar la calidad de los procesos institucionales y la continuidad operacional.`
  },

  atencion: {
    titulo: "Unidad de Atención Ciudadana y OIRS",
    nombre: "Romina Ibaceta Godoy",
    cargo: "Jefatura Unidad de Atención Ciudadana y OIRS",
    texto: `Administra y gestiona consultas, reclamos, sugerencias y felicitaciones, asegurando respuestas oportunas y dentro del marco legal.`
  },

  "coord-inst": {
    titulo: "Unidad de Coordinación y Seguimiento Legislativo",
    nombre: "Katherine Cáceres Fuentes",
    cargo: "Jefatura Unidad de Coordinación y Seguimiento Legislativo",
    texto: `Apoya el seguimiento, coordinación y gestión de proyectos con instituciones del sector y monitorea canales de atención para promover mejoras.`
  },

  legislativa: {
    titulo: "División de Asesoría Legislativa y Seguridad Laboral",
    nombre: "Pedro Contador Abraham",
    cargo: "Jefatura División de Asesoría Legislativa y Seguridad Laboral",
    texto: `Asesora en la preparación y tramitación de proyectos de ley en materias previsionales, seguridad y salud en el trabajo.`
  },

  admin: {
    titulo: "Dirección de Administración y Finanzas",
    nombre: "Lidia Lueiza Baeza",
    cargo: "Jefatura Dirección de Administración y Finanzas",
    texto: `Administra, gestiona y supervisa los recursos financieros, presupuestarios y materiales de la Subsecretaría.`
  },

  presupuesto: {
    titulo: "Unidad de Presupuesto, Finanzas y Control Sectorial",
    nombre: "Dan Muñoz Silva",
    cargo: "Jefatura Unidad de Presupuesto, Finanzas y Control Sectorial",
    texto: `Coordina, planifica, gestiona y controla el presupuesto institucional y monitorea la ejecución presupuestaria de servicios relacionados.`
  },

  "sub-presupuesto": {
    titulo: "Subunidad de Presupuesto y Control Sectorial",
    nombre: "",
    cargo: "",
    texto: `Apoya la gestión presupuestaria, el control sectorial y el seguimiento de la ejecución financiera institucional.`
  },

  contabilidad: {
    titulo: "Subunidad de Contabilidad",
    nombre: "Freddy Gómez Salgado",
    cargo: "Jefatura Subunidad de Gestión Financiera",
    texto: `Gestiona el registro, control y verificación contable y financiera de la Subsecretaría, generando información para la toma de decisiones.`
  },

  tesoreria: {
    titulo: "Subunidad de Tesorería",
    nombre: "Christian Pérez Díaz",
    cargo: "Jefatura Subunidad de Tesorería",
    texto: `Controla y maneja los recursos financieros de la Subsecretaría, velando por el cumplimiento de la normativa vigente.`
  },

  adquisiciones: {
    titulo: "Unidad de Adquisiciones y Servicios Generales",
    nombre: "Carla Miranda Soto",
    cargo: "Jefatura Unidad de Adquisiciones y Servicios Generales",
    texto: `Gestiona abastecimiento, servicios generales, compras, inventario, activos institucionales y funcionamiento de Oficina de Partes.`
  },

  partes: {
    titulo: "Oficina de Partes",
    nombre: "Jonathan Faundez González",
    cargo: "Jefatura Oficina de Partes",
    texto: `Gestiona la documentación oficial de ingreso y egreso de la Subsecretaría, manteniendo registro, despacho, control y custodia documental.`
  },

  inventario: {
    titulo: "Inventario",
    nombre: "",
    cargo: "",
    texto: `Área asociada al control, registro y resguardo de los bienes institucionales, dependiente de Adquisiciones y Servicios Generales.`
  },

  personas: {
    titulo: "Unidad de Gestión y Desarrollo de Personas",
    nombre: "Taty Orellana",
    cargo: "Jefatura Unidad de Gestión y Desarrollo de Personas",
    texto: `Gestiona políticas de desarrollo organizacional, administración del personal, capacitación, desempeño, bienestar y ciclo de vida laboral.`
  },

  control: {
    titulo: "Unidad de Control de Gestión",
    nombre: "Rigoberto Millacura Herrera",
    cargo: "Jefatura Unidad de Control de Gestión",
    texto: `Dirige procesos y sistemas de control de gestión, indicadores institucionales, PMG, CDC, matriz de riesgos y reportes de gestión.`
  },

  contratos: {
    titulo: "Unidad de Gestión de Contratos",
    nombre: "",
    cargo: "",
    texto: `Apoya la gestión, seguimiento y control de contratos institucionales, velando por su correcta ejecución y cumplimiento.`
  },

  ti: {
    titulo: "Dirección de Tecnologías de la Información",
    nombre: "Álvaro Gazmuri Cornejo",
    cargo: "Jefatura Dirección de Tecnologías de la Información",
    texto: `Gestiona el desarrollo estratégico y operacional de las tecnologías de la información, sistemas, infraestructura, seguridad y soporte tecnológico.`
  },

  sistemas: {
    titulo: "Unidad de Sistemas e Inteligencia de Negocios",
    nombre: "Renato Llantén Almonacid",
    cargo: "Jefatura Unidad de Sistemas e Inteligencia de Negocios",
    texto: `Diseña e implementa sistemas de información, automatización de procesos y modelos de inteligencia de negocios para apoyar la gestión institucional.`
  },

  infra: {
    titulo: "Unidad de Infraestructura, Soporte y Seguridad de la Información",
    nombre: "",
    cargo: "",
    texto: `Asegura la continuidad operativa de los servicios tecnológicos, infraestructura TI, soporte computacional y seguridad de la información.`
  }
};

function abrirPopup(id) {
  const info = datos[id];

  if (!info) {
    alert("Información pendiente de incorporar: " + id);
    return;
  }

  let mensaje = info.titulo + "\n\n";

  if (info.nombre) {
    mensaje += info.nombre + "\n";
  }

  if (info.cargo) {
    mensaje += info.cargo + "\n\n";
  }

  mensaje += info.texto;

  alert(mensaje);
}


function abrirPopup(id) {
  const info = datos[id];

  if (!info) {
    alert("Información pendiente de incorporar: " + id);
    return;
  }

  document.getElementById("popup-titulo").textContent = info.titulo;
  document.getElementById("popup-nombre").textContent = info.nombre || "";
  document.getElementById("popup-cargo").textContent = info.cargo || "";
  document.getElementById("popup-texto").textContent = info.texto;

  document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
