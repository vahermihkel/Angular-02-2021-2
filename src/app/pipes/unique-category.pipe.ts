import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  // [{title: "PEALKIRI", price: 50, category: "fishing"},{title: "TEINE", price: 50,...},{title: "PEALKIRI", price: 49,...}]
  // ["fishing", "fishing", "vein", "car", "vein"]
  // ["fishing", "vein", "car"]

  // .indexOf("fishing") - 0
  // .indexOf("fishing") - 0
  // .indexOf("vein") - 2
  // .indexOf("car") - 3
  // .indexOf("vein") - 2

  // index ---- 0,1,2,3,4,5.....

  // unikaalsus: 0==0 , 0!=1 , 2==2 , 3==3 , 2!=4  

  // .map(ese=>UUS)   -- asendab
  // .filter(ese=>TRUE) -- jätab valitud alles

  // value   "fishing"     "fishing"      "vein"      "car"      "vein"
  // index      0             1             2           3           4
  // array ["f","f","v"..]["f","f","v"..]["f","f","v"..]["f","f","v"..]["f","f","v"..]
  transform(value: Item[]): string[] {
    return value.map(item => item.category)
      .filter((value, index, array) =>
        array.indexOf(value) == index);
  }

}



// value.map(item => item.category) --   value.map(item => "123")
// võtab esemed, paneb asemele kategooriad
