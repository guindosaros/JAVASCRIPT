import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest, HttpParams, HttpResponse  } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private http: HttpClient, private route: Router, private param: ActivatedRoute) { }
  information = {
    categorie: '',
    image:'',
    nom_recette:'',
    description :''
  };
  cuisine = [];
  ngOnInit() {
    console.log(this.param.snapshot.paramMap.get('id'));
    this.getCat(this.param.snapshot.paramMap.get('id'));
  }
  // Recuperer les details de la Nourriture  choisir
  getCat(id){
    this.http.get('http://localhost:4000/categorie/details/'+id).subscribe((response) => {
    console.log(response['result']);
    this.information = response['result'][0];
    this.cuisine = response['result'][0]['description'].split('.');
    console.log(this.cuisine);
      });

  }
}
