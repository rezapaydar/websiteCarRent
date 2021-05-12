import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueStr'
})
export class TrueStrPipe implements PipeTransform {

  transform(value: Boolean): String {

    if(value===true){
      return "دارد";

    }else{
      return "ندارد";

    }

  }

}
