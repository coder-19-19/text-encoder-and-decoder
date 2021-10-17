const encodeText = document.querySelector('.encode #text')
const encodePassword = document.querySelector('.encode #password')
const encodeBtn = document.querySelector('.encode button')


const decodeText = document.querySelector('.decode #decode-text')
const decodePassword = document.querySelector('.decode #decode-password')
const decodeBtn = document.querySelector('.decode button')


//The Function Below To Encrypt Text
const encryptWithAES = (text, password) => {
    return CryptoJS.AES.encrypt(text, password).toString();
};
const decryptWithAES = (ciphertext, password) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, password);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};


encodeBtn.addEventListener('click', () => {
    let text = encryptWithAES(encodeText.value, encodePassword.value)
    document.querySelector('.result1').innerHTML = `
        <div class="alert alert-warning mt-2"><span style="user-select: none">Şifrələnmiş mətn  : </span><b>${text}</b></div>
    `
    setTimeout(() => {
        document.querySelector('.alert-warning').remove()
    }, 5000)
})

decodeBtn.addEventListener('click', () => {
        let text = decryptWithAES(decodeText.value, decodePassword.value)

        if (text) {
            document.querySelector('.result2').innerHTML = `
        <div class="alert alert-primary mt-2"><span style="user-select: none">Orginal mətn  : </span><b>${text}</b></div>
    `
        } else {
            document.querySelector('.result2').innerHTML = `
        <div class="alert alert-danger mt-2">Şifrə yalnışdır!</div>
    `
            setTimeout(() => {
                document.querySelector('.alert-danger').remove()
            }, 2000)
        }
    }
)
