import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.css"]
})
export class PrincipalComponent implements OnInit {
  pagina: number = 1;

  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe((params)=>{

      let pagina = Number(params['pagina'])
      
      this.pagina= pagina})
  }

  ngOnInit() {}

  cambiarPagina(salto) {
    if (this.pagina + salto > 0) {
      this.pagina += salto;
    }
  }
}
