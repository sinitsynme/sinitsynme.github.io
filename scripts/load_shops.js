export function loadShops() {
    let shops = fetch("https://51.250.114.234:8888/rest/api/BoardGame")
    .then(response => {
        console.log(response.formData)
    })
}