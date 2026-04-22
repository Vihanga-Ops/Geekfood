import React from 'react';
import './Cards.css';

const AVATAR = 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80';

const column1 = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
    name: 'Gladis Lennon',
    role: 'Head of SEO',
  },
  {
    id: 2,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.',
    name: 'Gladis Lennon',
    role: 'Head of SEO',
  },
];

const column2 = [
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.',
    name: 'Gladis Lennon',
    role: 'Head of SEO',
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
    name: 'Gladis Lennon',
    role: 'Head of SEO',
  },
];

const column3 = [
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.',
    name: 'Gladis Lennon',
    role: 'Head of SEO',
  },
  {
    id: 6,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.',
    name: 'Gladis Lennon',
    role: 'Head of SEO',
  },
];

function TestimonialCard({ text, name, role }) {
  return (
    <div className="t-card">
      <div className="t-card-box">
        <p className="t-card-text">{text}</p>
      </div>
      <div className="t-card-author">
        <img src={AVATAR} alt={name} className="t-avatar" />
        <div>
          <p className="t-name">{name}</p>
          <p className="t-role">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <section className="cards-section">
      <div className="cards-grid">
        <div className="cards-col">
          {column1.map(card => <TestimonialCard key={card.id} {...card} />)}
        </div>
        <div className="cards-col">
          {column2.map(card => <TestimonialCard key={card.id} {...card} />)}
        </div>
        <div className="cards-col">
          {column3.map(card => <TestimonialCard key={card.id} {...card} />)}
        </div>
      </div>
    </section>
  );
}

export default Cards;