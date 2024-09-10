import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
    transform(value: string): string {
        // Capitalize the first letter of the string.
        return value[0].toUpperCase() + value.slice(1);
    }

    /**This pipe has a single property, name. The name property is the name of the pipe that will be used in the template.
  
      The pipe also implements the PipeTransform interface. The PipeTransform interface defines a single method, transform(). The transform() method takes a value and returns a transformed value.
  
      In this case, the transform() method capitalizes the first letter of the string.
  
      To use the pipe, you can add it to an expression in your HTML template: */
}
