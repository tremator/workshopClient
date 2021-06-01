import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';


@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit {
  counter: number;
  breweries: any;

  constructor(private service: ConnectionService) { 
    this.counter = 0;
    this.breweries = [];
  }

  ngOnInit(): void {
    this.service.getBreweries().subscribe(
      data => {
        
        console.log(data);
        this.breweries = data;
        this.sum();
      }
    )

  }

  sum(){
    var newList = [];
    for (let index = 0; index < 10; index++) {
      newList.push(this.breweries[index]);
    }
    this.breweries = newList;
  }

}
