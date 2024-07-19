$(document).ready(function() {
    // modal.html 파일을 로드하고 modalContainer에 삽입
    $("#modalContainer").load("/reservation_modal_1.html", function() {
        // 로드된 후 모달 초기화
        const modal = document.getElementById('myModal');
        const btn = document.getElementById('openModal');
        const span = document.getElementsByClassName('close')[0];

        btn.onclick = function () {
            modal.style.display = 'block';
        }

        span.onclick = function () {
            modal.style.display = 'none';
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
});