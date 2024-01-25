'use strict';

window.onload = function() {
  /**
   * <body>から'-preload'クラスを削除する.
   * -> chromeで読み込み時にtransition指定要素が動くのを防ぐ処置
   */
  document.body.classList.remove('-preload');

  // /**
  //  * リンクモジュールの文字数超過を検知する.
  //  */
  // var textWrapElm = document.querySelectorAll('.js-overflow');
  // var TextWrap = function() {
  //   for (var i = 0; i < textWrapElm.length; i++) {
  //     var _me = textWrapElm[i];
  //     var _inner = _me.getElementsByClassName('js-overflow-inner')[0];
  //     if (_me.clientHeight < _inner.clientHeight) {
  //       _me.classList.add('-over');
  //     } else {
  //       _me.classList.remove('-over');
  //     }
  //   }
  // };
  // TextWrap();
  // window.addEventListener('resize', function() {
  //   TextWrap();
  // });
};

!(function() {})();
