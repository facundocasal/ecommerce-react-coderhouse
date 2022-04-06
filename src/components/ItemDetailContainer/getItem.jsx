export default function getItem (url) {
    return(
    fetch(url)
    .then(res => res.json()))
}
