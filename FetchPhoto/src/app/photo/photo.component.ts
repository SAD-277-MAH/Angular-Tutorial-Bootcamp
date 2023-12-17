import { Component } from '@angular/core';
import { PhotoResponse, PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  randomPhoto: PhotoResponse = {
    alt_description: '',
    urls: {
      full: '',
      raw: '',
      regular: '',
      small: '',
      small_s3: '',
      thumb: '',
    },
  };

  constructor(private photo: PhotoService) {
    this.fetchPhoto();
  }

  onFetch() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photo.fetch().subscribe((response: PhotoResponse) => {
      this.randomPhoto = response;
      console.log(response);
    });
  }
}
