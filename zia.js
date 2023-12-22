const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (event) => {
        console.log(event)
        console.log(event.target)
        //     if(event.target.id === "grey"){
        // document.body.style.backgroundColor = event.target.id

        //     }
        switch (event.target.id) {
            case 'grey':
                document.body.style.backgroundColor = event.target.id
                break;
            case 'white':
                document.body.style.backgroundColor = event.target.id
                break;
            case 'blue':
                document.body.style.backgroundColor = event.target.id
                break;
            case 'yellow':
                document.body.style.backgroundColor = event.target.id
                break;
            case 'purple':
                document.body.style.backgroundColor = event.target.id
                break;
            default:
            break
        }

    })

})