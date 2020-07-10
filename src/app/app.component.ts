import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudPractice';

  allUser: Object;
  count = 0;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    // 
    this.allUsers();
  }

  allUsers() {
    this.crud.getData().subscribe((response) => {
      this.allUser = response;
    })

  }

  // showData(id:String)
  // {
  //   this.crud.show(id).subscribe(
  //     ()=>{
  //       alert("Data Fteched Sucessfully");
  //     }
  //   );
  show = (count) => {
    this.allUser = this.crud.show(count);
    this.count = count;
  }
}
