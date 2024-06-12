$(document).ready(function(){
    // privatepolicy 버튼 클릭 이벤트
    $("#privatePolicyNavItem a").click(function(event){
        event.preventDefault(); // 기본 동작 방지
        var url = "privatepolicy.html"; // 로드할 페이지 URL
        $("#content").load(url); // privatepolicy.html 페이지의 내용을 로드하여 content 요소에 표시
    });
});
