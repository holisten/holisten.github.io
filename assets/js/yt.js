if (document.body.addEventListener) {
    document.body.addEventListener('click',replaceThumbnailWithIframe,false);
  }
  else {
    document.body.attachEvent('onclick',replaceThumbnailWithIframe);//for IE
  }
  
  function replaceThumbnailWithIframe(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match(/play-stack/)){
      parent = target.parentNode;
      id = parent.getAttribute('data-youtube-id');
      // w = parent.getAttribute('data-player-width');
      // h = parent.getAttribute('data-player-height');
      style = 'style="frameborder=0;"';
      inner = '<iframe class="youtubePlayer" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameborder allowfullscreen="" src="https://www.youtube-nocookie.com/embed/' + id + 
                    '?autoplay=0&autohide=1&border=0&wmode=opaque&enablejsapi=1"' + style + ' />'
      parent.innerHTML = inner;
    }
  }