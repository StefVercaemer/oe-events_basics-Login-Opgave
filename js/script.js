"use strict";

var txtUserName;
var pwbPaswoord;
var divLogon, divFeedBack;

window.addEventListener("load", Initialiseer);

function Initialiseer() {
      KoppelElementen();
      KoppelEvents();
}

function KoppelElementen() {
      txtUserName = document.getElementById('txtUserName');
      pwbPaswoord = document.getElementById('pwbPaswoord');
      divLogon = document.getElementById('divLogon');
      divFeedBack = document.getElementById('divFeedBack');

}

function KoppelEvents() {
      divLogon.addEventListener('click', GeefFeedBack);
      divLogon.addEventListener('mouseover', ToonSelectedLayout);
      divLogon.addEventListener('mouseout', ToonBasisLayout);
}

function ToonBasisLayout(){
      divLogon.setAttribute('class', 'knop knopBasis');
}

function ToonSelectedLayout() {
      divLogon.classList.add('knopHover');
      divLogon.classList.remove('knopBasis');
}

function GeefFeedBack() {
      let userName = txtUserName.value;
      alert('Je hebt geklikt: ' + userName);

      divLogon.removeEventListener('mouseout', ToonBasisLayout);
      divLogon.removeEventListener('mouseover', ToonSelectedLayout);
      divLogon.setAttribute('class', 'knop knopUitgeschakeld');
      divLogon.removeEventListener('click', GeefFeedBack);
}

