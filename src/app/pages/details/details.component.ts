import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  private urlName = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  // tslint:disable-next-line:no-inferrable-types
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.getPokemon;
  }

  // tslint:disable-next-line:typedef
  public get getPokemon() {
    // tslint:disable-next-line:no-string-literal
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
        res => {
          this.pokemon = res;
          this.isLoading = true;
        },
        error => {
          this.apiError = true;
        }
    );
  }
}
