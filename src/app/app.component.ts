import { ApplicationInitStatus, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassDirective } from './class.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ClassDirective] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage : number =0;
  title = 'pagination';
  
  chekWindowIndex(index:number){
    return Math.abs(this.currentPage -index) < 5;
  }

  images=[
    {
      title :'Lib',
      url :'https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg'
    },
    {
      title :'Book',
      url :'https://www.frontlist.in/storage/uploads/2021/07/the-end-of-a-book-1268x845-1.jpeg'
    },
    {
      title :'Developer',
      url :'https://img.freepik.com/premium-photo/sitting-computer-designing-digital-tablet_933496-42693.jpg'
    },
    {
      title :'AI',
      url :'https://nilepost.co.ug/wp-content/uploads/2024/03/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg'
    },
    {
      title :'Lib',
      url :'https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg'
    },
    {
      title :'Book',
      url :'https://www.frontlist.in/storage/uploads/2021/07/the-end-of-a-book-1268x845-1.jpeg'
    },
    {
      title :'Developer',
      url :'https://img.freepik.com/premium-photo/sitting-computer-designing-digital-tablet_933496-42693.jpg'
    },
    {
      title :'AI',
      url :'https://nilepost.co.ug/wp-content/uploads/2024/03/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg'
    },
    {
      title :'Lib',
      url :'https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg'
    },
    {
      title :'Book',
      url :'https://www.frontlist.in/storage/uploads/2021/07/the-end-of-a-book-1268x845-1.jpeg'
    },
    {
      title :'Developer',
      url :'https://img.freepik.com/premium-photo/sitting-computer-designing-digital-tablet_933496-42693.jpg'
    },
    {
      title :'AI',
      url :'https://nilepost.co.ug/wp-content/uploads/2024/03/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg'
    },
  ]

  
}
