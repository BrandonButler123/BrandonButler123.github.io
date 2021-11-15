let requests = [];

const addRequest = (ev)=>{
    ev.preventDefault(); 
    let request = {
        id: Date.now(),
        name: document.getElementById('full-name').value,
        email: document.getElementById('email-address').value,
        message: document.getElementById('message').value
    }
    requests.push(request);
    document.forms[0].reset(); 
    
    console.warn('added' , {requests} );

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addRequest);
});