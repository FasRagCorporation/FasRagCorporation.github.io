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
                <h3>${comet.nombre}</h3>
                <i>--Correo: ${comet.email}<i>
                <p>${comet.coment}</p>
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

    const nombre = formComent['nombre']
    const email = formComent['email']
    const coment = formComent['coment']

    /* console.log(nombre.value,email.value, coment.value)  */
    saveComment(nombre.value, email.value, coment.value); 
    formComent.reset();
    
})




