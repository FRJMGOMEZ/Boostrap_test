import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.css"]
})
export class PrincipalComponent implements OnInit {
  pagina: number = 1;
  nombrePaginas:number[]=[0,1,2,3,4,5]

  constructor(private activatedRoute:ActivatedRoute, private route:Router) {

    this.activatedRoute.params.subscribe((params)=>{

      let pagina = Number(params['pagina'])

      this.pagina= pagina})
  }

  ngOnInit() {}

  cambiarPagina(salto) {

    if (this.pagina + salto >= 0) {

      if(this.nombrePaginas.indexOf(this.pagina+salto)>0){
        this.pagina += salto;
        this.route.navigate(['/principal', this.pagina])
      }
    }
  }
}
