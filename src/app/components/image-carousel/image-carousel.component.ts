import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  @Output() selectedImageChange = new EventEmitter<string>();
  selectedImage!: string;

  // Se llama cuando se selecciona una imagen en el carrusel
  selectImage(image: string) {
    this.selectedImage = image;
    this.selectedImageChange.emit(image);
  }
}
