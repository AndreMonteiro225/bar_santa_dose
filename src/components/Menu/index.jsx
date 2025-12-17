'use client';

import React, { useState, useEffect } from 'react';
import { Search, Utensils, Wine } from 'lucide-react';
import styles from './styles.module.css';
import { foodMenu, drinkMenu } from '@/data/menu';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('food');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const sourceData = activeTab === 'food' ? foodMenu : drinkMenu;
    const lowerTerm = searchTerm.toLowerCase();
    
    const results = sourceData.filter(item => 
      item.name.toLowerCase().includes(lowerTerm) || 
      item.desc.toLowerCase().includes(lowerTerm) ||
      item.category.toLowerCase().includes(lowerTerm)
    );
    
    setFilteredItems(results);
  }, [activeTab, searchTerm]);

  return (
    <section id="food" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subTitle}>Sabores do Brasil</span>
          <h3 className={styles.title}>Cardápio da Casa</h3>
        </div>

        <div className={styles.controls}>
          {/* Tabs */}
          <div className={styles.tabGroup}>
            <button
              onClick={() => setActiveTab('food')}
              className={`${styles.tabBtn} ${activeTab === 'food' ? styles.activeTab : ''}`}
            >
              <Utensils size={16} />
              Petiscos & Pratos
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`${styles.tabBtn} ${activeTab === 'drinks' ? styles.activeTab : ''}`}
            >
              <Wine size={16} />
              Bebidas
            </button>
          </div>

          {/* Search */}
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="O que vamos pedir hoje?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.name} className={styles.cardImage} />
                  <span className={styles.priceTag}>{item.price}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <div className={styles.cardCategory}>
                    <span className={styles.dot}></span>
                    {item.category}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '2rem'}}>
              <p>Ops! Não achamos nada com esse nome.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;