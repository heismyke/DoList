
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.submit-task').disabled = true;

    document.querySelector('.tasks').onkeyup = () => {
        if (document.querySelector('#text-area').value.length > 0) {
            document.querySelector('.submit-task').disabled = false;
        }else{
            document.querySelector('.submit-task').disabled = true;
        }
        
    };

     document.querySelector('form').onsubmit = (e) => {
       
       const textArea =  document.querySelector('#text-area').value;
        var li = document.createElement('li');
        li.textContent = textArea;
        document.querySelector('ul').appendChild(li)
        li.className = 'ul li'
     
        document.querySelector('#text-area').value = ''

        document.querySelector('.submit-task').disabled = true;

        e.preventDefault();
       }



});


var btn = document.querySelector('button');
btn.addEventListener('click', () => {
    document.querySelector('ul').style.display = 'none';
    location.reload()
})