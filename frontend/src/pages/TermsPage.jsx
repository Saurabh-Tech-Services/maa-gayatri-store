import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './PolicyPage.css';

const TermsPage = () => {
  return (
    <>
      <Meta title="Terms & Conditions | Maa Gayatri General Store" description="Read the terms and conditions for using the Maa Gayatri General Store website and services." />
      <div className="policy-page">
        <div className="container">
          <header className="policy-header">
            <h1>Terms & Conditions</h1>
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </header>
          <div className="policy-content">
            <p>Welcome to Maa Gayatri General Store! These terms and conditions outline the rules and regulations for the use of Maa Gayatri General Store's Website, located at maagayatristore.com.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Maa Gayatri General Store if you do not agree to take all of the terms and conditions stated on this page.</p>

            <h2>1. General</h2>
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

            <h2>2. User Account</h2>
            <p>To access certain features of the site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>

            <h2>3. Products and Pricing</h2>
            <p>All products listed on the Site are subject to change, as is product information, pricing, and availability. We reserve the right, at any time, to modify, suspend, or discontinue any Site feature or the sale of any product with or without notice. You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuance of any Site feature or product.</p>

            <h2>4. Intellectual Property</h2>
            <p>Unless otherwise stated, Maa Gayatri General Store and/or its licensors own the intellectual property rights for all material on Maa Gayatri General Store. All intellectual property rights are reserved. You may access this from Maa Gayatri General Store for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from Maa Gayatri General Store</li>
              <li>Sell, rent or sub-license material from Maa Gayatri General Store</li>
              <li>Reproduce, duplicate or copy material from Maa Gayatri General Store</li>
              <li>Redistribute content from Maa Gayatri General Store</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <p>In no event shall Maa Gayatri General Store, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Maa Gayatri General Store, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

            <h2>6. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.</p>
          </div>
          <div className="policy-footer-cta">
            <Link to="/" className="auth-button">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
