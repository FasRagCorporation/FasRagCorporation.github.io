import{saveComment, getCommet, onGetSnapshot} from './firebase.js';

const formComent = document.getElementById('task-form');
const commentContainer = document.getElementById('list-coment');




window.addEventListener('DOMContentLoaded', async()=>{
    
    onGetSnapshot((querySnapshot) => {
        let html=''
   querySnapshot.forEach(element => {
    const comet = element.data()
    html += `
        <div>
            <div class="it-coment">
                <h3>${comet.nom}</h3>
                <i>--Correo: ${comet.ema}<i>
                <p>${comet.com}</p>
            </div>
            
        </div>
    `;
    });
        commentContainer.innerHTML = html
    });
});


formComent.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('enviado')

    const nom = formComent['nom']
    const ema = formComent['ema']
    const com = formComent['com']

    /* console.log(nombre.value,email.value, coment.value)  */
    saveComment(nom.value, ema.value, com.value); 
    formComent.reset();
    
})