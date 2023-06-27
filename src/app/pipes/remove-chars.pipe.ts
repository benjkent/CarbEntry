import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'cleanURL'
})
export class RemoveCharsPipe implements PipeTransform{
  transform(value: string): string{
    const regex = /^\/?(.*?)-.*$/;
    return value.replace(regex,'$1');
  }
}
