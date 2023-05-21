import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name = 'Yusup Supriatna';
  cita_cita = 'programmer';
  hobbies = ['ngoding', 'futsal', 'membantu sesama'];
  sekolah = 'SMK';
  getInfo(pendidikan = this.sekolah) {
    return `Saya Lulusan: ${pendidikan}`;
  }
}
