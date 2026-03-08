// src/pages/MaterialesDynamic.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import { materialesData } from '../data/MaterialesData';
import '../App.css';

const MaterialesDynamic = () => {
    const { curso } = useParams();
    const navigate = useNavigate();
    const data = materialesData[curso.toLowerCase()];

    if (!data) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Página no encontrada</h1>
                <button className="btn-primary" onClick={() => navigate('/materiales')}>
                    Volver a Materiales
                </button>
            </div>
        );
    }

    const sectionCardStyle = {
        maxWidth: '900px',
        margin: '0 auto 1.5rem',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
    };

    const listStyle = {
        paddingLeft: '1.5rem',
        color: '#444',
        lineHeight: '1.7',
        margin: 0
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <PageHero
                title={data.title}
                subtitle={data.subtitle}
            />

            <section style={sectionCardStyle}>
                <h2 style={{ color: '#181760', marginBottom: '1rem', textAlign: 'center' }}>
                    Lista de Útiles
                </h2>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <a
                        href={data.pdf}
                        download
                        className="btn-primary"
                        style={{ display: 'inline-block', textDecoration: 'none', padding: '0.8rem 1.5rem' }}
                    >
                        📄 Descargar lista de útiles (PDF)
                    </a>
                </div>

                {data.sections.map((section, sIdx) => (
                    <React.Fragment key={sIdx}>
                        <h3 style={{ color: '#181760', marginBottom: '0.75rem' }}>
                            {section.heading}
                        </h3>
                        <ul style={{ ...listStyle, marginBottom: '1.5rem' }}>
                            {section.items.map((item, iIdx) => (
                                <li key={iIdx} style={{ marginBottom: '0.6rem' }}>{item}</li>
                            ))}
                        </ul>
                    </React.Fragment>
                ))}
            </section>

            <section style={{ ...sectionCardStyle, backgroundColor: '#fffbe6', border: '1px solid #f3e7a5' }}>
                <h2 style={{ color: '#181760', marginBottom: '1rem', textAlign: 'center' }}>
                    Importante
                </h2>
                <ul style={listStyle}>
                    {data.importante.map((item, index) => (
                        <li key={index} style={{ marginBottom: '0.8rem' }}>{item}</li>
                    ))}
                </ul>
            </section>

            <CTA
                title="¿Necesitas más información?"
                text="Si tienes dudas sobre la lista o la entrega de materiales, contáctanos y te orientamos."
                primaryLabel="Ir a Contacto"
                onPrimaryClick={() => navigate('/contacto')}
                secondaryLabel="Volver a Materiales"
                onSecondaryClick={() => navigate('/materiales')}
            />
        </div>
    );
};

export default MaterialesDynamic;
