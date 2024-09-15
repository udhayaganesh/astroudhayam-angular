import { AfterViewInit, NgZone, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements AfterViewInit {
  date: any;
  now: any;
  targetDate: any = new Date(2024, 5, 11);
  targetTime: any = this.targetDate.getTime();
  difference!: number;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  /*currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;
  */

  //@ViewChild('hours', { static: false }) hours!: ElementRef;
  @ViewChild('minutes', { static: false }) minutes!: ElementRef;
  @ViewChild('seconds', { static: false }) seconds!: ElementRef;

  showFirstForm: boolean = true;
  isFinancial: boolean = false;
  isFame: boolean = false;
  isBeach: boolean = false;
  isHealth: boolean = false;
  others: boolean = false;
  showSecondForm: boolean = false;
  soundFilePath: string = 'assets/mp3/meditation.mp3';
  soundFilePath1: string = 'assets/mp3/ohm.mp3';
  soundFilePath2: string = 'assets/mp3/water.mp3';
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
    { code: 'FA', name: 'Family' },
    { code: 'BE', name: 'Beach' }
  ];
  constructor(private zone: NgZone) { }

  ngAfterViewInit() {

    let seconds = 0;
    setInterval(() => {
      /*
      this.date = new Date();
      this.now = this.date.getTime();
      this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
      this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
    */
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const timeString = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

      this.seconds.nativeElement.innerText = timeString;
    }, 1000);
  }

  /*
    onFirstFormSubmit(event: Event) {
      // Handle submission of first form
      // For example, you can validate inputs and proceed to show the second form
      this.showFirstForm = false;
      this.showSecondForm = true;
      if (this.selectedCountry == 'FI') {
        this.isFinancial = true;
        this.others = false;
        this.isFame = false;
        this.isBeach = false;
      }
      else if (this.selectedCountry == 'HE') {
        this.isFinancial = false;
        this.others = false;
        this.isHealth = true;
        this.isFame = false;
        this.isBeach = false;
      }
      else if (this.selectedCountry == 'FA') {
        this.isFinancial = false;
        this.others = false;
        this.isHealth = false;
        this.isFame = true;
        this.isBeach = false;
      }
      else if (this.selectedCountry == 'BE') {
        this.isBeach = true;
        this.others = false;
        this.isHealth = false;
        this.isFame = false;
        this.isFinancial = false;
      }
      else {
        this.others = true;
      }
      event.preventDefault();
    }*/

  onSecondFormSubmit() {
    // Handle submission of second form
    // For example, you can send data to backend or perform any other actions
    console.log('Form submitted!');
  }

  navToPage(data: string, event: Event) {
    this.showFirstForm = false;
    this.showSecondForm = true;
    if (data == 'FI') {
      this.isFinancial = true;
      this.others = false;
      this.isFame = false;
      this.isBeach = false;
    }
    else if (data == 'HE') {

      this.isFinancial = false;
      this.others = false;
      this.isHealth = true;
      this.isFame = false;
      this.isBeach = false;
    }
    else if (data == 'FA') {
      this.isFinancial = false;
      this.others = false;
      this.isHealth = false;
      this.isFame = true;
      this.isBeach = false;
    }
    else if (data == 'BE') {
      this.isBeach = true;
      this.others = false;
      this.isHealth = false;
      this.isFame = false;
      this.isFinancial = false;
    }
    else {
      this.others = true;
    }
    event.preventDefault();

  }
  enableAutoplay(event: Event) {

    const audioElement: HTMLAudioElement = this.myAudio.nativeElement;
    audioElement.autoplay = true;
    audioElement.load();
    event.preventDefault();
  }

  enableNumber(event: Event) {

    const myDiv = document.querySelector('#odometer');
    if (myDiv) {
      myDiv.innerHTML = '100';
    }
    event.preventDefault();


    /*
    const odometerElement: HTMLAudioElement = this.odometer.nativeElement;
    alert(0);
    //const myDiv =this.odometer.nativeElement;
    alert(1);
    setTimeout(function(){
      odometerElement.innerHTML='1';
    }, 1000);
    alert(2);
    //event.preventDefault();
    */
  }


}
