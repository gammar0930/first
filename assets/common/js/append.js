// トグル処理
(function(){

  let toggleButton = document.querySelectorAll('.wp-toggle__title');

  for (let i = 0; i < toggleButton.length; i++) {
  
    if( toggleButton[i].parentNode.classList.contains('is-closed') ){
      gsap.to(toggleButton[i].parentNode.querySelector('.wp-toggle__cont'),{
        height: 0,
        duration:0.5,
        ease: "power2.inOut"
      });
    }else{
      gsap.to(toggleButton[i].parentNode.querySelector('.wp-toggle__cont'),{
        height:'auto',
        duration:0.5,
        ease: "power2.inOut"
      });
    }
  
    toggleButton[i].addEventListener('click',function(){
      let parent = this.parentNode;
      let target = parent.querySelector('.wp-toggle__cont');
      const result = parent.classList.contains('is-closed');
 
      if (result) {
        // 開く
        parent.classList.remove('is-closed');
        gsap.to(target,{
          height:'auto',
          duration:0.5,
          ease: "power2.inOut"
        });
      }else{
        // 閉じる
        parent.classList.add('is-closed');
        gsap.to(target,{
          height: 0,
          duration:0.5,
          ease: "power2.inOut"
        });
      }
    })
  } 

})();

// IRの一覧ページにある年切り替え処理
(function(){
  let targetElm = document.getElementById('ir-list-query-year-select');
  if( targetElm != null ){
    targetElm.addEventListener('change', function(){
      let parent = this.parentNode;
      parent.submit();
    });
  }

})();

// IRの株式情報ページにある株主総会分類切り替え処理
(function(){
  let targetElm = document.getElementById('ir-stock-info-query-select');
  if( targetElm != null ){
    targetElm.addEventListener('change', function(){
      let parent = this.parentNode;
      parent.submit();
    });
  }
})();
