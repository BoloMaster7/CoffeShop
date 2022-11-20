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
    pages: '#pages',
  },
  nav: {
    links: '.nav_navigation_row" a',
  }
};
export const classNames = {
  active: 'active',
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
  productsPage: Handlebars.compile(document.querySelector(select.templateOf.productsPage).innerHTML),   
};