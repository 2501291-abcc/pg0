function record() {
    // 1. 入力欄（input）と表示エリア（BulletinBoard）を取得
    const inputElement = document.getElementById('daily');
    const board = document.querySelector('.BulletinBoard');
    const message = inputElement.value;

    // 未入力チェック：中身が空なら処理を中断
    if (message.trim() === "") {
        alert("日記の内容を入力してください！");
        return;
    }

    // 2. 現在の時刻を取得してフォーマットする (YYYY/MM/DD HH:mm:ss)
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

    // 3. 新しいログの「外枠」を作成
    const logItem = document.createElement('div');
    logItem.classList.add('log-item'); // CSSでデザインするためのクラス

    // 4. 中身（メッセージと日時）を組み立てる
    // innerHTMLを使うことで、HTMLタグをJavaScriptから差し込めます
    logItem.innerHTML = `
        <div class="log-content">
            <p class="log-text">${message}</p>
            <span class="log-date">${timeString}</span>
        </div>
        <button class="delete-btn" onclick="deleteLog(this)">×</button>
    `;

    // 5. 掲示板の先頭（一番上）に追加
    board.prepend(logItem);

    // 6. 入力欄をリセットして次の入力に備える
    inputElement.value = "";
}

// おまけ：バツボタンでログを消せる機能
function deleteLog(button) {
    // ボタンの親要素（log-item）を削除
    button.parentElement.remove();
}
