document.getElementById('addBurger').addEventListener('click', event => {
    event.preventDefault()

    axios.post('/api/burgers', {
        burger_name: document.getElementById('burger').value,
        devoured: false
    })
        .then(({ data }) => {
            let burgerElem = document.createElement('li')
            burgerElem.className = 'list-group-item'
            burgerElem.id = data.id
            burgerElem.innerHTML = `
         <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${document.getElementById('burger').value}</h5>
            <button data-name="${document.getElementById('burger').value}"
            class="devour btn btn-success">Devour</button>
         </div>
        `
            document.getElementById('notDevoured').append(burgerElem)
            document.getElementById('burger').value = ''
        })
        .catch(err => console.error(err))
})

document.addEventListener('click', event => {
    if (event.target.classList.contains('devour')) {
        axios.put(`/api/burgers/${event.target.parentNode.parentNode.id}`, {
            devoured: true
        })
            .then(() => {
                let burgerElem = document.createElement('li')
                burgerElem.className = 'list-group-item'
                burgerElem.id = event.target.parentNode.parentNode.id
                burgerElem.innerHTML = `
         <div class="d-flex w-100 justify-content-between">
           <h5 class="mb-1">${event.target.dataset.name}</h5>
         </div>
        `
                document.getElementById('devoured').append(burgerElem)
                event.target.parentNode.parentNode.remove()
            })
            .catch(err => console.error(err))
    }
})