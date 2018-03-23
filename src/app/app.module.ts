import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ReciepeItemComponent } from './recipe/recipe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, RecipeComponent, RecipeListComponent, RecipeDetailsComponent, ReciepeItemComponent, ShoppingListComponent, ShoppingEditComponent,
    ]
})
export class AppModule { }
