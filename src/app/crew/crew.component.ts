import { Component, OnInit } from '@angular/core';

interface crewMember{name: string, photo: string, showPhoto: boolean}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})

export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  visible: boolean = false;
  selectedCrewColor: string = "red";
  showPhoto: boolean = false;
  crew: crewMember[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', showPhoto: false},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', showPhoto: false},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', showPhoto: false},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', showPhoto: false},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', showPhoto: false},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', showPhoto: false},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', showPhoto: false}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidateObject) {
    let selected = candidateObject;

    if (!this.crew.includes(selected) && this.crew.length < 3){
      this.crew.push(selected);
    }
    else if (this.crew.includes(selected)) {
      let index = this.crew.indexOf(selected);
      this.crew.splice(index,1);
    }

    if (this.crew.length < 3) {
      this.visible = false;
    }
    if (this.crew.length === 3) {
      this.visible = true;
    } return selected;
  }

  crewCheck(candidateObject) {
    if (this.crew.includes(candidateObject)) {
      return true;
    } 
  }

  toggleShowPhoto(candidateObject) {
    let selected = candidateObject;
    let index = this.crew.indexOf(selected);
    if (this.crew[index]) {
      this.crew[index].showPhoto = !this.crew[index].showPhoto;
    }
  }

}
