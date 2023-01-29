// send mail
const sendMail = function () {
    // 取消表单默认提交
    event.preventDefault();
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        message = document.getElementById('message').value;

    message = `I'm ${name}, from ${email}.%0d%0a我是 ${name}, 来自 ${email}.%0d%0a%0d%0a${message}`;

    location.href = `mailto:waite@waite.wang?subject=Contact via Waite.RS&body=${message}`;
}
