import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolderService } from '../holder.service';
import  autoTable from 'jspdf-autotable';
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-transection',
  templateUrl: './transection.component.html',
  styleUrls: ['./transection.component.css']
})
export class TransectionComponent {
  t_id: any;
  t_account: any;
  t_type: any;
  t_amount: any;
  t_date: any;
  t_notes: any;

  fromDate: string = new Date().toISOString().substring(0,10);
  toDate: string = new Date().toISOString().substring(0,10);


  transections: any;

  constructor(private stservice: HolderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.stservice.transectionByAccountno()
      .subscribe(
        response => {
          // console.log(response);

          this.transections = response
        }
      );
  }

  search() {
    this.stservice.userTransection(this.fromDate, this.toDate, this.t_account)
      .subscribe(
        response => {
          this.transections = response
        }
      );
  }



  generatePdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      html: '#dataTable',
      theme: 'grid',
      styles: { halign: 'center' }
    });
    // doc.save('table.pdf');
    const pdfOutput = doc.output('blob');
    const url = URL.createObjectURL(pdfOutput);
    window.open(url, '_blank');
  }

  JasperReport(){
    window.open(`http://localhost:8080/reports/${this.fromDate}/${this.toDate}/${this.t_account}`,"_blank");
  }

}
