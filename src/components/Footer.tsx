// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="footer-content">
            <div>
                <h4 className="footer-title">Contacto</h4> 
                <p>Email: info@zenda.com</p>
                <p>Teléfono: 55-5555-5555</p>
            </div>
            
            <div>
                <h4 className="footer-title">Legal</h4>
                <p><a href="/privacidad" className="footer-link">Política de Privacidad</a></p>
                <p><a href="/terminos" className="footer-link">Términos y Condiciones</a></p>
            </div>
        
            <div>
                <h4 className="footer-title">Síguenos</h4>
                <p>@ZendaBebidas</p>
            </div>
        </div>
        
        <p className="footer-copyright">
            &copy; 2025 Zenda. Todos los derechos reservados.
        </p>
    </footer>
);

export default Footer;