import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @Input() count: number | undefined;
  title = 'add-to-cart';
  sidenavOption: any;
    isshow:boolean=true;
    repoService: any;
    menu_hide_show(){
    this.isshow = !this.isshow;
}

@ViewChild('pdfTable') pdfTable: ElementRef;
//PDF genrate button click function
public downloadAsPDF() {
  let data = document.getElementById('htmltable');
      
      html2canvas(data).then(canvas => {
          
          let docWidth = 208;
          let docHeight = canvas.height * docWidth / canvas.width;
          
          const contentDataURL = canvas.toDataURL('image/png')
          let doc = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
          
          doc.save('exportedPdf.pdf');
      });

 
}
}