import {Directive, HostListener} from '@angular/core';


@Directive({
  selector: '[ValidateJPG]'
})
export class ValidateJPGDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent){
    const input: HTMLInputElement = event.target as HTMLInputElement
    let fileName = this.getLastSubstringAfterBackslash(input.value.toString());
    let goodFileName = this.verifyJpgExtension(fileName);
    const element = document.getElementById('docWarning');
    if(goodFileName){

      console.log(element);
      if(element != null){
        element.hidden = true;
      }else{
        return
      }
      console.log(goodFileName + " good");
    }
    else{
      if(element != null){
        console.log(element.attributes);
        element.hidden = false;
      }else{
        return
      }
      console.log(goodFileName + " bad");
    }
  }
 getLastSubstringAfterBackslash(str: string): string {
    const index = str.lastIndexOf('\\');
    return str.substring(index + 1);
  }
  verifyJpgExtension(str: string): boolean {
    const index = str.lastIndexOf('.');
    const extension = str.substring(index + 1);
    return extension.toLowerCase() === 'jpg';
  }


}
