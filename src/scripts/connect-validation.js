import Vue from 'vue';
new Vue({
    el: ".connect",
    data: {
        name: "",
        email: "",
        message: "",
        nameValid: true,
        emailValid: true,
        messageValid: true,
        nameError: "",
        emailError: "",
        messageError: "", 
        overlayHidden: true,
        resualtMessage: ''
    },
    methods: {
        validateName() {
            this.name = this.$el.querySelector('.from__input--name').value;
            if(this.name.length < 3) {
                this.nameValid = false;
                this.nameError = "Слишколм короткое имя";
            } else {
                this.nameValid = true;
                this.nameError = '';
            }
            return this.nameValid;
        },
        validateEmail() {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.email = this.$el.querySelector('.form__input--email').value;
            if(this.email.length < 8 ) {
                this.emailValid = false;
                this.emailError = "Короткий email";
            } else if (!regex.test(this.email)){
                this.emaileValid = false;
                this.emailError = 'Неверный email';
            } else {
                this.emailValid = true;
                this.emailError = '';
            }
            return this.nameValid;
        },
        validateMessage() {
            console.log('atarrt val mes');
            
            this.message = this.$el.querySelector('.form__textarea').value;
            if(this.message.length < 20) {
                this.messageValid = false;
                this.messageError = "Слишколм короткое сообщение";
            } else {
                this.messageValid = true;
                this.messageError = '';
            }
            return this.messageValid;
        },
        submitForm() {
            console.log('запустился метод submit');
            
            var nameValid = this.validateName(),
                emailValid = this.validateEmail(),
                messageValid = this.validateMessage();
            if (nameValid && emailValid && messageValid) {
                var userData = {
                    username: this.name,
                    email: this.email,
                    message: this.message
                }
                fetch('/src/data/success.txt', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userData)
                }).then((response) => {
                    console.log(response);
                    
                    this.resualtMessage = 'Сообщение отправлено!';
                    this.overlayHidden = false;
                    setImmeout(this.hideOverlay, 5000);
                });
            }
        },
        hideOverlay() {
            this.overlayHidden = true;
            
        }
    },
    
});
