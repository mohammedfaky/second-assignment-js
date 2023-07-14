var text = ` <h1 >Quote of the Day</h1>
<p class="fs-1">Press the button below to recieve a random quote!</p>
<a class="btn" onclick="clickHear()">
            New Quote 
        </a><h2 id="mo"></h2>`;
document.getElementById('demo').innerHTML =text;
var cartona = ``;
function clickHear(){
     var quote = [`<h2>“So many books, so little time.”<br>_Frank Zappa</h2>`,`<h2>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
     <br>― Dr. Seuss</h2>`,`<h2>“You only live once, but if you do it right, once is enough.”
     <br>― Mae West
     </h2>`,`<h2>"Mahatma Gandhi
     “Be the change that you wish to see in the world.”
     <br>― Mahatma Gandhi</h2>`,`<h2>جئنا للحياه ل محاربة انفسنا ;; لم نات ل محاربة الناس" <br>_ محمد فاكى"</h2>`];
    cartona = quote[Math.floor(Math.random()*quote.length)] 
    document.getElementById('mo').innerHTML =cartona;
}

