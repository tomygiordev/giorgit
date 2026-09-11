import { NavItem, MetricItem, PlanItem, FaqItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Solución", href: "#solucion" },
  { label: "Showcase", href: "#showcase" },
  { label: "Bento Tech", href: "#bento" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

export const METRICS_DATA: MetricItem[] = [
  {
    value: "+48%",
    label: "Tasa de Conversión",
    sublabel: "Optimizada para checkout sin fricción y 1-click",
    trend: "+3.2x benchmark",
    iconName: "TrendingUp"
  },
  {
    value: "< 0.6s",
    label: "Tiempo de Carga",
    sublabel: "Core Web Vitals 100/100 en Google Lighthouse",
    trend: "Cero retrasos",
    iconName: "Zap"
  },
  {
    value: "99.9%",
    label: "Uptime Edge Global",
    sublabel: "Sin caídas en CyberMonday, HotSale ni picos de tráfico",
    trend: "Alta disponibilidad",
    iconName: "ShieldCheck"
  },
  {
    value: "0%",
    label: "Comisión por Venta",
    sublabel: "Tus ganancias son 100% tuyas, sin cargos abusivos",
    trend: "$0 comisión GiorgIT",
    iconName: "Coins"
  },
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: "starter",
    name: "Starter Store",
    tagline: "Para marcas en lanzamiento que buscan profesionalismo inmediato y 0% comisiones.",
    price: "Desde $890.000",
    period: "pago único de desarrollo",
    targetAudience: "Catálogo hasta 150 productos",
    features: [
      "Diseño a medida responsivo (Mobile First)",
      "Catálogo ultrarrápido con filtros instantáneos",
      "Checkout 1-click optimizado",
      "Pasarela Mercado Pago & Transferencia con 10% OFF",
      "WhatsApp Direct Buy (pedidos directos a chat)",
      "Panel de administración intuitivo",
      "SEO técnico inicial y Google Analytics 4",
      "Hosting Edge ultrarrápido incluido primer año",
      "0% comisión sobre tus ventas"
    ],
    ctaText: "Elegir Plan Starter",
  },
  {
    id: "growth",
    name: "Growth Scale",
    badge: "Más Elegido",
    popular: true,
    tagline: "Nuestra solución estrella para marcas que facturan y necesitan escalar su tasa de conversión.",
    price: "Desde $1.590.000",
    period: "pago único de desarrollo",
    targetAudience: "Catálogo ilimitado & Alto tráfico",
    features: [
      "Todo lo de Starter Store +",
      "Arquitectura Next.js 15 Server Components",
      "Integración Mercado Pago cuotas sin interés + Stripe internacional",
      "Cálculo dinámico de envíos (Andreani / Correo / OCA)",
      "Recuperación automatizada de carritos abandonados",
      "Buscador predictivo por IA y filtros facetados",
      "Multi-variantes de talles, colores y stock por depósito",
      "Métricas avanzadas y dashboard de rendimiento en vivo",
      "Optimización Core Web Vitals 95-100 garantizada",
      "30 días de soporte prioritario post-lanzamiento"
    ],
    ctaText: "Elegir Plan Growth",
  },
  {
    id: "enterprise",
    name: "Enterprise Headless",
    badge: "Personalizado",
    tagline: "Infraestructura a medida para marcas de gran escala, mayoristas o retail omnicanal.",
    price: "A Medida",
    period: "según requerimientos técnicos",
    targetAudience: "Volumen masivo & Conexión ERP",
    features: [
      "Todo lo de Growth Scale +",
      "Desarrollo Headless a medida con microservicios",
      "Sincronización bidireccional con ERP (Tango, SAP, Bejerman, etc.)",
      "Múltiples listas de precios (B2B Mayorista + B2C Minorista)",
      "Multi-moneda (ARS, USD, EUR, etc.) y multi-sucursal",
      "Auditoría de seguridad avanzada y mitigación DDoS",
      "Servidores Edge dedicados con caché distribuida",
      "Pruebas de carga para picos de HotSale (+100.000 visitas simultáneas)",
      "SLA 99.99% y soporte técnico 24/7"
    ],
    ctaText: "Cotizar Enterprise",
  },
];

export const COMPARISON_ROWS = [
  {
    feature: "Comisión por venta cobrada por la plataforma",
    giorgit: "0% (Tus ventas son 100% tuyas)",
    shopify: "2% a 0.5% + suscripción en USD",
    tiendanube: "2% a 0.5% por cada venta",
    woocommerce: "0% plataforma, pero hosting inestable",
    highlight: true,
  },
  {
    feature: "Velocidad de carga promedio en móviles",
    giorgit: "< 0.6 segundos (Instantáneo)",
    shopify: "2.8s - 4.5s (Pesada por apps)",
    tiendanube: "3.5s - 5.2s (Plantillas genéricas)",
    woocommerce: "3.2s - 6.0s (Sobrecarga de plugins)",
    highlight: true,
  },
  {
    feature: "Google Lighthouse Performance Score",
    giorgit: "95 - 100 / 100 (Verde)",
    shopify: "35 - 55 / 100 (Naranja/Rojo)",
    tiendanube: "30 - 50 / 100 (Naranja/Rojo)",
    woocommerce: "25 - 60 / 100 (Inconsistente)",
    highlight: true,
  },
  {
    feature: "Propiedad del código y base de datos",
    giorgit: "100% Tuyo, código abierto y transferible",
    shopify: "Alquiler perpetuo, no tienes el código",
    tiendanube: "Alquiler perpetuo, dependes del servicio",
    woocommerce: "Tuyo, pero requiere mantenimiento constante",
    highlight: false,
  },
  {
    feature: "Checkout optimizado para Argentina y LATAM",
    giorgit: "Nativo 1-Click con Mercado Pago, cuotas y DNI",
    shopify: "Requiere apps externas o redirecciones lentas",
    tiendanube: "Checkout estándar, pocas opciones de personalización",
    woocommerce: "Plugins de terceros propensos a errores",
    highlight: false,
  },
  {
    feature: "Comportamiento durante CyberMonday / HotSale",
    giorgit: "Auto-escalado Edge sin límites de tráfico",
    shopify: "Estable pero costos elevados por transacción",
    tiendanube: "Lentitud habitual en picos de demanda",
    woocommerce: "Frecuentes caídas de servidor y Error 500",
    highlight: true,
  },
  {
    feature: "Soporte técnico y desarrollo continuo",
    giorgit: "Directo con los ingenieros de GiorgIT",
    shopify: "Tickets en inglés / chatbots genéricos",
    tiendanube: "Tickets con demoras en temporadas altas",
    woocommerce: "Dependes de freelancers o arreglarlo tú mismo",
    highlight: false,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Por qué una tienda GiorgIT en lugar de Shopify o TiendaNube?",
    answer: "Las plataformas cerradas te cobran una tarifa mensual en dólares más una comisión del 1% al 3% de cada venta que realizas. A medida que tu negocio crece, pagas miles de dólares al año solo por mantener tu tienda activa. Además, sus plantillas prediseñadas son lentas y se caen en picos de demanda. Con GiorgIT obtienes una plataforma construida en Next.js que carga en menos de 0.6 segundos, maximiza la conversión y nunca te cobra comisiones sobre tus ventas. El código y los clientes son 100% de tu propiedad."
  },
  {
    question: "¿Cuánto tiempo demora el desarrollo y puesta en marcha?",
    answer: "Un proyecto Starter Store se entrega listo para facturar en un plazo de 15 a 18 días hábiles. El plan Growth Scale toma entre 20 y 25 días hábiles incluyendo integraciones avanzadas de pasarelas, cálculo automático de envíos y configuración de analítica. En proyectos Enterprise, definimos un roadmap a medida con entregas continuas."
  },
  {
    question: "¿Realmente no cobran NINGUNA comisión por venta?",
    answer: "Exacto. GiorgIT cobra únicamente por el diseño, desarrollo e implementación de la plataforma (y opcionalmente por mantenimiento mensual si decides contratarlo). Todo lo que vendas a través de Mercado Pago, transferencia o tarjeta va directo a tus cuentas bancarias sin ningún intermediario ni descuento de nuestra parte."
  },
  {
    question: "¿Puedo migrar mi catálogo de productos desde mi tienda actual?",
    answer: "¡Sí, totalmente! Realizamos la migración de tu catálogo completo de productos, imágenes, variantes de talles/colores, descripciones e incluso clientes e historial de pedidos desde plataformas como TiendaNube, Shopify, WooCommerce o planillas de Excel sin perder datos ni posicionamiento SEO."
  },
  {
    question: "¿Cómo gestiono los productos, precios y pedidos una vez entregada?",
    answer: "Te entregamos un panel de administración visual, intuitivo y moderno (accesible desde tu computadora o teléfono móvil). Podrás agregar productos, modificar precios masivamente, gestionar inventario, imprimir etiquetas de envío y ver estadísticas de ventas en tiempo real sin tocar una sola línea de código. Además, incluimos una sesión de capacitación personalizada para tu equipo."
  },
  {
    question: "¿Qué pasarelas de pago y métodos de envío se pueden integrar?",
    answer: "Integramos Mercado Pago (dinero en cuenta, tarjetas de débito/crédito, hasta 12 o 18 cuotas con y sin interés), transferencias bancarias con descuento automático personalizable, y Stripe o PayPal para cobros internacionales en USD. Para logística, conectamos cotización y generación de etiquetas en tiempo real con Andreani, Correo Argentino, OCA, Treggo o logística propia local."
  },
  {
    question: "¿Qué garantía y soporte técnico ofrecen tras el lanzamiento?",
    answer: "Todos nuestros planes incluyen un periodo de garantía de 30 a 60 días donde resolvemos cualquier eventualidad de inmediato. Además, ofrecemos planes de mantenimiento preventivo y soporte continuo para acompañar el crecimiento de tu tienda, actualizaciones de seguridad y nuevas funcionalidades a demanda."
  }
];