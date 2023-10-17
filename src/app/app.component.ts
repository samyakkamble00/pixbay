import { Component } from '@angular/core';
import { PexelPhotoService } from './service/pexel-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pixbay';
  search: string = ''; // Initialize search with an empty string
  perPage: number = 10; // Initialize perPage with a default value
  data: any; // You can use a more specific type for 'data' if needed

  constructor(private pexelService: PexelPhotoService) { }

  searchPhotos() {
    // Add your form submission logic here
    console.log('Form submitted:', this.search, this.perPage);

    // Use the PexelPhotoService to make an API request here
    this.pexelService.getData(this.search, this.perPage)
      .subscribe(
        response => {
          // Handle the API response here
          console.log('API response:', response);

          // Access the data based on the actual API response structure
          this.data = response; // Modify this line according to the API response structure
        },
        error => {
          // Handle API request errors here
          console.log('API request error:', error);
        }
      );
  }
}
