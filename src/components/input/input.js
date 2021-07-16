function togglePasswordIcon(e){
    if(e.target.classList.contains('icon')){
        const icon = e.target;
        icon.classList.toggle('input__icon_password-visible')
        const inputType = e.currentTarget.querySelector('input').type;
        inputType == 'password'?? 'text';
    }

}