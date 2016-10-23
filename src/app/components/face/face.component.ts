import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'face',
  templateUrl: './face.component.html'
})
export class FaceComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
    console.log(`id in FaceComponent is ${this.id}`);
  }

  ngOnInit() {
  }

}
