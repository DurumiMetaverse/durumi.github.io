document.getElementById('changeButton').addEventListener('click', function() {
  var container = document.getElementById('container');
  var heading = document.getElementById('heading');
  
  // 기존 요소 삭제
  container.removeChild(heading);

  // 새로운 텍스트 요소 생성
  var newHeading = document.createElement('h1');
  newHeading.innerText = '새로운 텍스트 요소';
  newHeading.id = 'heading';
  
  // 컨테이너에 새로운 요소 추가
  container.appendChild(newHeading);
});
