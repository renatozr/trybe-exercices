const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = '#06d6a0';

const emergencyContainers = document.querySelectorAll('.emergency-tasks div');
emergencyContainers[0].style.backgroundColor = '#ffb5a7';
emergencyContainers[1].style.backgroundColor = '#ffb5a7';

const emergencyTitle = document.querySelectorAll('.emergency-tasks h3');
emergencyTitle[0].style.backgroundColor = '#9d4edd';
emergencyTitle[1].style.backgroundColor = '#9d4edd';

const noEmergencyContainers = document.querySelectorAll('.no-emergency-tasks div');
noEmergencyContainers[0].style.backgroundColor = '#ffd166';
noEmergencyContainers[1].style.backgroundColor = '#ffd166';

const noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');
noEmergencyTitle[0].style.backgroundColor = 'black';
noEmergencyTitle[1].style.backgroundColor = 'black';


const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = '#1b3a4b';

const admTime = document.querySelector('p');
admTime.innerHTML = 'Administrador de tempo finalizado.';
admTime.style.color = '#4a4e69';
admTime.style.fontWeight = 'bold';
admTime.style.marginTop = '10px';