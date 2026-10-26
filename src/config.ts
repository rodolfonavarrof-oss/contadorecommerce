// Datos del sitio. Completa los valores marcados como PENDIENTE antes de publicar.

export const SITE = {
  name: 'Contador Ecommerce',
  tagline: 'Contabilidad para tiendas online en Chile',
  url: 'https://contadorecommerce.cl',
  description:
    'Contabilidad para tiendas online en Chile. Tus números claros cada mes, impuestos al día, facturas de compra de Meta, Google y Shopify, y un contador que te enseña a leer tu negocio.',
  city: 'Santiago',
  country: 'CL',
  founder: {
    name: 'Rodolfo Navarro',
    role: 'Contador y cofundador de GALIA',
    url: 'https://rodolfo.cl',
  },
};

// Número de WhatsApp Business con código de país, solo dígitos.
export const WHATSAPP_NUMBER = '56978000715';

// PENDIENTE: clave pública de Klaviyo (Company ID, 6 caracteres) y el ID de la lista "Leads newsletter".
export const KLAVIYO_PUBLIC_KEY = '';
export const KLAVIYO_LIST_ID = '';

export function whatsappLink(text = 'Hola, quiero saber más sobre Contador Ecommerce') {
  if (!/^\d{10,13}$/.test(WHATSAPP_NUMBER)) return '#contacto';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const PLANS = [
  {
    name: 'Arranque',
    price: '$80.000',
    priceValue: 80000,
    currency: 'CLP',
    audience: 'Tiendas que venden hasta $5 millones al mes',
    features: [
      'F29 y contabilidad al día',
      'Facturas de compra de servicios digitales',
      'Reporte mensual de utilidad',
      'Respuesta en 48 h hábiles',
    ],
    note: 'Cupos limitados.',
  },
  {
    name: 'Básico',
    price: '3 UF',
    priceValue: 3,
    currency: 'CLF',
    audience: 'Hasta $10 millones al mes',
    features: [
      'Todo lo de Arranque',
      '1 trabajador incluido',
      'Cuadre ventas vs boletas',
      'Operación Renta con 50% de descuento',
    ],
  },
  {
    name: 'Medio',
    price: '4,5 UF',
    priceValue: 4.5,
    currency: 'CLF',
    audience: '$10 a $25 millones al mes, inviertes en Meta',
    featured: true,
    features: [
      'Reporte semanal de utilidad',
      'Conciliación de pasarelas y banco',
      'Metas de inversión en Meta',
      'Operación Renta incluida',
      'Respuesta en 24 h hábiles',
    ],
  },
  {
    name: 'Experto',
    price: '7 UF',
    priceValue: 7,
    currency: 'CLF',
    audience: '$25 a $60 millones al mes',
    features: [
      'Margen por canal y producto',
      'Planificación tributaria semestral',
      'Reunión mensual, online o presencial',
      'Respuesta el mismo día hábil',
    ],
  },
];

export const FAQS = [
  {
    q: '¿Y si ya tengo contador?',
    a: 'Nos encargamos del cambio: pedimos la información a tu contador actual, revisamos cómo está todo y partimos el mes siguiente.',
  },
  {
    q: '¿Qué pasa si tengo meses atrasados o facturas de compra sin emitir?',
    a: 'Lo revisamos al entrar y te cotizamos la puesta al día por separado, antes de hacer cualquier trabajo.',
  },
  {
    q: '¿Trabajan con Mercado Libre?',
    a: 'Sí. Registramos tus ventas, comisiones y depósitos de Mercado Pago, igual que con Shopify, Jumpseller o WooCommerce.',
  },
  {
    q: '¿Cuánto demoran en responder?',
    a: 'Según tu plan, entre el mismo día hábil y 48 horas hábiles. Las dudas más comunes también están explicadas en nuestra biblioteca de clases.',
  },
  {
    q: '¿Tengo que hacer algo cada mes?',
    a: 'Casi nada: darnos acceso como colaborador a tu tienda y a Meta, y avisarnos si tuviste un gasto fuera de lo normal.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'No, todos los valores son + IVA. Los planes en UF se cobran al valor de la UF del día de facturación.',
  },
];
