import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes : Recipe[] = [new Recipe('Idly','Suitable recipe for any kind of person(South Indian)', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Idli_with_Sambar_and_Chutney_-_Chennai_Banana_Leaf%2C_Syndal.jpg'),
                      new Recipe('Dosa',' Favourite recipe for many people(South Indian) ','https://upload.wikimedia.org/wikipedia/commons/6/6a/Idli_with_Sambar_and_Chutney_-_Chennai_Banana_Leaf%2C_Syndal.jpg'), 
                      new Recipe('Pongal','A different recipe with less spicy(South Indian) ','https://upload.wikimedia.org/wikipedia/commons/6/6a/Idli_with_Sambar_and_Chutney_-_Chennai_Banana_Leaf%2C_Syndal.jpg')];
                      
    constructor() { 

    }

  ngOnInit() {
  }

}
