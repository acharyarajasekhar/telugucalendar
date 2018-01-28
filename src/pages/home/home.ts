import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') private slider: Slides;

  dayDiff = 86400000;
  d = new Date();
  d1 = new Date(this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDate()).getTime();
  numbers = [this.d1 - this.dayDiff, this.d1, this.d1 + this.dayDiff];
  firstLoad = true;

  constructor(public navCtrl: NavController) {

  }

  loadPrev() {
    console.log('Prev');
    let newIndex = this.slider.getActiveIndex();

    newIndex++;
    this.numbers.unshift(this.numbers[0] - this.dayDiff);
    this.numbers.pop();

    // Workaround to make it work: breaks the animation
    this.slider.slideTo(newIndex, 0, false);

    console.log(`New status: ${this.numbers}`);
  }

  loadNext() {
    if (this.firstLoad) {
      // Since the initial slide is 1, prevent the first 
      // movement to modify the slides
      this.firstLoad = false;
      return;
    }

    console.log('Next');
    let newIndex = this.slider.getActiveIndex();

    newIndex--;
    this.numbers.push(this.numbers[this.numbers.length - 1] + this.dayDiff);
    this.numbers.shift();

    // Workaround to make it work: breaks the animation
    this.slider.slideTo(newIndex, 0, false);

    console.log(`New status: ${this.numbers}`);
  }

  getUrl(n): String {
    var d = n.split('-');
    return "http://www.telugucalendar.org/" + d[0] + "/daily/calendar/" + d[1].toLowerCase() + "-" + d[2] + ".png";
  }

}
