---
layout: page
title: "FairOnChain<br/>News"
permalink: /blog
menu: news 
hero_video: "/assets/video/globe.mp4"
---


<div class="wrapper">

  <div class="row text-center">
  
    {% for post in site.posts %}
    <div class="post-summary">
      <img src="{{ post.img }}" alt="{{ post.title |  remove: '"' }}">
      <a href="{{ post.url }}">
        <h3>{{ post.title }}</h3>
      </a>
      <p class="aqua">{{ post.date | date: "%-d %B %Y"}}</p>
      <p class="text-center" markdown="1">
        {{ post.description }}
      <u><a href="{{ post.url }}">Read more ...</a></u>
      </p>
    </div>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    {% endfor %}

    <!-- about the Paris meeting -->
    <div class="post-summary">
      <img src="/assets/img/blog/paris.jpg" alt="FairOnChain Consortium meets at École Polytechnique">
      <a href="https://crest.science/faironchain-consortium-meeting/">
        <h3>FairOnChain Consortium meets at École Polytechnique </h3>
      </a>
      <p class="aqua">26 September 2024</p>
      <p class="text-center">
On September 26, <a href="https://blockchain-polytechnique.com/" target="_blank">Blockchain@X Research Center</a>, part of <a href="https://crest.science/" target="_blank">CREST</a>, hosted an in-person consortium meeting at the Alan Turing Building at INRIA on the École Polytechnique campus. During the meeting, the team updated the progress of ongoing work and detailed the planning for the next phase of the project. This included developments of a unified blockchain data structure and publicly accessible blockchain datasets aimed at enhancing data access, transparency, and reproducibility in blockchain research.
 <u><a href="https://crest.science/faironchain-consortium-meeting/" target="_blank">Read more...</a></u>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  
  
  
    <!-- about the Chist-Era cruise -->
    <div class="post-summary">
      <img src="/assets/img/blog/cruise.jpg" alt="FairOnChain attend the CHIST-ERA Projects Seminar 2024">
      <a href="https://www.chistera.eu/news/video-chist-era-projects-seminar-2024-now-available-online">
        <h3>FairOnChain attend the CHIST-ERA Projects Seminar</h3>
      </a>
      <p class="aqua">16-19 April 2024</p>
      <p class="text-center">
The <a href="https://chistera.eu" target="_blank">CHIST-ERA</a> Projects Seminar took place on a cruise from Helsinki, Finland to Stockholm, Sweden and back.
The <a href="https://www.chistera.eu/projects-seminar-2024-programme" target="_blank">programme</a> included a broad range of collaborative actiivites, where the FairOnChain team and the other projects in the Call for Open & Re-usable Research Data & Software worked together to communicate the goals, value, progress and results of our work.
<u><a href="https://www.chistera.eu/news/video-chist-era-projects-seminar-2024-now-available-online" target="_blank">Read more...</a></u>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>

  </div>

</div>
