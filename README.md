### Features

- Google Analytics by [react-ga](https://www.npmjs.com/package/react-ga "react-ga")
- SEO by [react-helmet](https://www.npmjs.com/package/react-helmet "react-helmet")
- Email Form data by [emailjs](https://www.emailjs.com)
- Easy deployment on [netlify](https://www.netlify.com/)
- Styling using [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) and [SASS](https://sass-lang.com/documentation/syntax) used
- Routing using [react-router](https://www.npmjs.com/package/react-router)
- It is responsive!

###Run locally

`$ npm install`

continuosly watch SASS file changes `$ npm run watch:sass`
this will make **main.css** files that is imported in **index.js**

in other terminal `$ npm run start`

For EmailJS thing, you need to get EmailJS UserId.
Paste it in public/index.html -> emailjs.init(paste here) or set that key in .env file or set it in Netlify Environment variable(I did this)

###Deployment

in public folder, **_redirects** file is already there because without that, react routing  will not work on netlify


###Why such things

You can get how much time people spend on particular page, on which button they click, what is the most often page peope visits on your webstie and more than that - all you can do with react-ga(**google analytics**)

You can add meta title, descriptions, keywords, tags using react-helmet, trust me, it will boost your site **SEO** even for **SPA**!

Prefer using [sass-boilerplate](https://github.com/HugoGiraudel/sass-boilerplate), it has main.scss file that has imports of all other SASS files. SASS is a very powerful thing. You may want to read [sass-guidelines](https://sass-guidelin.es/) to get most out of it.

##Like my work?
You can support me on Patreon on this <a rel="noopener noreferrer" href="https://www.patreon.com/onlineportrait" target="_blank">Link</a> or
<a href="https://paytm.business/link/20862/LL_11597787"
    target='_blank' rel='im-checkout noopener noreferrer' data-behaviour='remote'
    data-style='light' data-text="Pay with Paytm"
    style={{
    borderRadius: "2px", display: "inline-block", padding: "0 23px", color: "#182233", fontSize: "12px", textDecoration: "none",
    fontFamily: "'Nunito Sans', sans-serif", height: "32px", lineHeight: "28px", background: "#ffffff", border: "1px solid #e8edf4"
    }} >
    <img alt="PayTM Logo" style={{ marginLeft: "6px", verticalAlign: "sub", width: "50px" }}
    src="https://static1.paytm.in/1.4/plogo/paytmlogo-coloured.png" />
</a>
