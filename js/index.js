const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

let logo = document.getElementById('logo-img');
let navItems = document.querySelectorAll('nav a');
let ctaText = document.querySelector('.cta-text h1');
let ctaImg = document.getElementById('cta-img');
let ctaBtn = document.querySelector('.cta-text button');
let textTitle = document.querySelectorAll('.text-content h4');
let textP = document.querySelectorAll('.text-content p');
let mainContentImg = document.getElementById('middle-img');

// LOGO INSIDE OF NAV
logo.setAttribute('src', siteContent['nav']['img-src']);

// NAV ITEMS
for (let i = 0; i < navItems.length; i++) {
	navItems[i].innerHTML = `${siteContent.nav['nav-item-' + (i + 1)]}`;
}

// CTA HEADING + BUTTON + IMAGE
ctaText.textContent = siteContent.cta.h1;
ctaBtn.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// MAIN-CONTENT

// MAIN CONTENT TEXTS

textTitle[0].textContent = siteContent['main-content']['features-h4'];
textTitle[1].textContent = siteContent['main-content']['about-h4'];
textTitle[2].textContent = siteContent['main-content']['services-h4'];
textTitle[3].textContent = siteContent['main-content']['product-h4'];
textTitle[4].textContent = siteContent['main-content']['vision-h4'];

textP[0].textContent = siteContent['main-content']['features-content'];
textP[1].textContent = siteContent['main-content']['about-content'];
textP[2].textContent = siteContent['main-content']['services-content'];
textP[3].textContent = siteContent['main-content']['product-content'];
textP[4].textContent = siteContent['main-content']['vision-content'];

// MAIN CONTENT IMAGE (middle image)

mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// CONTACT

let contactTitle = document.querySelector('.contact h4');
let contactContent = document.querySelectorAll('.contact p');

contactTitle.textContent = siteContent.contact['contact-h4'];
contactContent[0].innerHTML = '123 Way 456 Street<br />Somewhere, USA';
contactContent[1].textContent = siteContent.contact.phone;
contactContent[2].textContent = siteContent.contact.email;

// FOOTER

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
