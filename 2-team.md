---
layout: page
title: FairOnChain<br/>Team
permalink: /team
hero_video: "https://media.githubusercontent.com/media/FairOnChain/faironchain.github.io/main/assets/video/net.mp4"
menu: team
images:
  - alt: Marco Mattavelli
    src: /assets/img/people/marco.png
    url: people.epfl.ch/marco.mattavelli
    text: <strong><em>Prof Marco Mattavelli</em><br/>Project Coordinator & Principal Investigator</strong><br/>Professor<br/>École Polytechnique Fédérale de Lausanne

  - alt: Arnaud Gaudinat
    src: /assets/img/people/arnaud.jpg
    url: ch.linkedin.com/in/arnaud-gaudinat
    text: <strong><em>Prof Arnaud Gaudinat</em><br/>Principal Investigator</strong><br/>Professor<br/>Haute École de Gestion de Genève / Haute École Spécialisée de Suisse Occidentale

  - alt: Julien Prat
    src: /assets/img/people/julien.png
    url: crest.science/user/Julien-PRAT/
    text: <strong><em>Prof Julien Prat</em><br/>Principal Investigator</strong><br/>Head of Blockchain@X<br/>Researcher Director CNRS<br/>CREST, École Polytechnique

  - alt: William Knottenbelt
    src: /assets/img/people/william.jpg
    url: www.imperial.ac.uk/people/w.knottenbelt
    text: <strong><em>Prof William Knottenbelt</em><br/>Principal Investigator</strong><br/>Head of Centre for Cryptocurrency Research<br/>Professor<br/>Imperial College London

  - alt: Simone Casale-Brunet
    src: /assets/img/people/simone.jpg
    url: casalebrunet.com
    text: <strong><em>Dr Simone Casale-Brunet</em></strong><br/>Senior Researcher<br/>École Polytechnique Fédérale de Lausanne

  - alt: Ünsal Öztürk
    src: /assets/img/people/anon.jpg
    url: people.epfl.ch/unsal.ozturk 
    text: <strong><em>Dr Ünsal Öztürk</em></strong><br/>Doctoral Assistant<br/>École Polytechnique Fédérale de Lausanne


  - alt: Christophe Lebrun
    src: /assets/img/people/christophe.png
    url: www.linkedin.com/in/christophelebrun/
    text: <strong><em>Christophe Lebrun</em></strong><br/>Scientific Officer<br/>Haute École de Gestion de Genève / Haute École Spécialisée de Suisse Occidentale

  - alt: Oetske Leroux-Fankhauser
    src: /assets/img/people/oetske.png
    url: www.linkedin.com/in/oetske-leroux/
    text: <strong><em>Oetske Leroux-Fankhauser</em></strong><br/>Scientific Assistant<br/>Haute École de Gestion de Genève / Haute École Spécialisée de Suisse Occidentale

  - alt: Amir Alwash
    src: /assets/img/people/amir.png
    url: www.linkedin.com/in/amiralwash/
    text: <strong><em>Amir Alwash</em></strong><br/>Scientific Assistant<br/>Haute École de Gestion de Genève / Haute École Spécialisée de Suisse Occidentale

  - alt: Stéphane A.
    src: /assets/img/people/stephane.png
    url: www.linkedin.com/in/st%C3%A9phane-a-b63874331/ 
    text: <strong><em><Stéphane A./em></strong><br/>Scientific Assistant<br/>Haute École de Gestion de Genève / Haute École Spécialisée de Suisse Occidentale


  - alt: Natkamon Tovanich
    src: /assets/img/people/natkamon.jpg
    url: www.linkedin.com/in/natkamon-tovanich-00a1a5aa/
    text: <strong><em>Dr Natkamon Tovanich</em></strong><br/>Postdoctoral Researcher<br/>CREST, École Polytechnique

  - alt: Munthitra Thadthapong 
    src: /assets/img/people/munthitra.jpeg
    url: fr.linkedin.com/in/munthitra-thadthapong
    text: <strong><em>Munthitra Thadthapong</em></strong><br/>Data Science & AI Master's Student<br/>CREST, École Polytechnique


  - alt: Jaiditya Khemani
    src: /assets/img/people/jaiditya.jpg
    url: uk.linkedin.com/in/jaiditya-khemani
    text: <strong><em>Jaiditya Khemani</em></strong><br/>Computing Student<br/>Imperial College London

  - alt: Yiqi Li
    src: /assets/img/people/yiqi.jpg
    url: uk.linkedin.com/in/yiqi-li-567b76212
    text: <strong><em>Yiqi Li</em></strong><br/>Computing Student<br/>Imperial College London

  - alt: Madalina Sas
    src: /assets/img/people/mads.jpg
    url: mis.pm
    text: <strong><em>Madalina Sas</em></strong><br/>Research Assistant<br/>Imperial College London


---

<p>&nbsp;</p>

<h2 class="aqua">GENESIS TEAM</h2>

{% assign imgs = page.images | slice: 0,4 %}
{% include images-gallery.html imgs = imgs class = 'col-1-of-2 circle' %}


<h2 class="aqua">RESEARCH TEAM</h2>

{% assign imgs = page.images | slice: 4,3 %}
{% include images-gallery.html imgs = imgs class = 'col-1-of-3 circle' %}

{% assign imgs = page.images | slice: 7,3 %}
{% include images-gallery.html imgs = imgs class = 'col-1-of-3 circle' %}

{% assign imgs = page.images | slice: 10,3 %}
{% include images-gallery.html imgs = imgs class = 'col-1-of-3 circle' %}

{% include partners.html %}
