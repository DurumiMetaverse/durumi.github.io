document.getElementById('privatePolicyNavItem').addEventListener('click', function() {
  // 페이지의 모든 요소를 지우는 코드 작성
  var allElements = document.getElementsByTagName("*");
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].parentNode.removeChild(allElements[i]);
  }

  // 예를 들어, 모든 요소를 삭제한 후 새로운 내용을 추가하거나 다른 동작을 수행할 수 있습니다.
  // 여기에 코드를 추가하세요.
});
