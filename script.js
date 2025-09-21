(function(){
    const card = document.getElementById('card1');
    if(!card) return;
  
    function toggleFlip() {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(flipped));
      const back = card.querySelector('.card__face--back');
      if(back) back.setAttribute('aria-hidden', String(!flipped));
    }
  
    card.addEventListener('click', () => toggleFlip());
  
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggleFlip();
      }
    });
  })();
  