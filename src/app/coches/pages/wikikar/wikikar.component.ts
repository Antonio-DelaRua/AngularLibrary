import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post-service.service';
import { Coches } from '../../post-model';

@Component({
  selector: 'app-wikikar',
  templateUrl: './wikikar.component.html',
  styleUrls: ['./wikikar.component.css']
})
export class WikikarComponent implements OnInit{
  public Coches: Coches[] = [];
  


  constructor(private postService: PostService ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe( (res) => {
      this.Coches = res.map ( (e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Coches)
        };
      }).sort((a, b) => {
        // Ordenar alfabéticamente por el campo "name"
        return a.anyo.localeCompare(b.anyo);
      });
    });
  }



}
