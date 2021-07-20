import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powermetter'
})
export class PowermetterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value==undefined||value==null||value==''){
      return 'خالی'
    }

    if(value==30){
      return 'ضعیف'
    }else if(value==70){
      return 'قابل قبول'
    }
    else if(value==100){
      return '!عالی'
    }

  }

}
