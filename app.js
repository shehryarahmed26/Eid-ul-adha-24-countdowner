function eid_countdown() {
    let eid_date = new Date('06-14-2024');
    let newdate =  new Date();
    let days = document.getElementById('days-text')
    let hours = document.getElementById('hours-text')
    let minutes = document.getElementById('minutes-text')
    let seconds = document.getElementById('seconds-text')
    days.innerText = Math.floor((eid_date - newdate) / (1000 * 60 * 60 * 24))
    hours.innerText = Math.floor((eid_date - newdate) / (1000 * 60 * 60))
    minutes.innerText = Math.floor((eid_date - newdate) / (1000 * 60 ))
    seconds.innerText = Math.floor((eid_date - newdate) / (1000))
}
setInterval(eid_countdown, 1000);