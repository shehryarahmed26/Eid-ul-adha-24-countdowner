function eid_countdown() {
    let eid_date = new Date('06-14-2024');
    let newdate =  new Date();
    let days = document.getElementById('days-text')
    let hours = document.getElementById('hours-text')
    let minutes = document.getElementById('minutes-text')
    let seconds = document.getElementById('seconds-text')
    days.innerText = Math.floor((eid_date - newdate) / (1000 * 60 * 60 * 24))
    hours.innerText = Math.floor((eid_date - newdate) / (1000 * 60 * 60) % 24)
    minutes.innerText = Math.floor((eid_date - newdafunction eid_countdown() {
    let eid_date = new Date('06-14-2024');
    let newdate = new Date();

    let time_difference = eid_date - newdate;

    let days = document.getElementById('days-text');
    let hours = document.getElementById('hours-text');
    let minutes = document.getElementById('minutes-text');
    let seconds = document.getElementById('seconds-text');

    let total_seconds = Math.floor(time_difference / 1000);
    let total_minutes = Math.floor(total_seconds / 60);
    let total_hours = Math.floor(total_minutes / 60);
    let total_days = Math.floor(total_hours / 24);

    days.innerText = total_days;
    hours.innerText = total_hours % 24;
    minutes.innerText = total_minutes % 60;
    seconds.innerText = total_seconds % 60;
}

setInterval(eid_countdown, 1000);
te) / (1000 * 60 ) % 60)
    seconds.innerText = Math.floor((eid_date - newdate) / (1000) % 60)
}
setInterval(eid_countdown, 1000);
