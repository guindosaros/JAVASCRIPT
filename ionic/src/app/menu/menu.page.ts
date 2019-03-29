import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest, HttpParams, HttpResponse  } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private http: HttpClient, private route: Router, private param: ActivatedRoute) { }
  cat = [];
  recette = [];
  categorie = " ";
  ngOnInit() {
    console.log(this.param.snapshot.paramMap.get('nom'));
    this.get(this.param.snapshot.paramMap.get('nom'));
    this.getCat(this.param.snapshot.paramMap.get('nom'));
}

get(nom){
  this.http.get('http://localhost:4000/categorie/' +nom).subscribe((response) => {
  console.log(response['result']);
  this.recette = response['result'];
    });
}


// recuperer la categorie de la recette
getCat(nom){
  this.http.get('http://localhost:4000/categorie/seul/' +nom).subscribe((response) => {
  console.log(response['result'][0]);
  this.categorie = response['result'][0]['categorie'];
    });
}

// creation de la fonction choix 
Choix(id){
  this.route.navigate(['/details/' + id]);
}
}


