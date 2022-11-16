export const select = {

  templateOf: {
    homePage: '#template-home-page',
    contactPage: '#template-contact-page',
    productsPage: '#template-products-page',
    
  },
  containerOf: {
    home: '.home-wrapper',
    products: 'products-wrapper',
    contact: 'contact-wrapper',
  },
  nav: {
    links: '.nav-navigation a',
  }
};
export const classNames = {

  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }

};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
  productsPage: Handlebars.compile(document.querySelector(select.templateOf.productsPage).innerHTML),   
};