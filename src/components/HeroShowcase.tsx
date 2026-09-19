"use client";

import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import styles from "./HeroShowcase.module.css";

const tabs = ["El producto", "La compra", "El pedido"];
const colors = [{ name: "Ciruela", hex: "#604269" }, { name: "Oliva", hex: "#66725a" }, { name: "Terracota", hex: "#ac6c52" }];
const money = (amount: number) => `$${new Intl.NumberFormat("es-AR").format(amount)}`;
type Order = { color: string; shipping: boolean; total: number };

export default function HeroShowcase() {
  const [tab, setTab] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [inCart, setInCart] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const color = colors[colorIndex];
  const total = 18000 + (shipping ? 3500 : 0);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    setTab(next);
    tabRefs.current[next]?.focus();
  }

  function reset() { setTab(0); setColorIndex(0); setInCart(false); setShipping(false); setOrder(null); }

  return (
    <section id="showcase" className={styles.showcase} aria-label="Ejemplo interactivo de una tienda online">
      <div className={styles.header}><span>Una tienda empieza por los detalles.</span><span>Demo interactiva · Datos de ejemplo</span></div>
      <div className={styles.navigation}>
        <div role="tablist" aria-label="Recorrido de la tienda" className={styles.tabs}>
          {tabs.map((label, index) => <button key={label} type="button" ref={(node) => { tabRefs.current[index] = node; }} id={`demo-tab-${index}`} role="tab" aria-selected={tab === index} aria-controls={`demo-panel-${index}`} tabIndex={tab === index ? 0 : -1} onClick={() => setTab(index)} onKeyDown={(event) => navigate(event, index)}><span>0{index + 1}</span>{label}</button>)}
        </div>
        <button type="button" className={styles.reset} onClick={reset} aria-label="Reiniciar la demostración"><RotateCcw size={15} /><span>Reiniciar</span></button>
      </div>
      <div id={`demo-panel-${tab}`} role="tabpanel" aria-labelledby={`demo-tab-${tab}`} tabIndex={0} className={styles.panel}>
        {tab === 0 && <div className={styles.product}>
          <div className={styles.artwork}>
            <span className={styles.caption}>PAPELERÍA / PRODUCTO DE EJEMPLO</span>
            <div className={styles.notebook} style={{ "--cover": color.hex } as CSSProperties} aria-hidden="true"><div className={styles.cover}><span>Ideas<br />en papel.</span><small>CUADERNO / Nº 01</small></div><div className={styles.elastic} /></div>
            <span className={styles.artworkNote}>Una idea toma forma.</span>
          </div>
          <div className={styles.productInfo}>
            <span className={styles.eyebrow}>01 / Elegí un producto</span>
            <h2>Para lo que todavía<br /><em>no tiene título.</em></h2>
            <p>Cuaderno A5 · 80 hojas lisas · Tapa entelada</p>
            <strong className={styles.price}>{money(18000)} <small>ARS</small></strong>
            <fieldset className={styles.colors}><legend>Color: <strong>{color.name}</strong></legend>{colors.map((option, index) => <button type="button" key={option.name} aria-label={`Color ${option.name}`} aria-pressed={colorIndex === index} style={{ "--swatch": option.hex } as CSSProperties} onClick={() => { setColorIndex(index); setInCart(false); }}>{colorIndex === index && <Check size={15} />}</button>)}</fieldset>
            <button type="button" className={styles.primary} onClick={() => { setInCart(true); setOrder(null); setTab(1); }}><span>Probar la compra</span><ArrowRight size={18} /></button>
            <p className={styles.help}>Elegí un color y seguí el recorrido. Es una compra de prueba.</p>
          </div>
        </div>}
        {tab === 1 && <div className={styles.checkout}>
          <div><span className={styles.eyebrow}>02 / Así compra tu cliente</span><h2>Todo a mano.<br /><em>Hasta el último paso.</em></h2>
            {inCart ? <><div className={styles.cartItem}><span className={styles.miniCover} style={{ background: color.hex }} /><div><strong>Cuaderno A5</strong><span>{color.name} · 1 unidad</span></div><strong>{money(18000)}</strong></div><fieldset className={styles.delivery}><legend>¿Cómo lo recibirías?</legend><label><input type="radio" name="demo-delivery" checked={!shipping} onChange={() => setShipping(false)} /><span>Retiro por el local<small>Sin costo</small></span></label><label><input type="radio" name="demo-delivery" checked={shipping} onChange={() => setShipping(true)} /><span>Envío a domicilio<small>{money(3500)} · Tarifa de ejemplo</small></span></label></fieldset></> : <div className={styles.empty}><p>Tu carrito de prueba está vacío.</p><button type="button" className={styles.textButton} onClick={() => setTab(0)}>Elegir un cuaderno <ArrowRight size={16} /></button></div>}
          </div>
          <aside className={styles.summary}><span className={styles.eyebrow}>Resumen de la compra</span><dl><div><dt>Producto</dt><dd>{money(inCart ? 18000 : 0)}</dd></div><div><dt>Envío</dt><dd>{inCart && shipping ? money(3500) : "Sin costo"}</dd></div><div className={styles.total}><dt>Total</dt><dd>{money(inCart ? total : 0)} <small>ARS</small></dd></div></dl><button type="button" className={styles.primary} disabled={!inCart} onClick={() => { setOrder({ color: color.name, shipping, total }); setTab(2); }}><span>Confirmar compra de prueba</span><ArrowRight size={17} /></button><p>No se cobra ni se envía nada. No necesitás ingresar datos personales.</p></aside>
        </div>}
        {tab === 2 && <div className={styles.orderView}>
          <div><span className={styles.eyebrow}>03 / Del lado de tu negocio</span><h2>El pedido llega.<br /><em>Vos tenés el detalle.</em></h2><p>Producto, variante y forma de entrega: la información que tu equipo necesita para preparar la compra.</p><button type="button" className={styles.textButton} onClick={() => setTab(order ? 1 : 0)}>{order ? "Volver a la compra" : "Crear un pedido de prueba"}<ArrowRight size={16} /></button></div>
          <div className={styles.receipt}><span className={styles.eyebrow}>{order ? "Pedido de prueba #001" : "Todavía no hay pedidos"}</span>{order ? <><h3>¡Listo, ya está registrado!</h3><p>1 × Cuaderno A5 · {order.color}</p><dl><div><dt>Entrega</dt><dd>{order.shipping ? "Envío a domicilio" : "Retiro por el local"}</dd></div><div><dt>Total de ejemplo</dt><dd>{money(order.total)} ARS</dd></div></dl><div className={styles.confirmed}><Check size={16} />Compra simulada confirmada</div></> : <p>Cuando confirmes la compra, acá vas a ver el resumen del pedido que armaste.</p>}<small>Demostración · Sin cobro real</small></div>
        </div>}
      </div>
      <p className={styles.footer}>Probá el recorrido. El diseño de tu tienda se trabaja con tu marca y tu catálogo.</p>
    </section>
  );
}
