import React from 'react';
import { Beer, MapPin, Phone, Instagram, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/Menu';
import styles from './page.module.css';

/**
 * PAGE - SERVER COMPONENT
 * Como esta é a raiz do App Router, ela é um Server Component por padrão.
 * Importamos componentes 'use client' (Navbar, MenuSection) apenas onde a interatividade é necessária.
 * O restante do conteúdo estático (Hero, About, Footer) é renderizado no servidor para melhor performance SEO.
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* HERO SECTION - Server Component */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
            alt="Samba e Drinks" 
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.heroContent}>
          <div>
            <span className={styles.badge}>
              <Beer size={14} /> Alma Brasileira
            </span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Boemia, Sabor <br/>
            <span className={styles.goldText}>& Samba no Pé</span>
          </h1>
          
          <p className={styles.heroDesc}>
            A tradição do boteco com a sofisticação da alta gastronomia. Venha viver a experiência Santa Dose.
          </p>
          
          <div className={styles.heroButtons}>
            <a href="#food" className={styles.btnPrimary}>Ver Cardápio</a>
            <a href="#contact" className={styles.btnOutline}>Reservar Mesa</a>
          </div>
        </div>
      </section>

      {/* MENU SECTION - Client Component (Interativo) */}
      <MenuSection />

      {/* ABOUT & CONTACT - Server Component */}
      <div className={styles.aboutContainer}>
        {/* About */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutGrid}>
            <div className={styles.imageContainer}>
              <div className={styles.frame}></div>
              <img 
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800" 
                alt="Interior do Santa Dose" 
                className={styles.aboutImage}
              />
            </div>
            
            <div>
              <span className={styles.badge} style={{background: 'transparent', color: 'var(--gold)', paddingLeft: 0}}>
                Nossa História
              </span>
              <h2 className={styles.aboutTitle}>Do Casarão para o seu Copo</h2>
              <p className={styles.aboutText}>
                O <strong>Santa Dose</strong> é mais que um bar, é um ponto de encontro. Resgatamos a essência dos botequins clássicos com um toque contemporâneo.
              </p>
              <p className={styles.aboutText}>
                Aqui o samba é raiz, a cerveja é gelada e a comida tem aquele tempero de vó com apresentação de chef.
              </p>
              
              <div className={styles.features}>
                <div className={styles.featureBox}>
                  <h4 style={{color: 'var(--wheat)'}}>Música ao Vivo</h4>
                  <p style={{fontSize: '0.75rem', color: '#D7CCC8'}}>Rodas de Samba & Chorinho</p>
                </div>
                <div className={styles.featureBox}>
                  <h4 style={{color: 'var(--wheat)'}}>Happy Hour</h4>
                  <p style={{fontSize: '0.75rem', color: '#D7CCC8'}}>Drinks em dobro ter-qui</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.footerGrid}>
            
            {/* Contato */}
            <div>
              <h4 style={{fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '1.5rem'}}>
                Santa Dose
              </h4>
              <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                  <MapPin className="shrink-0" size={20} color="var(--gold)" />
                  <span>Rua da Boemia, 1958<br/>Lapa, Rio de Janeiro - RJ</span>
                </li>
                <li className={styles.footerItem}>
                  <Phone className="shrink-0" size={20} color="var(--gold)" />
                  <span>(21) 99999-9999</span>
                </li>
                <li className={styles.footerItem}>
                  <Instagram className="shrink-0" size={20} color="var(--gold)" />
                  <span>@santadose.rio</span>
                </li>
              </ul>
            </div>

            {/* Placeholder Mapa */}
            <div style={{height: '12rem', background: '#3E2723', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #5D4037'}}>
               <span style={{color: 'var(--wheat)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold'}}>
                 <MapPin size={32} /> Ver no Mapa
               </span>
            </div>

            {/* Horários */}
            <div>
              <h4 style={{color: 'var(--wheat)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Clock size={20} color="var(--gold)" /> Horário de Samba
              </h4>
              <ul style={{fontSize: '0.875rem', color: 'rgba(245, 222, 179, 0.6)'}}>
                <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3E2723', paddingBottom: '0.5rem', marginBottom: '0.5rem'}}>
                  <span>Terça a Quinta</span> <span style={{color: 'var(--gold)'}}>17h - 00h</span>
                </li>
                <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3E2723', paddingBottom: '0.5rem', marginBottom: '0.5rem'}}>
                  <span>Sexta e Sábado</span> <span style={{color: 'var(--gold)'}}>17h - 03h</span>
                </li>
                <li style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Domingo (Feijoada)</span> <span style={{color: 'var(--gold)'}}>12h - 20h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.copy}>
            <p>&copy; 2024 Santa Dose Bar. Feito com dendê e Next.js.</p>
          </div>
        </footer>
      </div>
      
      {/* Botão Flutuante (Client side element inside server component is valid if simple HTML, but sticking to semantic structure) */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50,
          background: '#25D366', color: 'white', padding: '1rem',
          borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '2px solid white'
        }}
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </main>
  );
}