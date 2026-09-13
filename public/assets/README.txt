=========================================
Asset gula kivabe bosabe (Instructions)
=========================================

Ei folder-e nicher naam gula diye file rakhle app automatically
oi image use korbe -- kono code change lagbe na.

1) LOGO
   File naam: logo.png  (ba logo.svg hole naam-o "logo.png" e rename koro,
   othoba src/components/Navbar.jsx ebong Footer.jsx er "/assets/logo.png"
   line-e extension change koro)
   Size: square hole valo hoy, jemon 64x64 ba 128x128 px
   Location: public/assets/logo.png
   -> Navbar ebong Footer, dujaygatei automatically boshe jabe.
   -> File na thakle "DS" gradient badge default hisebe dekhabe.

2) HERO BANNER (banner-er dan pasher boro image/graphic)
   File naam: hero-banner.png
   Size: recommend 800x800 px (square-er kach kachi), transparent background hole valo
   Location: public/assets/hero-banner.png
   -> File na thakle nijer banano isometric SVG graphic dekhabe.

3) FAVICON (browser tab-er chhoto icon)
   File naam: favicon.svg  (ba favicon.png rakhle index.html-e
   <link rel="icon" ...> line-er href change korte hobe)
   Location: public/favicon.svg (eta already ache, shudhu replace koro)

4) TECHNOLOGY ICONS (React, Vue, Node.js er moto card icon gula)
   Ei gula ekhon internet theke asche (icon.icepanel.io theke).
   Nijer icon file use korte chaile:
   a) File gula ei "icons" folder-e rakho, jemon:
      public/assets/icons/react.svg
      public/assets/icons/vuejs.svg
   b) Tarpor public/data/technologies.json file khulo, jei
      technology-r icon change korte chao, tar "icon" field-e
      URL-er bodole local path likho, jemon:
        "icon": "/assets/icons/react.svg"
   c) Save kore browser refresh koro -- notun icon dekha jabe.

Note: file naam exactly eki rakhte hobe (case-sensitive), noyle
image dekhabe na ar default fallback dekhabe.
