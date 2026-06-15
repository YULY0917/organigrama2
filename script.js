const datos = {
  subsecretaria: {
    titulo: "Subsecretario/a",
    nombre: "María Elisa Cabezón Otero",
    cargo: "Subsecretaria de Previsión Social",
    texto: "De conformidad con lo dispuesto en el artículo 41 de la Ley N°20.255 de 2008, el/la Subsecretario/a de Previsión Social es el/la jefe/a superior de la Subsecretaría de Previsión Social, órgano de colaboración inmediata del Ministerio del Trabajo y Previsión Social."
  },

  gabinete: {
    titulo: "Gabinete",
    nombre: "Cristian Olivares Pino",
    cargo: "Jefe de Gabinete",
    texto: "Ejerce el control general en la gestión de la Subsecretaría de Previsión Social, coordinando Divisiones, Direcciones, Unidades y Subunidades para el funcionamiento eficiente del servicio y la implementación de los productos estratégicos."
  },

  auditoria: {
    titulo: "Auditoría Interna",
    nombre: "Johnny Astudillo Rojas",
    cargo: "Jefatura Auditoría Interna",
    texto: "Unidad encargada de prestar asesoría especializada en materias de auditoría y control interno a la autoridad superior de la Institución."
  },

  fiscalia: {
    titulo: "División Fiscalía",
    nombre: "Jaime Ale Tapia",
    cargo: "Fiscal",
    texto: "División responsable de velar por la legalidad y control de las actuaciones y actos administrativos de la Subsecretaría, asesorando a las distintas áreas para el cumplimiento de la normativa vigente."
  },

  asesores: {
    titulo: "Asesores",
    nombre: "Macarena Pinto Gutiérrez",
    cargo: "Jefatura Asesores",
    texto: "Área encargada de proporcionar apoyo técnico y político a la Subsecretaría mediante propuestas de elaboración y modificación del marco normativo previsional."
  },

  prensa: {
    titulo: "Unidad de Prensa y Comunicaciones",
    nombre: "Eugenio Figueroa Bustos",
    cargo: "Jefatura Unidad de Prensa y Comunicaciones",
    texto: "Unidad responsable de generar contenidos informativos sobre las políticas públicas y coordinar su entrega a los medios de comunicación."
  },

  participacion: {
    titulo: "Unidad de Participación Ciudadana y Género",
    nombre: "Katherine Quijada López",
    cargo: "Jefatura Unidad de Participación Ciudadana y Género",
    texto: "Unidad encargada de implementar mecanismos de participación ciudadana e incorporar la perspectiva de género en las políticas públicas."
  },

  educacion: {
    titulo: "Dirección de Educación Previsional",
    nombre: "Rodrigo Pérez Fuentes",
    cargo: "Jefatura Dirección de Educación Previsional",
    texto: "Dirección encargada de liderar y coordinar los procesos de educación previsional para promover la cultura previsional en Chile."
  },

  estudios: {
    titulo: "Dirección de Estudios Previsionales",
    nombre: "Ivonne Bueno Velasco",
    cargo: "Jefatura Dirección de Estudios Previsionales",
    texto: "Dirección responsable del análisis, evaluación y propuesta de políticas en el ámbito de la previsión social."
  },

  coordinacion: {
    titulo: "Dirección de Coordinación Institucional",
    nombre: "Katia Soto Cárcamo",
    cargo: "Jefatura Dirección de Coordinación Institucional",
    texto: "Dirección encargada de coordinar a los servicios relacionados para asegurar la calidad de los procesos institucionales."
  },

  legislativa: {
    titulo: "División de Asesoría Legislativa y Seguridad Laboral",
    nombre: "Pedro Contador Abraham",
    cargo: "Jefatura División de Asesoría Legislativa y Seguridad Laboral",
    texto: "División encargada de asesorar en la preparación y tramitación de proyectos de ley en materias previsionales y de seguridad laboral."
  },

  administracion: {
    titulo: "Dirección de Administración y Finanzas",
    nombre: "Lidia Lueiza Baeza",
    cargo: "Jefatura Dirección de Administración y Finanzas",
    texto: "Dirección encargada de administrar y supervisar los recursos financieros, presupuestarios y materiales de la Subsecretaría."
  },

  ti: {
    titulo: "Dirección de Tecnologías de la Información",
    nombre: "Álvaro Gazmuri Cornejo",
    cargo: "Jefatura Dirección de Tecnologías de la Información",
    texto: "Dirección encargada de proponer, gestionar y ejecutar las actividades relacionadas con el desarrollo estratégico y operacional de las tecnologías de la información."
  }
};

function abrirPopup(id) {
  const info = datos[id];

  if (!info) {
    alert("Información pendiente de incorporar.");
    return;
  }

  alert(
    info.titulo + "\n\n" +
    info.nombre + "\n" +
    info.cargo + "\n\n" +
    info.texto
  );
}
