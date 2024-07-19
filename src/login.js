document.addEventListener('DOMContentLoaded', () => {
    // 모달 HTML 파일을 불러오는 함수
    function loadModal() {
        fetch('/workspace/login.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('open_login_modal').innerHTML = data;
                // 모달이 로드된 후 스크립트를 다시 초기화
                initModalScripts();
            });
    }

    // 모달 스크립트를 초기화하는 함수
    function initModalScripts() {
        const modal = document.querySelector('.modal');
        const btnOpenModal = document.querySelector('.account');

        btnOpenModal.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        const menuItems = document.querySelectorAll('.login_type');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all menu items
                menuItems.forEach(i => i.classList.remove('active'));
                // Add active class to the clicked menu item
                item.classList.add('active');
            });
        });

        // 모달 외부 클릭 시 모달 닫기
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // 페이지가 로드되면 모달을 불러옵니다
    loadModal();
});
