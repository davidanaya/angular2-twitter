import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'profile' })
export class ProfilePipe implements PipeTransform {
    
    transform(items: any[], uid: string): any {
      if (items) return items.filter(item => item.uid === uid);
    }
}