# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Quirine Zonneveld

  #### Je startniveau:
  blauw

  #### Je focus:
  surface plane (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  Dille & Kamille: https://www.dille-kamille.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Dille & Kamille  
<img src="readme-images/homePaginaKlein!.png" width="375px" alt="Homepagina klein voorbeeld">

  #### Screenshot(s) van de tweede pagina (small screen):
  Dille & Kamille  
  <img src="readme-images/detailPaginaKlein.png" width="375px" alt="Detailpagina klein voorbeeld">
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - button, a & labels zijn niet omschreven
  - Errors in de website
  - Ze maken geen gebruik van een visuele focus style
  - homepage is niet responsive (een week later hadden ze dit opgelost)
  - Ze gebruiken vaak span & div i.p.v een heading
  - Ze maken geen gebruik van list elements (ol, ul, dl), dit doen ze dan in een div
  - Niet alle img hebben een alt attribute
  - Sommige decorative images hebben een ingevulde alt attribute
  - Er is niet gebruik gemaakt van een skip link.
  - dark and light mode zijn niet supported
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/htmlStructuurHomepagina.png" width="375px" alt="html breakdown homepagina">
  <img src="readme-images/htmlStructuurDetailpagina.png" width="375px" alt="html breakdown detailpagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  <!-- ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel"> -->

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  vragen:
  1. bij sommige delen twijl ik of het een section / div / div in bovenste section / article is?
  2. hoe schrijf ik een ' in een p?
  3. geef ik de goede h aan de elementen?
  4. dropdown
  5. Bij de arrow button, heb ik een img in de button gedaan. Het laat de img echter niet zien, hoe kan dit?
  6. Detailpagina: zijn het twee losse ul?
  7. Wanneer gebruik ik grid en wanneer flexbox?
  8. classes of pseudo-elementen gebruiken?

<!-- 
  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              | -->


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Op de body een class plaatsen (dit heb ik later weer weggehaald)
  - Footer 'altijd in de buurt', 2 losse onderdelen
  - Flex bij de eerste

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  vragen:
  1. Koken met krachtige kruiden: image heb ik geplaatst met top: … , kan dit ook op een andere manier (als ik nu content erboven plaats klopt de plaatsing niet meer.
  2. Benaming :root
  3. Errors in html
  4. Section in een section -> homepage h1??
  5. wanneer ik 4e section selecteert, selecteert het ook andere elementen, hoe kan dit?
  7. Fade-in navigatiemelding -> in ul?


  <!-- ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |
 -->

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - animatie navigatiemelding, kan met twee lege p's. Een klas, met css een animatie. In javascript met time function class aan en uit zetten na zoveel seconden.
  - bovenkant homepagina in section

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  - Met de screenreader van mijn site gaat het elk element af en benoemd het ook de functie (zoals link, button, header, img). Bij de originele Dille & Kamille website weet je niet precies wat het is als je er op staat.
  - Je hoort bijvoorbeeld: Search button, You are currently on a button, group. To click this button, press Control-Option-Space. Search through site content Waar ben je naar op zoek?, search text field. Heading level 1, Theepot, steengoed, botanisch 1,8 liter
  - In de breadcrumbs leest het de > voor. (AXmarker). Greater than.
  - Ook leest de screenreader nu voor wat voor img het is (de alt tekst).
  - Buttons met alt=arrow. Zegt niet heel veel over wat je ermee kan doen. Omschrijven wat je ziet -> je hoeft niet aan te geven dat het een img is.
  - skip link plaatsen is belangrijk
  - decorative images heb ik bij sommige een alt -> deze moet null staan
  - Er zijn nog een paar kleine errors

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  - Error javascript

<!-- 
  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              | -->


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - In javascript schrijven dat de code bedoeld is voor specifieke pagina

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Dit is een full-screenshot van de twee pagina's, ze zien er anders uit dan wanneer je de website zelf bekijkt door de scroll-animations.
  <img src="readme-images/eindresultaatHomepage.png" width="375px" alt="Eindresultaat homepage">
<img src="readme-images/eindresultaatDetailpagina.png" width="375px" alt="Eindresultaat homepage">

  ### Dit ging goed/Heb ik geleerd: 
  Ik heb geleerd hoe ik de root kan inzetten om gemakkelijk kleuren, font-size enz. aan te passen. Ook heb ik dit gebruikt in de darklight-mode, het herfst thema en bij het vergroten van de lettertypes.

  <img src="readme-images/darklightmodeScreenshot.png" width="375px" alt="Darklight-mode">
  <img src="readme-images/herfstthemaScreenshot.png" width="375px" alt="Herfst thema">


  ### Dit was lastig/Is niet gelukt:
  Sommige img zien er anders uit in de Safari browser, op Brave en Chrome werkt het wel precies zoals ik wil, op Safari support het iets niet.
  <img src="readme-images/safariScreenshot.png" width="375px" alt="Website op Safari">

In mijn Javascript heb ik twee img geselecteerd die alleen op de index.html staan. Om errors te voorkomen heb ik het volgende in mijn js geplaatst:
 if (window.location.pathname === '/index.html' || window.location.pathname === '/')
Dit wil echter niet altijd werken.
  <img src="readme-images/windowScreenshot.png" width="375px" alt="Website op Safari">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Position sticky: https://developer.mozilla.org/en-US/docs/Web/CSS/position
  2. Adress: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address 
  3. Select: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select 
  4. Transform: translate(): https://developer.mozilla.org/en-US/docs/Web/CSS/transform 
  5. Flip an image: https://css-tricks.com/snippets/css/flip-an-image/ 
  6. List-style-type: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
  7. TextContent: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent  
  8. Input type="search”: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search 
  9. Image galary: https://www.youtube.com/watch?v=gzXyRa7jwk4 
  10. Box-shadow: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
  11. Fit-content: https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content 
  12. ForEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
  13. Closest(): https://www.w3schools.com/jsref/met_element_closest.asp 
  14. GetAttribute(): https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute 
  15. SetAttribute(): https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute 
  16. input type="radio”: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio 
  17. Cursor: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor 
  18. Filter: https://developer.mozilla.org/en-US/docs/Web/CSS/filter 
  19. scroll-behavior: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
  20. scroll-snap-type: https://www.youtube.com/watch?v=Xc6G3oV24yE
  21. darklight-mode: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
  22. skip to main content: https://www.youtube.com/watch?v=287mLmuamoM https://www.youtube.com/watch?v=jDDaOFr9nqQ 
  23. scroll-animation: https://www.youtube.com/watch?v=huVJW23JHKQ https://youtu.be/huVJW23JHKQ?si=iJcgi2joHmCez_Jo 
  24. loading-state: https://youtu.be/VbAD6cifkWM?si=8Ksq2coWmzMVNXvg https://youtu.be/q76TexbMXJg?si=vlp8dG1rG1nBCQAv
  25. count button clicks: https://youtu.be/Fh35DD6jam4?si=NJtl084Y-aYJ05Ip 
</details>