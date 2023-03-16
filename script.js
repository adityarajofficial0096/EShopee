const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar)
{
    bar.addEventListener
    (
        'click', () =>
        {
            nav.classList.add('active')
        }
    )
}

if (close)
{
    close.addEventListener
    (
        'click', () =>
        {
            nav.classList.remove('active')
        }
    )
}

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");
    
    pwShowHide.forEach
    (
        eyeIcon =>
        {
            eyeIcon.addEventListener
            (
                "click", () =>
                {
                    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
                    
                    pwFields.forEach
                    (
                        password =>
                        {
                            if (password.type === "password")
                            {
                                password.type = "text";
                                eyeIcon.classList.replace("bx-hide", "bx-show");
                                return;
                            }
                            password.type = "password";
                            eyeIcon.classList.replace("bx-show", "bx-hide");
                        }
                    )
                }
            )
        }
    )
    
    links.forEach
    (
        link => 
        {
            link.addEventListener
            (
                "click", e =>
                {
                    e.preventDefault();
                    forms.classList.toggle("show-signup");
                }
            )
        }
    )
