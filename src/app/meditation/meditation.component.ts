 import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent {
  showFirstForm: boolean = true;
  isFinancial: boolean = false;
  others: boolean = false;
  showSecondForm: boolean = false;
  soundFilePath: string = 'assets/mp3/meditation.mp3';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  selectedCountry: string = '';
  @ViewChild('myAudio') myAudio!: ElementRef;
  manifest = [
    { code: 'FI', name: 'Financial' },
    { code: 'HE', name: 'Health' },
    { code: 'FA', name: 'Fame' },
    { code: 'WO', name: 'Work' },
    { code: 'FA', name: 'Family' }
  ];
  
  onFirstFormSubmit() {
    // Handle submission of first form
    // For example, you can validate inputs and proceed to show the second form
    this.showFirstForm = false;
    this.showSecondForm = true;
    if(this.selectedCountry=='FI')
      {
        this.isFinancial =true;
        this.others =false;
      }
      else{
        this.others =true;
      }
  }

  onSecondFormSubmit() {
    // Handle submission of second form
    // For example, you can send data to backend or perform any other actions
    console.log('Form submitted!');
  } 

enableAutoplay(event: Event) {
  const audioElement: HTMLAudioElement = this.myAudio.nativeElement;
    audioElement.autoplay = true;
    audioElement.load();
  event.preventDefault();
}
}
