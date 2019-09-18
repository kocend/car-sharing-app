import { Component, OnInit } from '@angular/core';
import { TrailerRepository } from 'src/repositories/trailer-repository';
import { Trailer } from 'src/models/trailer';

@Component({
  selector: 'app-trailer-list',
  templateUrl: './trailer-list.component.html',
  styleUrls: ['./trailer-list.component.scss']
})
export class TrailerListComponent implements OnInit {

  private trailerList: Trailer[];

  constructor(private readonly trailerRepo: TrailerRepository) {
    this.trailerList = trailerRepo.getAll();
  }

  ngOnInit() {

  }

}
