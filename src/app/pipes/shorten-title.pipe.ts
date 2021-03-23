import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, wordCount?: number): string {
    // Elas metsas mutionu, keset kuuski noori ------ split(" ")  ----  ["Elas", "metsas", "mutionu," ...(6)] ----
    //  slice(0,2) --- ["Elas", "metsas"]  ---- join("::")   ---  "Elas::metsas"
    // Elas metsas mutionu, keset kuuski noori ---- split("")  ---- ["E", "l", "a", "s", " ", ...]
    if (!wordCount) {
      wordCount = 3;
    }
    return value.split(" ").slice(0, wordCount).join(" ");
  }

  // metalas ----- split("a")  ---- ["met", "l", "s"]

}
