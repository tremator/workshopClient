import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-brewerie',
  templateUrl: './single-brewerie.component.html',
  styleUrls: ['./single-brewerie.component.css']
})
export class SingleBrewerieComponent implements OnInit {

  brewerie: any;
  id: number;

  constructor(private service: ConnectionService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getProductId();
    this.getBrewerie();

  }
  getProductId() {
    this.ActivatedRoute.paramMap.subscribe(param => {
      this.id = parseInt(param.get('id'));
    });
  }

  getBrewerie(){
    this.service.GetBrewery(this.id).subscribe(
      data => {
        this.brewerie = data;
        console.log(data)
      }
    );
  }
}
